import Authors from "../Author/authors";
import { LectureInfoInterface } from "./lectureInfoInterface";

export interface LectureInterface {
  title: string;
  professors?: Array<{ first: string; last: string }>;
  university?: string;
  city?: string;
  province?: string;
  date?: string;
}

export interface validLectureInterface {
  courseTitle: string;
  professors: Authors;
  info: LectureInfoInterface;
}

export function createLecture(info: LectureInterface): validLectureInterface {
  return {
    courseTitle: info.title,
    professors: new Authors(info.professors || []),
    info: {
      university: info.university || "",
      city: info.city || "",
      province: info.province || "",
      date: info.date || "",
    },
  };
}
