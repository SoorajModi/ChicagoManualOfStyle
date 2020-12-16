import {Webpage} from "../src/webpage";
import {AuthorList} from "../src/authorList";

let webpage = new Webpage({
    title: "Title of Webpage",
    authorList: [{first: "First", last: "Last"}],
    publisher: "testPublisher"
}, "testWebsite", "2000", "wwww.testwebsite.com");

describe("Webpage.ts member variable testing", () => {
    test("should have title member variable", () => {
        expect(webpage.title).toBe("Title of Webpage");
    });

    test("should set author list member variable", () => {
        expect(webpage.authorList).toStrictEqual(new AuthorList([{first: "First", last: "Last"}]));
    });

    test("should have publisher member variable", () => {
        expect(webpage.publisher).toBe("testPublisher");
    });

    test("should have website name member variable", () => {
        expect(webpage.nameOfSite).toBe("testWebsite");
    });

    test("should have date member variable", () => {
        expect(webpage.date).toBe("2000");
    });

    test("should have url member variable", () => {
        expect(webpage.url).toBe("wwww.testwebsite.com");
    });
});

describe("Webpage.note() testing", () => {
    test("should create note citation with all fields filled", () => {
        expect(webpage.note()).toBe("First Last, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com.");
    });
});

describe("Webpage.bibliography() testing", () => {
    test("should create bibliography citation with all fields filled", () => {
        expect(webpage.bibliography()).toBe("Last, First. \"Title of Webpage.\" testWebsite. testPublisher, 2000. wwww.testwebsite.com.");
    });
});
