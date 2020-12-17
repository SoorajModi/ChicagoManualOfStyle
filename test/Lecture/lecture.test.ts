import {Lecture} from "../../src/Lecture/lecture";
import {AuthorList} from "../../src/Author/authorList";

let lecture = new Lecture({title: "Course", professor: [{first: "First", last: "Last"}], university: "University", province: "Province", city: "City", date: "Date"});

describe("lecture.ts testing", () => {
   test("should set course title member variable", () => {
      expect(lecture.courseTitle).toBe("Course");
   });

   test("should set professor member variable", () => {
      expect(lecture.professor).toStrictEqual(new AuthorList([{first: "First", last: "Last"}]));
   });
});

describe("Lecture.note() should generate note citation", () => {
   test("should generate note citation with all fields specified", () => {
      expect(lecture.note()).toBe("First Last, \"Course\" (lecture, University, City, Province, Date).");
   });
});

describe("Lecture.bibliography() should generate bibliography citation", () => {
   test("should generate bibliography citation with all fields specified", () => {
      expect(lecture.bibliography()).toBe("Last, First. \"Course.\" Lecture, University, City, Province, Date.");
   });
});