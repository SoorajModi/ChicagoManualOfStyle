import {LectureInfo} from "../../src/Lecture/LectureInfo";

let info = new LectureInfo("University", "City", "Province", "Date");
let emptyInfo = new LectureInfo("", "", "", "");

describe("LectureInfo.ts testing", () => {
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

   test("should create note citation with no fields specified", () => {
       expect(emptyInfo.note()).toBe("(lecture)");
   });
});

describe("LectureInfo.bibliography() should create bibliography citation", () => {
   test("should create bibliography citation with all fields specified", () => {
      expect(info.bibliography()).toBe("Lecture, University, City, Province, Date");
   });
});