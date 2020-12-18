const {lectureNote, lectureBibliography} = require("../../src/Lecture/lecture");

let lecture = {title: "Course", professor: [{first: "First", last: "Last"}], university: "University", province: "Province", city: "City", date: "Date"};

describe("Lecture.note() should generate note citation", () => {
    test("should generate note citation with all fields specified", () => {
        expect(lectureNote(lecture)).toBe("First Last, \"Course\" (lecture, University, City, Province, Date).");
    });
});

describe("Lecture.bibliography() should generate bibliography citation", () => {
    test("should generate bibliography citation with all fields specified", () => {
        expect(lectureBibliography(lecture)).toBe("Last, First. \"Course.\" Lecture, University, City, Province, Date.");
    });
});