export type FontOption = "Inter" | "Lora" | "Inconsolata";

export type DictionaryFetchStates = {
  data: Dictionary[] | DictionaryTermNotFound | undefined;
  isLoading: boolean;
  isFetching: boolean;
};

export type Dictionary = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
};

export type DictionaryTermNotFound = {
  title: string;
  message: string;
  resolution: string;
};

export type Phonetic = {
  text: string;
  audio: string;
  license: License;
  sourceUrl: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string;
};

type Definition = {
  definition: string;
  synonyms: string;
  antonyms: string;
  example: string;
};

type License = {
  name: string;
  url: string;
};
