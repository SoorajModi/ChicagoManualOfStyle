import { JournalInterface, createJournal } from './journalInterface';
import journalInfoCitation from './journalInfo';
import { getRange } from './pageRange';

export function journalNote(info: JournalInterface, page: string): string {
  let citation = createJournal(info);
  return `${citation.authorList.note()}"${citation.title}," ${journalInfoCitation(citation.info)} ${page}.`;
}

export function journalBibliography(info: JournalInterface): string {
  let citation = createJournal(info);
  return `${citation.authorList.bibliography()}"${citation.title}." ${journalInfoCitation(citation.info)} ${getRange(citation.startRange, citation.endRange)}.`;
}

export function journalNoteList(info: JournalInterface, pages: string[]): string[] {
  let notes: string[] = [];

  for (let page of pages) {
    notes.push(journalNote(info, page));
  }

  return notes;
}

export function eJournalNote(info: JournalInterface, page: string, url: string): string {
  return (`${(journalNote(info, page)).replace(/.$/, ', ') + url}.`);
}

export function eJournalNoteList(info: JournalInterface, pages: string[], url: string): string[] {
  let notes: string[] = [];

  for (let page of pages) {
    notes.push(eJournalNote(info, page, url));
  }

  return notes;
}

export function eJournalBibliography(info: JournalInterface, url: string): string {
  return (`${journalBibliography(info)} ${url}.`);
}
