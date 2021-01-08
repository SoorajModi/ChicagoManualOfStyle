import { BookInterface } from './Book/bookInterface';
import { JournalInterface } from './Journal/journalInterface';
import { WebpageInterface } from './Website/webpageInterface';
import { LectureInterface } from './Lecture/lectureInterface';
import { bookBibliography, bookNoteList } from './Book/book';
import { webpageBibliography, webpageNote, webpageShortNote } from './Website/webpage';
import { lectureBibliography, lectureNote, lectureShortNote } from './Lecture/lecture';
import { journalBibliography, journalNoteList } from './Journal/journal';
import { NewspaperInterface } from './Newspaper/newspaperInterface';
import { newspaperBibliography, newspaperNote } from './Newspaper/newspaper';

export function book(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  let bibliography: string = bookBibliography(info);
  let notes: string[] = bookNoteList(info, pages);

  return { bibliography, notes };
}

export function journal(info: JournalInterface, pages: {page: string}[]): {bibliography: string, notes: string[]} {
  let bibliography: string = journalBibliography(info);
  let notes: string[] = journalNoteList(info, pages);

  return { bibliography, notes };
}

export function webpage(info: WebpageInterface): {bibliography: string, notes: string[]} {
  let bibliography: string = webpageBibliography(info);
  let note: string = webpageNote(info);
  let shortNote: string = webpageShortNote(info);

  return { bibliography, notes: [note, shortNote] };
}

export function lecture(info: LectureInterface): {bibliography: string, notes: string[]} {
  let bibliography: string = lectureBibliography(info);
  let note: string = lectureNote(info);
  let shortNote: string = lectureShortNote(info);

  return { bibliography, notes: [note, shortNote] };
}

export function newspaper(info: NewspaperInterface): {bibliography: string, notes: string[]} {
  let bibliography: string = newspaperBibliography(info);
  let note: string = newspaperNote(info);

  return { bibliography, notes: [note] };
}
