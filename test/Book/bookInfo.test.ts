const {bookInfoNote, bookInfoBibliography} = require("../../src/Book/bookInfo");

let bookInfo = {publisher: "Publisher", placeOfPublication: "Place", yearOfPublication: "Year"};
let emptyBookInfo = {};
let noPlaceOfPublication = {publisher: "Publisher", yearOfPublication: "Year"};
let noYearOfPublication = {publisher: "Publisher", placeOfPublication: "Place"};
let noPublisher = {placeOfPublication: "Place", yearOfPublication: "Year"};
let onlyYearOfPublication = {yearOfPublication: "Year"};
let onlyPublisher = {publisher: "Publisher"};
let onlyPlaceOfPublication = {placeOfPublication: "Place"};

describe("bookInfoNote() testing", ()=> {
    test("should generate note citation with all fields specified", () => {
        expect(bookInfoNote(bookInfo)).toBe("(Place: Publisher, Year)");
    });

    test("should generate note citation with no publisher field", () => {
       expect(bookInfoNote(noPublisher)).toBe("(Place: Year)");
    });

    test("should generate note citation with no place of publication specified", () => {
       expect(bookInfoNote(noPlaceOfPublication)).toBe("(Publisher, Year)");
    });

    test("should generate note citation with no year of publication specified", () => {
       expect(bookInfoNote(noYearOfPublication)).toBe("(Place: Publisher)");
    });

    test( "should generate note citation with only year of publication specified", () => {
       expect(bookInfoNote(onlyYearOfPublication)).toBe("(Year)");
    });

    test("should generate note citation with only publisher specified", () => {
       expect(bookInfoNote(onlyPublisher)).toBe("(Publisher)");
    });

    test("should generate note citation with only place of publication specified", () => {
       expect(bookInfoNote(onlyPlaceOfPublication)).toBe("(Place)");
    });

    test("should generate note citation with no fields specified", () => {
        expect(bookInfoNote(emptyBookInfo)).toBe("");
    });
});

describe("bookIndo.bibliography() testing", () => {
    test("should generate bibliography citation with all fields specified", () => {
        expect(bookInfoBibliography(bookInfo)).toBe("Place: Publisher, Year.");
    });

    test("should generate bibliography citation with no publisher field", () => {
        expect(bookInfoBibliography(noPublisher)).toBe("Place: Year.");
    });

    test("should generate bibliography citation with no place of publication specified", () => {
        expect(bookInfoBibliography(noPlaceOfPublication)).toBe("Publisher, Year.");
    });

    test("should generate bibliography citation with no year of publication specified", () => {
        expect(bookInfoBibliography(noYearOfPublication)).toBe("Place: Publisher.");
    });

    test( "should generate bibliography citation with only year of publication specified", () => {
        expect(bookInfoBibliography(onlyYearOfPublication)).toBe("Year.");
    });

    test("should generate bibliography citation with only publisher specified", () => {
        expect(bookInfoBibliography(onlyPublisher)).toBe("Publisher.");
    });

    test("should generate bibliography citation with only place of publication specified", () => {
        expect(bookInfoBibliography(onlyPlaceOfPublication)).toBe("Place.");
    });

    test("should generate bibliography with no fields specified", () => {
       expect(bookInfoBibliography(emptyBookInfo)).toBe("");
    });
});
