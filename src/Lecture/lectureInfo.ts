export class LectureInfo {
    university: string;
    city: string;
    province: string;
    date: string;

    constructor(uni: string, city: string, province: string, date: string) {
        this.university = uni;
        this.city = city;
        this.province = province;
        this.date = date;
    }

    note() {
        return (isLectureInfoEmpty(this)) ? "(lecture)" : createNoteCitation(this);
    }

    bibliography() {
        return (isLectureInfoEmpty(this)) ? "Lecture" : createBibliographyCitation(this);
    }
}

function createNoteCitation(info: LectureInfo) {
    return "(" + citationStart(info, "lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date + ")";
}

function createBibliographyCitation(info: LectureInfo) {
    return citationStart(info, "Lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date;
}

function isLectureInfoEmpty(info: LectureInfo) {
    return (info.university == "" && info.city == "" && info.province == "" && info.date == "");
}

function citationStart(info: LectureInfo, toPrepend: string) {
    return toPrepend + appendCitationStart(info);
}

function appendCitationStart(info: LectureInfo) {
    if (!isLectureInfoEmpty(info)) return ", ";
}

function universityCitation(info: LectureInfo) {
    return (info.university == "") ? "" : info.university + appendUniCitation(info);
}

function appendUniCitation(info: LectureInfo) {
    return (info.city == "" && info.province == "" && info.date == "") ? "" : ", ";
}

function cityCitation(info: LectureInfo) {
    return (info.city == "") ? "" : info.city + appendCityCitation(info);
}

function appendCityCitation(info: LectureInfo) {
    return (info.province == "" && info.date == "") ? "" : ", ";
}

function provinceCitation(info: LectureInfo) {
    return (info.province == "") ? "" : info.province + appendProvinceCitation(info);
}

function appendProvinceCitation(info: LectureInfo) {
    return (info.date == "") ? "" : ", ";
}
