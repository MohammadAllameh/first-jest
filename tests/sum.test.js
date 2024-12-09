const { gta, shoppingList, getMessageWelcom, getUser } = require("../src/sum");
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

describe("getMessageWelcom", () => {
  it("should return Welcome", () => {
    const result = getMessageWelcom("mohammad");
    expect(result).toContain("mohammad");
  });
});

describe("shoppingList", () => {
  // it("should return an array", () => {
  //   const result = shoppingList("milk");
  //   expect(result).toBeInstanceOf(Array);
  // });
  it("should return an array", () => {
    const result = shoppingList();
    expect(result).toContain("milk");
  });
  // it("the shopping list has milk on it", () => {
  //   expect(shoppingList).toContain("milk");
  //   expect(new Set(shoppingList)).toContain("milk");
  // });
});

describe("getMessageWelcom", () => {
  it("should return Welcome", () => {
    const result = getMessageWelcom("mohammad");
    expect(result).toContain("mohammad");
  });
});

// describe("gta - math pointer", () => {});
