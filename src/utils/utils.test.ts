import { cleanPhraseWords, getNgrams } from ".";

const phrases = ["Show me the code.", "I am just testing my function"];

describe("getNgrams function validates params received", () => {
  test("throws error if no text received", () => {
    expect(() => {
      getNgrams();
    }).toThrow("text is required");
  });

  test("throws error if text is not a string", () => {
    expect(() => {
      getNgrams(4);
    }).toThrow("text must be a string");
  });

  test("throws error if text is an empty string", () => {
    expect(() => {
      getNgrams("");
    }).toThrow("text must contain at least one character");
  });
});

describe("Evaluate getNgrams function phrase with testing phrases", () => {
  const getPhrasePermutationLength = (phrase) => {
    const words = cleanPhraseWords(phrase);
    return (words.length * (words.length + 1)) / 2;
  };

  test("should return correct length array for phrases[0]", () => {
    const ngrams = getNgrams(phrases[0]);
    expect(ngrams.length).toEqual(getPhrasePermutationLength(phrases[0]));
  });

  test("should return correct length for phrases[1]", () => {
    const ngrams = getNgrams(phrases[1]);
    expect(ngrams.length).toEqual(getPhrasePermutationLength(phrases[1]));
  });
});
