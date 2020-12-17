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
        return "(lecture, " + this.university + ", " + this.city + ", " + this.province + ", " + this.date + ")";
    }

    bibliography() {
        return "Lecture, " + this.university + ", " + this.city + ", " + this.province + ", " + this.date;
    }
}