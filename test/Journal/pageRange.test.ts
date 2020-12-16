import {PageRange} from "../../src/Journal/pageRange";

let pageRange = new PageRange("1", "10");
let startOnly = new PageRange("1");

describe("pageRange.ts testing", () => {
   test("should set start variable", () => {
       expect(pageRange.start).toBe("1");
       expect(startOnly.start).toBe("1");
   });

   test("should set end variable", () => {
      expect(pageRange.end).toBe("10");
   });

   test("should end variable to start variable if not specified", () => {
      expect(startOnly.end).toBe(startOnly.start);
   });
});

describe("pageRange.getRange() testing", () => {
    test("should generate page range", () => {
       expect(pageRange.getRange()).toBe("1-10");
    });

    test("should generate page range with range the same", () => {
       expect(startOnly.getRange()).toBe("1");
    });
});

describe("pageRange.isInRange() testing", () => {
   test("should return true if within range", () => {
      expect(pageRange.isInRange("5")).toBeTruthy();
      expect(pageRange.isInRange("1")).toBeTruthy();
      expect(pageRange.isInRange("10")).toBeTruthy();
   });

   describe("should return false if greater than end", () => {
      expect(pageRange.isInRange("11")).toBeFalsy();
   });

    describe("should return false is less than start", () => {
        expect(pageRange.isInRange("-1")).toBeFalsy();
    });

    describe("should return true if invalid input", () => {
        expect(pageRange.isInRange("text")).toBeTruthy();
    });

    describe("should return true in invalid start range", () => {
       let p = new PageRange("text");
       expect(p.isInRange("1")).toBeTruthy();
    });
});