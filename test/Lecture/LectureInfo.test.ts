import {
  lectureInfoNote,
  lectureInfoBibliography,
} from "../../src/Lecture/lectureInfo";
import { LectureInfoInterface } from "../../src/Lecture/lectureInfoInterface";

let info: LectureInfoInterface = {
  university: "University",
  city: "City",
  province: "Province",
  date: "Date",
};
let missingUni = {
  university: "",
  city: "City",
  province: "Province",
  date: "Date",
};
let missingCity = {
  university: "University",
  city: "",
  province: "Province",
  date: "Date",
};
let missingProvince = {
  university: "University",
  city: "City",
  province: "",
  date: "Date",
};
let missingDate = {
  university: "University",
  city: "City",
  province: "Province",
  date: "",
};
let missingLocation = {
  university: "",
  city: "",
  province: "",
  date: "Date",
};
let emptyInfo = {
  university: "",
  city: "",
  province: "",
  date: "",
};

describe("LectureInfo.note() should create note citation", () => {
  test("should create note citation with all fields specified", () => {
    expect(lectureInfoNote(info)).toBe(
      "(lecture, University, City, Province, Date)"
    );
  });

  test("should create note citation with missing university field", () => {
    expect(lectureInfoNote(missingUni)).toBe("(lecture, City, Province, Date)");
  });

  test("should create note citation with missing city field", () => {
    expect(lectureInfoNote(missingCity)).toBe(
      "(lecture, University, Province, Date)"
    );
  });

  test("should create note citation with missing province field", () => {
    expect(lectureInfoNote(missingProvince)).toBe(
      "(lecture, University, City, Date)"
    );
  });

  test("should create note citation with missing date field", () => {
    expect(lectureInfoNote(missingDate)).toBe(
      "(lecture, University, City, Province)"
    );
  });

  test("should create note citation with missing location", () => {
    expect(lectureInfoNote(missingLocation)).toBe("(lecture, Date)");
  });

  test("should create note citation with no fields specified", () => {
    expect(lectureInfoNote(emptyInfo)).toBe("(lecture)");
  });
});

describe("LectureInfo.bibliography() should create bibliography citation", () => {
  test("should create bibliography citation with all fields specified", () => {
    expect(lectureInfoBibliography(info)).toBe(
      "Lecture, University, City, Province, Date"
    );
  });

  test("should create bibliography citation with missing university field", () => {
    expect(lectureInfoBibliography(missingUni)).toBe(
      "Lecture, City, Province, Date"
    );
  });

  test("should create bibliography citation with missing city field", () => {
    expect(lectureInfoBibliography(missingCity)).toBe(
      "Lecture, University, Province, Date"
    );
  });

  test("should create bibliography citation with missing province field", () => {
    expect(lectureInfoBibliography(missingProvince)).toBe(
      "Lecture, University, City, Date"
    );
  });

  test("should create bibliography citaiton with missing date field", () => {
    expect(lectureInfoBibliography(missingDate)).toBe(
      "Lecture, University, City, Province"
    );
  });

  test("should create bibliography citation with missing location fields", () => {
    expect(lectureInfoBibliography(missingLocation)).toBe("Lecture, Date");
  });

  test("should create bibliography citation with no fields specified", () => {
    expect(lectureInfoBibliography(emptyInfo)).toBe("Lecture");
  });
});
