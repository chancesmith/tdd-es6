import { getLetterCount } from "./letter-count";

const sortObject = (obj) =>
  Object.keys(obj)
    .sort()
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

export const isAnagram = (word1, word2) => {
  if (word1 === word2) return true;

  // lowercase and remove spaces
  const word1Lowercase = word1.toLowerCase().split(" ").join("");
  const word2Lowercase = word2.toLowerCase().split(" ").join("");

  // get letter count
  const word1Result = getLetterCount(word1Lowercase);
  const word2Result = getLetterCount(word2Lowercase);

  // sort keys
  const word1Sorted = sortObject(word1Result);
  const word2Sorted = sortObject(word2Result);

  // help do deep comparison
  const result = JSON.stringify(word1Sorted) === JSON.stringify(word2Sorted);
  return result;
};
