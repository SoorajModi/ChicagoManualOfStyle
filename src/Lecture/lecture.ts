import {LectureInterface} from "./lectureInterface";
const {createLecture} = require("./lectureInterface");

function lectureNote(info: LectureInterface): string {
    let citation = createLecture(info);
    return citation.professor.note() + "\"" + citation.courseTitle + "\" " + citation.info.note() + ".";
}

function lectureBibliography(info: LectureInterface): string {
    let citation = createLecture(info);
    return citation.professor.bibliography() + "\"" + citation.courseTitle + ".\" " + citation.info.bibliography() + ".";
}

module.exports = {
    lectureNote: lectureNote,
    lectureBibliography: lectureBibliography
};