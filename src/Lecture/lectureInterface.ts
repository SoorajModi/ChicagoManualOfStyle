import AuthorList from '../Author/authorList';
import { LectureInfoInterface } from './lectureInfoInterface';

export interface LectureInterface {
    title: string;
    professor?: Array<{ first: string, last: string }>;
    university?: string;
    city?: string;
    province?: string;
    date?: string;
}

export interface validLectureInterface {
    courseTitle: string;
    professor: AuthorList;
    info: LectureInfoInterface;
}

export function createLecture(info: LectureInterface): {courseTitle: string, professor: AuthorList, info: LectureInfoInterface} {
  return {
    courseTitle: info.title,
    professor: new AuthorList(info.professor || []),
    info: {
      university: info.university || '', city: info.city || '', province: info.province || '', date: info.date || '',
    },
  };
}
