const { sum, sub, div, mult } = require("./functions")

test("adds 2 + 2 to equal 4", () => {
  expect(sum(1, 2)).toBe(3)
})

test("diff 4 - 2 to equal 2", () => {
  expect(sub(4, 2)).toBe(2)
})

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1)
})

test("mult 2 * 2 to equal 4", () => {
  expect(mult(2, 2)).toBe(4)
})
