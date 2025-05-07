describe("esPar kata", () => {
  it("should exist a variable named esPar", () => {
    // Arrange
    // Act
    // Assert
    expect(esPar).not.toBe(undefined);
  });

  it("should be a function", () => {
    expect(typeof esPar).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof esPar()).toEqual("boolean");
  });
  it("should return true if arg is 18", () => {
    expect(esPar(18)).toBe(true);
  });
  it("should return false if received arg is -17", () => {
    expect(esPar(-17)).toBe(false);
  });
});

describe("factorial kata", () => {
  it("should exist a variable named factorial", () => {
    // Arrange
    // Act
    // Assert
    expect(factorial).not.toBe(undefined);
  });

  it("should be a function", () => {
    expect(typeof factorial).toEqual("function");
  });
  it("should return a number", () => {
    expect(typeof factorial()).toEqual("number");
  });
  it("should return 120 if arg is 5", () => {
    expect(factorial(5)).toBe(120);
  });
  it("should return 5040 if received arg is 7", () => {
    expect(factorial(7)).toBe(5040);
  });
  it("should return 1 if received arg is 0", () => {
    expect(factorial(0)).toBe(1);
  });
});
