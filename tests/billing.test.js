import { calculateCost } from "../libs/billing-lib";
test("Lowest tire", () => {
  const storage = 10;
  const cost = 4000;
  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});

test("Middle tire", () => {
  const storage = 100;
  const cost = 20000;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("Highest tire ", () => {
  const storage = 101;
  const cost = 10100;
  const expectedCost = calculateCost(storage);
  expect(cost).toEqual(expectedCost);
});
