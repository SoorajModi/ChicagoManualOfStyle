import {webpageNote, webpageBibliography, webpageShortNote} from "../../src/Website/webpage";

let webpage = {
    title: "Title of Webpage",
    authors: [{first: "First", last: "Last"}],
    publisher: "testPublisher",
    nameOfSite: "testWebsite",
    date: "2000",
    url: "wwww.testwebsite.com"
};

let noPub = {
    title: "Title of Webpage",
    authors: [{first: "First", last: "Last"}],
    nameOfSite: "testWebsite",
    date: "2000",
    url: "wwww.testwebsite.com"
};

let noAuthor = {
    title: "Title of Webpage",
    publisher: "testPublisher",
    nameOfSite: "testWebsite",
    date: "2000",
    url: "wwww.testwebsite.com"
};

describe("webpageNote() testing", () => {
    it("should create note citation with all fields filled", () => {
        expect(webpageNote(webpage)).toBe("First Last, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com.");
    });

    it("should create note citation with missing publisher field", () => {
        expect(webpageNote(noPub)).toBe("First Last, \"Title of Webpage,\" testWebsite, 2000, wwww.testwebsite.com.");
    });
});

describe("Webpage.bibliography() testing", () => {
    it("should create bibliography citation with all fields filled", () => {
        expect(webpageBibliography(webpage)).toBe("Last, First. \"Title of Webpage.\" testWebsite. testPublisher, 2000. wwww.testwebsite.com.");
    });

    it("should create bibliography citation with missing publisher field", () => {
        expect(webpageBibliography(noPub)).toBe("Last, First. \"Title of Webpage.\" testWebsite. 2000. wwww.testwebsite.com.");
    });
});

describe("Webpage.shortNote() testing", () => {
    it("should create short note citation with all fields filled", () => {
        expect(webpageShortNote(webpage)).toBe("Last, \"Title of Webpage.\"");
    });

    it("should create short note with missing author", () => {
        expect(webpageShortNote(noAuthor)).toBe("testWebsite, \"Title of Webpage.\"");
    });
});