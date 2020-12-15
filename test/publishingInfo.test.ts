import {PublishingInfo} from "../src/publishingInfo";

let publishingInfo = new PublishingInfo({publisher: "Publisher", placeOfPublication: "Place", yearOfPublication: "Year"});
let emptyPublishingInfo = new PublishingInfo({});
let noPlaceOfPublication = new PublishingInfo({publisher: "Publisher", yearOfPublication: "Year"});
let noYearOfPublication = new PublishingInfo({publisher: "Publisher", placeOfPublication: "Place"});
let noPublisher = new PublishingInfo({placeOfPublication: "Place", yearOfPublication: "Year"});
let onlyYearOfPublication = new PublishingInfo({yearOfPublication: "Year"});
let onlyPublisher = new PublishingInfo({publisher: "Publisher"});
let onlyPlaceOfPublication = new PublishingInfo({placeOfPublication: "Place"});

describe("publishingInfo.ts testing", () => {
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
        expect(publishingInfo.bookNote()).toBe("(Place: Publisher, Year)");
    });

    test("should generate note citation with no publisher field", () => {
       expect(noPublisher.bookNote()).toBe("(Place: Year)");
    });

    test("should generate note citation with no place of publication specified", () => {
       expect(noPlaceOfPublication.bookNote()).toBe("(Publisher, Year)");
    });

    test("should generate note citation with no year of publication specified", () => {
       expect(noYearOfPublication.bookNote()).toBe("(Place: Publisher)");
    });

    test( "should generate note citation with only year of publication specified", () => {
       expect(onlyYearOfPublication.bookNote()).toBe("(Year)");
    });

    test("should generate note citation with only publisher specified", () => {
       expect(onlyPublisher.bookNote()).toBe("(Publisher)");
    });

    test("should generate note citation with only place of publication specified", () => {
       expect(onlyPlaceOfPublication.bookNote()).toBe("(Place)");
    });

    test("should generate note citation with no fields specified", () => {
        expect(emptyPublishingInfo.bookNote()).toBe("");
    });
});

describe("publishingInfo.bibliography() testing", () => {
    test("should generate bibliography citation with all fields specified", () => {
        expect(publishingInfo.bookBibliography()).toBe("Place: Publisher, Year.");
    });

    test("should generate bibliography citation with no publisher field", () => {
        expect(noPublisher.bookBibliography()).toBe("Place: Year.");
    });

    test("should generate bibliography citation with no place of publication specified", () => {
        expect(noPlaceOfPublication.bookBibliography()).toBe("Publisher, Year.");
    });

    test("should generate bibliography citation with no year of publication specified", () => {
        expect(noYearOfPublication.bookBibliography()).toBe("Place: Publisher.");
    });

    test( "should generate bibliography citation with only year of publication specified", () => {
        expect(onlyYearOfPublication.bookBibliography()).toBe("Year.");
    });

    test("should generate bibliography citation with only publisher specified", () => {
        expect(onlyPublisher.bookBibliography()).toBe("Publisher.");
    });

    test("should generate bibliography citation with only place of publication specified", () => {
        expect(onlyPlaceOfPublication.bookBibliography()).toBe("Place.");
    });

    test("should generate bibliography with no fields specified", () => {
       expect(emptyPublishingInfo.bookBibliography()).toBe("");
    });
});
