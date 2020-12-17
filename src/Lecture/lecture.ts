import {AuthorList} from "../Author/authorList";
import {LectureInterface} from "./lectureInterface";
import {LectureInfo} from "./lectureInfo";

export class Lecture {
    professor: AuthorList;
    courseTitle: string;
    info: LectureInfo;

    constructor(citation: LectureInterface) {
        this.professor = new AuthorList(citation.professor || []);
        this.courseTitle = citation.title;
        this.info = new LectureInfo(citation.university || "", citation.city || "", citation.province || "", citation.date || "");
    }

    note() {
        return this.professor.authorsNote() + "\"" + this.courseTitle + "\" " + this.info.note() + ".";
    }

    bibliography() {
        return this.professor.authorsBibliography() + "\"" + this.courseTitle + ".\" " + this.info.bibliography() + ".";
    }
}