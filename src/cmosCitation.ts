import { BookInterface } from './Book/bookInterface';
import { JournalInterface } from './Journal/journalInterface';
import { WebpageInterface } from './Website/webpageInterface';
import { LectureInterface } from './Lecture/lectureInterface';
import { bookBibliography, bookNoteList } from './Book/book';
import { webpageBibliography, webpageNote } from './Website/webpage';
import { lectureBibliography, lectureNote } from './Lecture/lecture';
import { journalBibliography, journalNoteList } from './Journal/journal';

export function book(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  return { bibliography: bookBibliography(info), notes: bookNoteList(info, pages) };
}

export function journal(info: JournalInterface, pages: {page: string}[]): {bibliography: string, notes: string[]} {
  return { bibliography: journalBibliography(info), notes: journalNoteList(info, pages) };
}

export function webpage(info: WebpageInterface): {bibliography: string, notes: string[]} {
  let note: string = webpageNote(info);
  return { bibliography: webpageBibliography(info), notes: [note] };
}

export function lecture(info: LectureInterface): {bibliography: string, notes: string[]} {
  let note: string = lectureNote(info);
  return { bibliography: lectureBibliography(info), notes: [note] };
}
