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

    note(): string {
        return (isLectureInfoEmpty(this)) ? "(lecture)" : createNoteCitation(this);
    }

    bibliography(): string {
        return (isLectureInfoEmpty(this)) ? "Lecture" : createBibliographyCitation(this);
    }
}

function createNoteCitation(info: LectureInfo): string {
    return "(" + citationStart(info, "lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date + ")";
}

function createBibliographyCitation(info: LectureInfo): string {
    return citationStart(info, "Lecture") + universityCitation(info) + cityCitation(info) + provinceCitation(info) + info.date;
}

function isLectureInfoEmpty(info: LectureInfo): boolean {
    return (info.university == "" && info.city == "" && info.province == "" && info.date == "");
}

function citationStart(info: LectureInfo, toPrepend: string): string {
    return toPrepend + appendCitationStart(info);
}

function appendCitationStart(info: LectureInfo) {
    if (!isLectureInfoEmpty(info)) return ", ";
}

function universityCitation(info: LectureInfo): string {
    return (info.university == "") ? "" : info.university + appendUniCitation(info);
}

function appendUniCitation(info: LectureInfo): string {
    return (info.city == "" && info.province == "" && info.date == "") ? "" : ", ";
}

function cityCitation(info: LectureInfo): string {
    return (info.city == "") ? "" : info.city + appendCityCitation(info);
}

function appendCityCitation(info: LectureInfo): string {
    return (info.province == "" && info.date == "") ? "" : ", ";
}

function provinceCitation(info: LectureInfo): string {
    return (info.province == "") ? "" : info.province + appendProvinceCitation(info);
}

function appendProvinceCitation(info: LectureInfo): string {
    return (info.date == "") ? "" : ", ";
}
