import { expect } from "chai";
import { getLetterCount } from "./letter-count";

describe("Get Letter Count - basic funcationality", () => {
  it("should return empty object when passed empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("should return a letter count of a word with only on of each letter", () => {
    const expected = { g: 1, r: 1, e: 1, a: 1, t: 1 };
    const actual = getLetterCount("great");
    expect(actual).to.deep.equal(expected);
  });

  it("should return a letter count of a word with many smae letters", () => {
    const expected = { b: 1, e: 2, t: 2, r: 1 };
    const actual = getLetterCount("better");
    expect(actual).to.deep.equal(expected);
  });
});
