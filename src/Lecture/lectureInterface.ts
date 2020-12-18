import {AuthorList} from "../Author/authorList";
import {LectureInfo} from "./lectureInfo";

export interface LectureInterface {
    title: string;
    professor: { first: string, last: string }[];
    university?: string;
    city?: string;
    province?: string;
    date?: string;
}

function createLecture(info: LectureInterface) {
    return {
        courseTitle: info.title,
        professor: new AuthorList(info.professor || []),
        info: new LectureInfo(info.university || "", info.city || "", info.province || "", info.date || "")
    }
}

module.exports = {
    createLecture: createLecture
};