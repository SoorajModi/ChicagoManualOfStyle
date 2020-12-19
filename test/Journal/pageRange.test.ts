import {getRange, isInRange} from "../../src/Journal/pageRange";

describe("pageRange.getRange() testing", () => {
    test("should generate page range", () => {
        expect(getRange("1", "10")).toBe("1-10");
    });

    test("should generate page range with range the same", () => {
        expect(getRange("1", "1")).toBe("1");
    });
});

describe("pageRange.isInRange() testing", () => {
    test("should return true if within range", () => {
        expect(isInRange("5", "1", "10")).toBeTruthy();
        expect(isInRange("1", "1", "10")).toBeTruthy();
        expect(isInRange("10", "1", "10")).toBeTruthy();
    });

    describe("should return false if greater than end", () => {
        expect(isInRange("11", "1", "10")).toBeFalsy();
    });

    describe("should return false is less than start", () => {
        expect(isInRange("-1", "1", "10")).toBeFalsy();
    });

    describe("should return true if invalid input", () => {
        expect(isInRange("text", "1", "10")).toBeTruthy();
    });

    describe("should return true in invalid start range", () => {
        expect(isInRange("1", "text")).toBeTruthy();
    });

    describe("should return true if invalid end range", () => {
        expect(isInRange("11", "1", "text")).toBeTruthy();
    });
});