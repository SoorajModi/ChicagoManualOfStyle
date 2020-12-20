import { LectureInterface, createLecture } from './lectureInterface';

import { lectureInfoBibliography, lectureInfoNote } from './lectureInfo';

export function lectureNote(info: LectureInterface): string {
  let citation = createLecture(info);
  return `${citation.professor.note()}"${citation.courseTitle}" ${lectureInfoNote(citation.info)}.`;
}

export function lectureBibliography(info: LectureInterface): string {
  let citation = createLecture(info);
  return `${citation.professor.bibliography()}"${citation.courseTitle}." ${lectureInfoBibliography(citation.info)}.`;
}
