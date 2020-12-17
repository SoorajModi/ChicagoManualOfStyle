import {BookInfo} from "../../src/Book/bookInfo";

let info = new BookInfo({publisher: "Publisher", placeOfPublication: "Place", yearOfPublication: "Year"});
let emptyPublishingInfo = new BookInfo({});
let noPlaceOfPublication = new BookInfo({publisher: "Publisher", yearOfPublication: "Year"});
let noYearOfPublication = new BookInfo({publisher: "Publisher", placeOfPublication: "Place"});
let noPublisher = new BookInfo({placeOfPublication: "Place", yearOfPublication: "Year"});
let onlyYearOfPublication = new BookInfo({yearOfPublication: "Year"});
let onlyPublisher = new BookInfo({publisher: "Publisher"});
let onlyPlaceOfPublication = new BookInfo({placeOfPublication: "Place"});

describe("bookInfo.ts testing", () => {
    test("should set publisher member variable", () => {
        expect(info.publisher).toBe("Publisher");
    });

    test("should default publisher member variables", () => {
        expect(emptyPublishingInfo.publisher).toBe("");
    });

    test("should set place of publication member variable", () => {
        expect(info.placeOfPublication).toBe("Place");
    });

    test("should default place of publication member variable", () => {
        expect(emptyPublishingInfo.placeOfPublication).toBe("");
    });

    test("should set year of publication member variable", () => {
        expect(info.yearOfPublication).toBe("Year");
    });

    test("should default year of publication member variable", () => {
        expect(emptyPublishingInfo.yearOfPublication).toBe("");
    });
});

describe("bookInfo.bookNote() testing", ()=> {
    test("should generate note citation with all fields specified", () => {
        expect(info.note()).toBe("(Place: Publisher, Year)");
    });

    test("should generate note citation with no publisher field", () => {
       expect(noPublisher.note()).toBe("(Place: Year)");
    });

    test("should generate note citation with no place of publication specified", () => {
       expect(noPlaceOfPublication.note()).toBe("(Publisher, Year)");
    });

    test("should generate note citation with no year of publication specified", () => {
       expect(noYearOfPublication.note()).toBe("(Place: Publisher)");
    });

    test( "should generate note citation with only year of publication specified", () => {
       expect(onlyYearOfPublication.note()).toBe("(Year)");
    });

    test("should generate note citation with only publisher specified", () => {
       expect(onlyPublisher.note()).toBe("(Publisher)");
    });

    test("should generate note citation with only place of publication specified", () => {
       expect(onlyPlaceOfPublication.note()).toBe("(Place)");
    });

    test("should generate note citation with no fields specified", () => {
        expect(emptyPublishingInfo.note()).toBe("");
    });
});

describe("bookIndo.bibliography() testing", () => {
    test("should generate bibliography citation with all fields specified", () => {
        expect(info.bibliography()).toBe("Place: Publisher, Year.");
    });

    test("should generate bibliography citation with no publisher field", () => {
        expect(noPublisher.bibliography()).toBe("Place: Year.");
    });

    test("should generate bibliography citation with no place of publication specified", () => {
        expect(noPlaceOfPublication.bibliography()).toBe("Publisher, Year.");
    });

    test("should generate bibliography citation with no year of publication specified", () => {
        expect(noYearOfPublication.bibliography()).toBe("Place: Publisher.");
    });

    test( "should generate bibliography citation with only year of publication specified", () => {
        expect(onlyYearOfPublication.bibliography()).toBe("Year.");
    });

    test("should generate bibliography citation with only publisher specified", () => {
        expect(onlyPublisher.bibliography()).toBe("Publisher.");
    });

    test("should generate bibliography citation with only place of publication specified", () => {
        expect(onlyPlaceOfPublication.bibliography()).toBe("Place.");
    });

    test("should generate bibliography with no fields specified", () => {
       expect(emptyPublishingInfo.bibliography()).toBe("");
    });
});
