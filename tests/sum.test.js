const gta = require("../src/sum");
// test("our first test", () => {
//   throw new Error("test failed");
// });

describe("gta - math pointer", () => {
  //   test("should return true if c is grater than d", () => {
  it("should return true if c is grater than d", () => {
    const result = gta(3, 2);
    //   expect(result).toBeNull();

    expect(result).toBe(true);
    expect(0.4).toBeCloseTo(0.4);
  });

  it("should return false if c is less than d", () => {
    const result = gta(2, 3);
    expect(result).toBe(false);
  });

  it("should return true if c is equal tab", () => {
    const result = gta(3, 3);
    expect(result).toBe(true);
  });
});
