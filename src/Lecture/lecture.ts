import {LectureInterface} from "./lectureInterface";
import {createLecture} from "./lectureInterface";
import {lectureInfoBibliography, lectureInfoNote} from "./lectureInfo";

function lectureNote(info: LectureInterface): string {
    let citation = createLecture(info);
    return citation.professor.note() + "\"" + citation.courseTitle + "\" " + lectureInfoNote(citation.info) + ".";
}

function lectureBibliography(info: LectureInterface): string {
    let citation = createLecture(info);
    return citation.professor.bibliography() + "\"" + citation.courseTitle + ".\" " + lectureInfoBibliography(citation.info) + ".";
}

export {lectureNote, lectureBibliography};