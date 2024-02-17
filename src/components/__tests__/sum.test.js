import { sum } from "../../utils/sum";

test("testing sum function", () => {
  const a = 5;
  const b = 6;
  const result = sum(a, b);

  //Assertion
  expect(result).toBe(11);
});
