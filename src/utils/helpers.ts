const validateText = (text: string) => {
  if (typeof text === "undefined") {
    throw new Error("text is required");
  }
  if (typeof text !== "string") {
    throw new Error("text must be a string");
  }
  if (text.length === 0) {
    throw new Error("text must contain at least one character");
  }
};

const getSentenceNgrams = (words: string[]) => {
  return words.map((_, index) => {
    const iteratedWords = words.slice(0, index + 1);
    return iteratedWords.join(" ");
  }, [] as string[]);
};

export const cleanPhraseWords = (text: string): string[] => {
  const strippedPunctuationText = text.replace(/[^\w\s]|_/g, "");
  return strippedPunctuationText.split(" ");
};

export const getNgrams = (text: string): string[] => {
  try {
    validateText(text);
    const words = cleanPhraseWords(text);
    return words
      .map((_, index) => {
        const aWords = words.slice(index, words.length);
        return getSentenceNgrams(aWords);
      })
      .flat();
  } catch (err) {
    throw err;
  }
};
