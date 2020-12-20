import {BookInterface} from './Book/bookInterface';
import {JournalInterface} from './Journal/journalInterface';
import {WebpageInterface} from './Website/webpageInterface';
import {LectureInterface} from './Lecture/lectureInterface';
import {bookBibliography, bookNoteList, eBookBibliography, eBookNoteList,} from './Book/book';
import {webpageBibliography, webpageNote} from './Website/webpage';
import {lectureBibliography, lectureNote} from './Lecture/lecture';
import {eJournalBibliography, eJournalNoteList, journalBibliography, journalNoteList,} from './Journal/journal';

export function bookCitation(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  return { bibliography: bookBibliography(info), notes: bookNoteList(info, pages) };
}

export function eBookCitation(info: BookInterface, pages: string[]): {bibliography: string, notes: string[]} {
  if (!info.url) throw new Error('URL not specified');
  return { bibliography: eBookBibliography(info, info.url), notes: eBookNoteList(info, pages, info.url) };
}

export function journalCitation(info: JournalInterface, pages: string[]): {bibliography: string, notes: string[]} {
  return { bibliography: journalBibliography(info), notes: journalNoteList(info, pages) };
}

export function eJournalCitation(info: JournalInterface, pages: string[]): {bibliography: string, notes: string[]} {
  if (!info.url) throw new Error('URL not specified');
  return { bibliography: eJournalBibliography(info, info.url), notes: eJournalNoteList(info, pages, info.url) };
}

export function webpageCitation(info: WebpageInterface): {bibliography: string, notes: string[]} {
  let note: string = webpageNote(info);
  return { bibliography: webpageBibliography(info), notes: [note] };
}

export function lectureCitation(info: LectureInterface): {bibliography: string, notes: string[]} {
  let note: string = lectureNote(info);
  return { bibliography: lectureBibliography(info), notes: [note] };
}
