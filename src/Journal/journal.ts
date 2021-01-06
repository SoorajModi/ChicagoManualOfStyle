import { JournalInterface, createJournal } from './journalInterface';
import journalInfoCitation, { noPublishingInfo } from './journalInfo';
import { getRange } from './pageRange';
import { JournalInfoInterface } from './journalInfoInterface';
import { BookInterface } from '../Book/bookInterface';
import {validatePages} from "../noteUtility";

export function journalNote(info: JournalInterface, page: {page: string}): string {
  let citation = createJournal(info);
  return `${citation.authorList.note()}"${citation.title}," ${journalInfoCitation(citation.info)}${isSpaceRequired(citation.info)}${page.page}.`;
}

export function journalShortNote(info: JournalInterface, page: {page: string}): string {
  return `${getShortNotePrefix(info) + page.page}.`;
}

export function journalBibliography(info: JournalInterface): string {
  let citation = createJournal(info);
  return `${citation.authorList.bibliography()}"${citation.title}." ${journalInfoCitation(citation.info)} ${getRange(citation.startRange, citation.endRange)}${isPeriodRequired(citation.info, citation.startRange)}`.trim();
}

export function journalNoteList(info: JournalInterface, pages: Array<{page: string}>): string[] {
  const validPages: Array<{page: string}> = validatePages(pages);
  let notes: string[] = [];

  if (validPages.length > 0) {
    notes.push(journalNote(info, validPages[0]));

    for (let i = 1; i < pages.length; i++) {
      notes.push(journalShortNote(info, validPages[i]));
    }
  }

  return notes;
}

export function eJournalNote(info: JournalInterface, page: {page: string}, url: string): string {
  return (`${(journalNote(info, page)).replace(/.$/, ', ') + url}.`);
}

export function eJournalNoteList(info: JournalInterface, pages: Array<{page: string}>, url: string): string[] {
  const validPages: Array<{page: string}> = validatePages(pages);
  let notes: string[] = [];

  for (let page of validPages) {
    notes.push(eJournalNote(info, page, url));
  }

  return notes;
}

export function eJournalBibliography(info: JournalInterface, url: string): string {
  return (`${journalBibliography(info)} ${url}.`);
}

function isSpaceRequired(info: JournalInfoInterface): string {
  return (noPublishingInfo(info)) ? '' : ' ';
}

function isPeriodRequired(info: JournalInfoInterface, start: string): string {
  return (noPublishingInfo(info) && start === '') ? '' : '.';
}

function getShortNotePrefix(info: BookInterface): string {
  let citation = createJournal(info);
  return (citation.authorList.authors.length === 0) ? (`"${citation.title}," `) : (`${citation.authorList.authors[0].last}, `);
}
