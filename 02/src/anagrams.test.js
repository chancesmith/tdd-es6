import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram", () => {
  it("should return true if given two empty strings", () => {
    const expected = true;
    const actual = isAnagram("", "");
    expect(actual).to.equal(expected);
  });

  it("should return false if given two strings that are different letter counts", () => {
    const expected = false;
    const actual = isAnagram("", "a");
    expect(actual).to.equal(expected);
  });

  it("should return false if given two strings longer that are different letter counts", () => {
    const expected = false;
    const actual = isAnagram("wonder", "wonders");
    expect(actual).to.equal(expected);
  });

  it("should return true if given two strings longer that have same letter counts", () => {
    const expected = true;
    const actual = isAnagram("wonder", "wonder");
    expect(actual).to.equal(expected);
  });

  it("should return true if given two strings have same letter counts and one has spaces", () => {
    const expected = true;
    const actual = isAnagram("conversation", "voices rant on");
    expect(actual).to.equal(expected);
  });

  it("should return true if given two strings have same letter counts and different letter casing", () => {
    const expected = true;
    const actual = isAnagram("conversation", "VOICES rant on");
    expect(actual).to.equal(expected);
  });
});
