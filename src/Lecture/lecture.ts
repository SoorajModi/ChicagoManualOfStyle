import {LectureInterface, createLecture, validLectureInterface} from './lectureInterface';
import { lectureInfoBibliography, lectureInfoNote } from './lectureInfo';

export function lectureNote(info: LectureInterface): string {
  let citation: validLectureInterface = createLecture(info);
  return `${citation.professor.note()}"${citation.courseTitle}" ${lectureInfoNote(citation.info)}.`;
}

export function lectureBibliography(info: LectureInterface): string {
  let citation: validLectureInterface = createLecture(info);
  return `${citation.professor.bibliography()}"${citation.courseTitle}." ${lectureInfoBibliography(citation.info)}.`;
}

export function lectureShortNote(info: LectureInterface): string {
  let citation: validLectureInterface = createLecture(info);
  return shortNotePrepend(citation) + "\"" + citation.courseTitle + ".\"";
}

function shortNotePrepend(citation: validLectureInterface): string {
  return (citation.professor.length() === 0) ? "" : citation.professor.authors[0].last + ", ";
}
