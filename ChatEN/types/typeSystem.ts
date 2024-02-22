export type datachat = {
  inde: number;
  userchat: string;
  botchat: string;
  own: string;
};
export type dicchat = {
  inde: number;
  userchat: string;
  botchat: sentences[];
};
export type sentences = {
  _id: string;
  fields: {
    en: string;
    vi: string;
  };
};
export type dataTraCau = {
  value: any;
  language: string;
  sentences: sentences[];
  suggestions: any[];
  tratu: any[];
};
export type transcripts = [
  {
    _id: string;
    fields: {
      duration: string;
      en: string;
      start: string;
      youtube_id: string;
    };
  }
];
export type transcriptss = {
  transcripts: transcripts;
};
export type vocabulary = {
  WordID: number;
  Word: string;
  mean: string;
};
export type favourite = {
  own: number;
  WordID: number;
};
export type favouriteWord = {
  own: number;
  WordID: number;
  Vocabulary: vocabulary;
};
export type login = {
  Username: string;
  Password: string;
};
export type signup = {
  Username: string;
  Password: string;
  Name: string;
};

export type chatHistory = {
  role: string;
  parts: string;
};
export type MyFlip = {
  id: number;
  personID: number;
  word:string,
  mean:string
};
export type AddVocabulary = {
  personID: string | null;
  word: string;
  mean: string;
};
