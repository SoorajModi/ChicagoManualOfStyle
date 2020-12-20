import { BookInterface } from './Book/bookInterface';
import { JournalInterface } from './Journal/journalInterface';
import { WebpageInterface } from './Website/webpageInterface';
import { LectureInterface } from './Lecture/lectureInterface';
import {
  bookNote, bookBibliography, eBookNote, eBookBibliography,
} from './Book/book';
import { webpageNote, webpageBibliography } from './Website/webpage';
import { lectureNote, lectureBibliography } from './Lecture/lecture';
import {
  journalNote, journalBibliography, eJournalNote, eJournalBibliography,
} from './Journal/journal';

export function createBookCitation(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  let bib = bookBibliography(info);

  let notes: string[] = [];

  for (let page of pages) {
    notes.push(bookNote(info, page));
  }

  return { bibliography: bib, notes };
}

export function createEBookCitation(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  if (!info.url) throw new Error('URL not specified');
  let bib = eBookBibliography(info, info.url);

  let notes: string[] = [];

  for (let page of pages) {
    notes.push(eBookNote(info, page, info.url));
  }

  return { bibliography: bib, notes };
}

export function createJournalCitation(info: JournalInterface, pages: string[]): {bibliography: string, notes: string[]} {
  let bib = journalBibliography(info);

  let notes: string[] = [];

  for (let page of pages) {
    notes.push(journalNote(info, page));
  }

  return { bibliography: bib, notes };
}

export function createEJournalCitation(info: JournalInterface, pages: string[]): {bibliography: string, notes: string[]} {
  if (!info.url) throw new Error('URL not specified');

  let bib = eJournalBibliography(info, info.url);

  let notes: string[] = [];
  for (let page of pages) {
    notes.push(eJournalNote(info, page, info.url));
  }

  return { bibliography: bib, notes };
}

export function createWebpageCitation(info: WebpageInterface): {bibliography: string, notes: string[]} {
  let note: string = webpageNote(info);
  let bib: string = webpageBibliography(info);
  return { bibliography: bib, notes: [note] };
}

export function createLectureCitation(info: LectureInterface): {bibliography: string, notes: string[]} {
  let note: string = lectureNote(info);
  let bib: string = lectureBibliography(info);
  return { bibliography: bib, notes: [note] };
}
