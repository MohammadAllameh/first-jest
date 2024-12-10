const Calculater = require("../src/tdd");

describe("calculateDiscount", () => {
  let calculater;
  beforeEach(() => {
    calculater = new Calculater(10, 5);
  });
  it("should hvae a and b peropery", () => {
    expect(calculater).toHaveProperty("a");
    expect(calculater).toHaveProperty("b");
  });
  it("add", () => {
    expect(calculater.add()).toBe(15);
  });
  it("sub", () => {
    expect(calculater.sub()).toBe(5);
  });
  it("div", () => {
    expect(calculater.div()).toBe(2);
  });
  it("mul", () => {
    expect(calculater.mul()).toBe(50);
  });
});
