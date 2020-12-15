import {BookPublishingInfo} from "../src/bookPublishingInfo";

let publishingInfo = new BookPublishingInfo({publisher: "Publisher", placeOfPublication: "Place", yearOfPublication: "Year"});
let emptyPublishingInfo = new BookPublishingInfo({});
let noPlaceOfPublication = new BookPublishingInfo({publisher: "Publisher", yearOfPublication: "Year"});
let noYearOfPublication = new BookPublishingInfo({publisher: "Publisher", placeOfPublication: "Place"});
let noPublisher = new BookPublishingInfo({placeOfPublication: "Place", yearOfPublication: "Year"});
let onlyYearOfPublication = new BookPublishingInfo({yearOfPublication: "Year"});
let onlyPublisher = new BookPublishingInfo({publisher: "Publisher"});
let onlyPlaceOfPublication = new BookPublishingInfo({placeOfPublication: "Place"});

describe("bookPublishingInfo.ts testing", () => {
    test("should set publisher member variable", () => {
        expect(publishingInfo.publisher).toBe("Publisher");
        expect(noPlaceOfPublication.publisher).toBe("Publisher");
        expect(noYearOfPublication.publisher).toBe("Publisher");
        expect(onlyPublisher.publisher).toBe("Publisher");
    });

    test("should default publisher member variables", () => {
        expect(noPublisher.publisher).toBe("");
        expect(onlyYearOfPublication.publisher).toBe("");
        expect(onlyPlaceOfPublication.publisher).toBe("");
        expect(emptyPublishingInfo.publisher).toBe("");
    });

    test("should set place of publication member variable", () => {
        expect(publishingInfo.placeOfPublication).toBe("Place");
        expect(noPublisher.placeOfPublication).toBe("Place");
        expect(noYearOfPublication.placeOfPublication).toBe("Place");
        expect(onlyPlaceOfPublication.placeOfPublication).toBe("Place");
    });

    test("should default place of publication member variable", () => {
        expect(noPlaceOfPublication.placeOfPublication).toBe("");
        expect(onlyYearOfPublication.placeOfPublication).toBe("");
        expect(onlyPublisher.placeOfPublication).toBe("");
        expect(emptyPublishingInfo.placeOfPublication).toBe("");
    });

    test("should set year of publication member variable", () => {
        expect(publishingInfo.yearOfPublication).toBe("Year");
        expect(onlyYearOfPublication.yearOfPublication).toBe("Year");
        expect(noPublisher.yearOfPublication).toBe("Year");
        expect(noPlaceOfPublication.yearOfPublication).toBe("Year");
    });

    test("should default year of publication member variable", () => {
        expect(onlyPublisher.yearOfPublication).toBe("");
        expect(onlyPlaceOfPublication.yearOfPublication).toBe("");
        expect(noYearOfPublication.yearOfPublication).toBe("");
        expect(emptyPublishingInfo.yearOfPublication).toBe("");
    });
});

describe("publishingInfo.bookNote() testing", ()=> {
    test("should generate note citation with all fields specified", () => {
        expect(publishingInfo.note()).toBe("(Place: Publisher, Year)");
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

describe("publishingInfo.bibliography() testing", () => {
    test("should generate bibliography citation with all fields specified", () => {
        expect(publishingInfo.bibliography()).toBe("Place: Publisher, Year.");
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
