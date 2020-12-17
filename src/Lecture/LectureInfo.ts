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
        let str = "(lecture";

        if (this.university != "" || this.city != "" || this.province != "" || this.date != "") {
            str += ", "
        }

        if (this.university != "") {
            str += this.university;
            if (this.city != "" || this.province != "" || this.date != "") {
                str += ", "
            }
        }

        if (this.city != "") {
            str += this.city;
            if (this.province != "" || this.date != "") {
                str += ", "
            }
        }

        if (this.province != "") {
            str += this.province;
            if (this.province != "" && this.date != "") {
                str += ", "
            }
        }

        if (this.date != "") {
            str += this.date;
        }

        return str + ")";
    }

    bibliography() {
        return "Lecture, " + this.university + ", " + this.city + ", " + this.province + ", " + this.date;
    }
}