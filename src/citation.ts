import { BookInterface } from './Book/bookInterface';
import { JournalInterface } from './Journal/journalInterface';
import { WebpageInterface } from './Website/webpageInterface';
import { LectureInterface } from './Lecture/lectureInterface';
import { bookBibliography, bookNoteList } from './Book/book';
import {webpageBibliography, webpageNote, webpageShortNote} from './Website/webpage';
import {lectureBibliography, lectureNote, lectureShortNote} from './Lecture/lecture';
import { journalBibliography, journalNoteList } from './Journal/journal';

export function book(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  return { bibliography: bookBibliography(info), notes: bookNoteList(info, pages) };
}

export function journal(info: JournalInterface, pages: {page: string}[]): {bibliography: string, notes: string[]} {
  return { bibliography: journalBibliography(info), notes: journalNoteList(info, pages) };
}

export function webpage(info: WebpageInterface): {bibliography: string, notes: string[]} {
  let note: string = webpageNote(info);
  let shortNote: string = webpageShortNote(info);

  return { bibliography: webpageBibliography(info), notes: [note, shortNote] };
}

export function lecture(info: LectureInterface): {bibliography: string, notes: string[]} {
  let note: string = lectureNote(info);
  let shortNote: string = lectureShortNote(info);

  return { bibliography: lectureBibliography(info), notes: [note, shortNote] };
}
