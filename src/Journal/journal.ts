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

export function eJournalNote(info: JournalInterface, page: string, url: string): string {
  return (`${(journalNote(info, page)).replace(/.$/, ', ') + url}.`);
}

export function eJournalBibliography(info: JournalInterface, url: string): string {
  return (`${journalBibliography(info)} ${url}.`);
}
