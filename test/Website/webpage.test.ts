const {webpageNote, webpageBibliography} = require("../../src/Website/webpage");

let webpage = {
    title: "Title of Webpage",
    authorList: [{first: "First", last: "Last"}],
    publisher: "testPublisher",
    nameOfSite: "testWebsite",
    date: "2000",
    url: "wwww.testwebsite.com"
};

let noPub = {
    title: "Title of Webpage",
    authorList: [{first: "First", last: "Last"}],
    nameOfSite: "testWebsite",
    date: "2000",
    url: "wwww.testwebsite.com"
};

describe("webpageNote() testing", () => {
    test("should create note citation with all fields filled", () => {
        expect(webpageNote(webpage)).toBe("First Last, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com.");
    });

    test("should create note citation with missing publisher field", () => {
        expect(webpageNote(noPub)).toBe("First Last, \"Title of Webpage,\" testWebsite, 2000, wwww.testwebsite.com.");
    });
});

describe("Webpage.bibliography() testing", () => {
    test("should create bibliography citation with all fields filled", () => {
        expect(webpageBibliography(webpage)).toBe("Last, First. \"Title of Webpage.\" testWebsite. testPublisher, 2000. wwww.testwebsite.com.");
    });

    test("should create bibliography citation with missing publisher field", () => {
        expect(webpageBibliography(noPub)).toBe("Last, First. \"Title of Webpage.\" testWebsite. 2000. wwww.testwebsite.com.");
    });
});