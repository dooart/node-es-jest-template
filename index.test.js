import { sum } from "./index";

test("1 + 1 = 3", () => {
  expect([1, [2], 3]).toEqual([1, [2], 3]);
  expect(sum(1, 1)).toBe(3);
});
