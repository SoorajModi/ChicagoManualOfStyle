import {LectureInfo} from "../../src/Lecture/lectureInfo";

let info = new LectureInfo("University", "City", "Province", "Date");
let missingUni = new LectureInfo("", "City", "Province", "Date");
let missingCity = new LectureInfo("University", "", "Province", "Date");
let missingProvince = new LectureInfo("University", "City", "", "Date");
let missingDate = new LectureInfo("University", "City", "Province", "");
let missingLocation = new LectureInfo("", "", "", "Date");
let emptyInfo = new LectureInfo("", "", "", "");

describe("lectureInfo.ts testing", () => {
    test("should set university member variable", () => {
        expect(info.university).toBe("University");
    });

    test("should default university member variable", () => {
        expect(emptyInfo.university).toBe("");
    });

    test("should set city member variable", () => {
        expect(info.city).toBe("City");
    });

    test("should default city member variable", () => {
        expect(emptyInfo.city).toBe("");
    });

    test("should set province member variable", () => {
        expect(info.province).toBe("Province");
    });

    test("should default province member variables", () => {
        expect(emptyInfo.province).toBe("");
    });

    test("should set date member variable", () => {
        expect(info.date).toBe("Date");
    });

    test("should default date member variable", () => {
        expect(emptyInfo.date).toBe("");
    });
});

describe("LectureInfo.note() should create note citation", () => {
    test("should create note citation with all fields specified", () => {
        expect(info.note()).toBe("(lecture, University, City, Province, Date)");
    });

    test("should create note citation with missing university field", () => {
        expect(missingUni.note()).toBe("(lecture, City, Province, Date)");
    });

    test("should create note citation with missing city field", () => {
        expect(missingCity.note()).toBe("(lecture, University, Province, Date)");
    });

    test("should create note citation with missing province field", () => {
        expect(missingProvince.note()).toBe("(lecture, University, City, Date)");
    });

    test("should create note citation with missing date field", () => {
        expect(missingDate.note()).toBe("(lecture, University, City, Province)");
    });

    test("should create note citation with missing location", () => {
        expect(missingLocation.note()).toBe("(lecture, Date)");
    });

    test("should create note citation with no fields specified", () => {
        expect(emptyInfo.note()).toBe("(lecture)");
    });
});

describe("LectureInfo.bibliography() should create bibliography citation", () => {
    test("should create bibliography citation with all fields specified", () => {
        expect(info.bibliography()).toBe("Lecture, University, City, Province, Date");
    });

    test("should create bibliography citation with missing university field", () => {
        expect(missingUni.bibliography()).toBe("Lecture, City, Province, Date");
    });

    test("should create bibliography citation with missing city field", () => {
        expect(missingCity.bibliography()).toBe("Lecture, University, Province, Date");
    });

    test("should create bibliography citation with missing province field", () => {
        expect(missingProvince.bibliography()).toBe("Lecture, University, City, Date");
    });

    test("should create bibliography citaiton with missing date field", () => {
        expect(missingDate.bibliography()).toBe("Lecture, University, City, Province");
    });

    test("should create bibliography citation with missing location fields", () => {
        expect(missingLocation.bibliography()).toBe("Lecture, Date");
    });

    test("should create bibliography citation with no fields specified", () => {
        expect(emptyInfo.bibliography()).toBe("Lecture");
    });
});