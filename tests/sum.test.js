const {
  gta,
  shoppingList,
  getMessageWelcom,
  getUser,
  login,
} = require("../src/main");
// test("our first test", () => {
//   throw new Error("test failed");
// });

// indgroutn with test and describe  and it and expect
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

// test for string
describe("getMessageWelcom", () => {
  it("should return Welcome", () => {
    const result = getMessageWelcom("mohammad");
    expect(result).toContain("mohammad");
  });
});

// work test for list string
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

// work test for Object and method more
describe("getUster", () => {
  it("should return User Information", () => {
    const result = getUser();
    // expect(result).toEqual({ id: 1, name: "mohammad" });
    // expect(result).toMatchObject({ id: 2 });
    expect(result).toHaveProperty("id"); // entity Id property
    expect(result).toHaveProperty("id", 1); // entity Id property and value currect
  });
});

// work test for Object and method more
describe("login", () => {
  it("should return throw an error if password is wrong", () => {
    expect(() => {
      login("1235");
    }).toThrow();
  });
  it("should return jwt  if password is not wrong", () => {
    const result = login("1234");
    expect(result).toHaveProperty("jwt");
  });
});
