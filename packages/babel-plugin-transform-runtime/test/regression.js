it("module.exports.default is correctly updated", () => {
  const typeofHelper = require("@babel/runtime/helpers/typeof");

  expect(typeof typeofHelper).toBe("function");
  expect(typeof typeofHelper.default).toBe("function");

  typeofHelper();

  expect(typeof typeofHelper).toBe("function");
  expect(typeof typeofHelper.default).toBe("function");
});