import {LectureInfo} from "../../src/Lecture/LectureInfo";

let info = new LectureInfo("University", "City", "Province", "Date");

describe("LectureInfo.ts testing", () => {
   test("should set university member variable", () => {
       expect(info.university).toBe("University");
   });

    test("should set city member variable", () => {
        expect(info.city).toBe("City");
    });

    test("should set province member variable", () => {
        expect(info.province).toBe("Province");
    });

    test("should set university member variable", () => {
        expect(info.date).toBe("Date");
    });
});

describe("LectureInfo.note() should create note citation", () => {
   test("should create note citation with all fields specified", () => {
      expect(info.note()).toBe("(lecture, University, City, Province, Date)");
   });
});

describe("LectureInfo.bibliography() should create bibliography citation", () => {
   test("should create bibliography citation with all fields specified", () => {
      expect(info.bibliography()).toBe("Lecture, University, City, Province, Date");
   });
});