import {
  lectureNote,
  lectureBibliography,
  lectureShortNote,
} from "../../src/Lecture/lecture";

let lecture = {
  title: "Course",
  professors: [{ first: "First", last: "Last" }],
  university: "University",
  province: "Province",
  city: "City",
  date: "Date",
};
let noProf = {
  title: "Course",
  university: "University",
  province: "Province",
  city: "City",
  date: "Date",
};

describe("Lecture.note() should generate note citation", () => {
  it("should generate note citation with all fields specified", () => {
    expect(lectureNote(lecture)).toBe(
      'First Last, "Course" (lecture, University, City, Province, Date).'
    );
  });

  it("should generate note citation with no professor specified", () => {
    expect(lectureNote(noProf)).toBe(
      '"Course" (lecture, University, City, Province, Date).'
    );
  });
});

describe("Lecture.bibliography() should generate bibliography citation", () => {
  it("should generate bibliography citation with all fields specified", () => {
    expect(lectureBibliography(lecture)).toBe(
      'Last, First. "Course." Lecture, University, City, Province, Date.'
    );
  });

  it("should generate bibliography citation with no professor specified", () => {
    expect(lectureBibliography(noProf)).toBe(
      '"Course." Lecture, University, City, Province, Date.'
    );
  });
});

describe("Leture.shortNote() should generate short note citation", () => {
  it("should generate short note citation with all fields specified", () => {
    expect(lectureShortNote(lecture)).toBe('Last, "Course."');
  });

  it("should generate short note citation with no professor specified", () => {
    expect(lectureShortNote(noProf)).toBe('"Course."');
  });
});
