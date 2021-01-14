import {
  JournalInterface,
  createJournal,
  validJournalInterface,
} from "./journalInterface";
import journalInfoCitation, { noPublishingInfo } from "./journalInfo";
import { getRange } from "./pageRange";
import { JournalInfoInterface } from "./journalInfoInterface";
import { BookInterface } from "../Book/bookInterface";
import validatePages from "../noteUtility";

export function journalNoteList(
  info: JournalInterface,
  pages: { page: string }[]
): string[] {
  const validPages: Array<{ page: string }> = validatePages(pages);
  let notes: string[] = [];

  if (validPages.length > 0) {
    notes.push(journalNote(info, validPages[0]));

    for (let i = 1; i < validPages.length; i++) {
      notes.push(journalShortNote(info, validPages[i]));
    }
  }

  return notes;
}

export function journalBibliography(info: JournalInterface): string {
  let citation = createJournal(info);

  if (citation.url !== "") {
    return `${standardJournalBibliography(citation)} ${citation.url}.`;
  }

  return standardJournalBibliography(citation);
}

export function journalShortNote(
  info: JournalInterface,
  page: { page: string }
): string {
  return `${getShortNotePrefix(info) + page.page}.`;
}

export function journalNote(
  info: JournalInterface,
  page: { page: string }
): string {
  let citation: validJournalInterface = createJournal(info);

  if (citation.url !== "") {
    return `${
      standardJournalNote(citation, page).replace(/.$/, ", ") + citation.url
    }.`;
  }

  return standardJournalNote(citation, page);
}

function standardJournalNote(
  citation: validJournalInterface,
  page: { page: string }
): string {
  return `${citation.authorList.note()}"${
    citation.title
  }," ${journalInfoCitation(citation.info)}${isSpaceRequired(citation.info)}${
    page.page
  }.`;
}

function standardJournalBibliography(citation: validJournalInterface): string {
  return `${citation.authorList.bibliography()}"${
    citation.title
  }." ${journalInfoCitation(citation.info)} ${getRange(
    citation.startRange,
    citation.endRange
  )}${isPeriodRequired(citation.info, citation.startRange)}`.trim();
}

function isSpaceRequired(info: JournalInfoInterface): string {
  return noPublishingInfo(info) ? "" : " ";
}

function isPeriodRequired(info: JournalInfoInterface, start: string): string {
  return noPublishingInfo(info) && start === "" ? "" : ".";
}

function getShortNotePrefix(info: BookInterface): string {
  let citation = createJournal(info);
  return citation.authorList.authors.length === 0
    ? `"${citation.title}," `
    : `${citation.authorList.authors[0].last}, `;
}
