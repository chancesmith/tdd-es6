export const getLetterCount = (word) => {
  const result = word.split("").reduce((acc, letter) => {
    if (acc[letter]) return { ...acc, [letter]: acc[letter] + 1 };
    return { ...acc, [letter]: 1 };
  }, {});
  return result;
};
