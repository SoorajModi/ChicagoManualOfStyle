import Authors from "../Author/authors";
import { JournalInfoInterface } from "./journalInfoInterface";

export interface JournalInterface {
  title: string;
  authors?: Array<{ first: string; last: string }>;
  publisher?: string;
  yearOfPublication?: string;
  volume?: string;
  issue?: string;
  startRange?: string;
  endRange?: string;
  url?: string;
}

export interface validJournalInterface {
  title: string;
  authorList: Authors;
  info: JournalInfoInterface;
  startRange: string;
  endRange: string;
  url: string;
}

export function createJournal(info: JournalInterface): validJournalInterface {
  return {
    title: info.title,
    authorList: new Authors(info.authors || []),
    info: {
      journal: info.publisher || "",
      date: info.yearOfPublication || "",
      volume: info.volume || "",
      issue: info.issue || "",
    },
    startRange: info.startRange || "",
    endRange: info.endRange || "",
    url: info.url || "",
  };
}
