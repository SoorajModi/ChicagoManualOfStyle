import {LectureInfoInterface} from "./lectureInfoInterface";

function lectureInfoNote(info: LectureInfoInterface): string {
    return (isLectureInfoEmpty(info)) ? "(lecture)" : createNoteCitation(info);
}

function lectureInfoBibliography(info: LectureInfoInterface): string {
    return (isLectureInfoEmpty(info)) ? "Lecture" : createBibliographyCitation(info);
}

function createNoteCitation(info: LectureInfoInterface): string {
    return "(" + citationStart(info, "lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date + ")";
}

function createBibliographyCitation(info: LectureInfoInterface): string {
    return citationStart(info, "Lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date;
}

function isLectureInfoEmpty(info: LectureInfoInterface): boolean {
    return (info.university == "" && info.city == "" && info.province == "" && info.date == "");
}

function citationStart(info: LectureInfoInterface, toPrepend: string): string {
    return toPrepend + appendCitationStart(info);
}

function appendCitationStart(info: LectureInfoInterface) {
    if (!isLectureInfoEmpty(info)) return ", ";
}

function universityCitation(info: LectureInfoInterface): string {
    return (info.university == "") ? "" : info.university + appendUniCitation(info);
}

function appendUniCitation(info: LectureInfoInterface): string {
    return (info.city == "" && info.province == "" && info.date == "") ? "" : ", ";
}

function cityCitation(info: LectureInfoInterface): string {
    return (info.city == "") ? "" : info.city + appendCityCitation(info);
}

function appendCityCitation(info: LectureInfoInterface): string {
    return (info.province == "" && info.date == "") ? "" : ", ";
}

function provinceCitation(info: LectureInfoInterface): string {
    return (info.province == "") ? "" : info.province + appendProvinceCitation(info);
}

function appendProvinceCitation(info: LectureInfoInterface): string {
    return (info.date == "") ? "" : ", ";
}

export {lectureInfoNote, lectureInfoBibliography};
