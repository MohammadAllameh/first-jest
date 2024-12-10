const service = require("../src/services");
const { calculateDiscount } = require("../src/finduser");

describe("calculateDiscount", () => {
  beforeEach(() => {
    service.sendEmail = jest.fn();
  });
  it("should return 10 if user has more than 3 purchases", async () => {
    // const mockFunction = jest.fn();
    // mockFunction.mockRejectedValue(new Error("error"));
    // mockFunction.mockRejectedValue(24);
    // mockFunction.mockResolvedValue(24);
    // mockFunction.mockReturnValue(24);
    // await mockFunction();
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "mohammad",
      purchasesCount: 4,
    });
    expect(calculateDiscount()).toBe(10);
  });

  it("should return 10 if user has less than 3 purchases", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "mohammad",
      purchasesCount: 2,
    });
    expect(calculateDiscount()).toBe(0);
  });
  it("should send a email", () => {
    service.getUserById = jest.fn().mockReturnValue({
      id: 4,
      name: "mohammad",
      purchasesCount: 4,
    });
    calculateDiscount();
    expect(service.sendEmail).toHaveBeenCalled();
    expect(service.sendEmail.mock.calls[0][0]).toBe("mohammad");
    expect(service.sendEmail.mock.calls[0][1]).toContain("10 percent");
  });
});
