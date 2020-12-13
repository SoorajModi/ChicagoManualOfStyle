import {Author} from "../main/author";
import {Webpage} from "../main/webpage";

let author = new Author("Jay", "Gatsby");
let webpage = new Webpage({
    title: "Title of Webpage",
    author: author,
    publisher: "testPublisher"
}, "testWebsite", "2000", "wwww.testwebsite.com");

describe("Webpage.ts member variable testing", () => {
    test("should have title member variable", () => {
        expect(webpage.title).toBe("Title of Webpage");
    });

    test("should have author member variable", () => {
        expect(webpage.author).toBe(author);
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

    test("should have empty publisher member variable", () => {
        let w = new Webpage({title: "Title of webpage", author: author}, "testWebsite","2000", "wwww.testwebsite.com");
        expect(w.publisher).toBe("");
    });

    test("should have empty author member variable", () => {
        let w = new Webpage({title: "Title of webpage", publisher: "testPublisher"}, "testWebsite","2000", "wwww.testwebsite.com");
        expect(w.author.noteString()).toBe("");
    });
});

describe("Webpage.note() testing", () => {
    test("should create note citation with all fields filled", () => {
        expect(webpage.note()).toBe("Jay Gatsby, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com.");
    });
});

describe("Webpage.bibliography() testing", () => {
    test("should create bibliography citation with all fields filled", () => {
        expect(webpage.bibliography()).toBe("Gatsby, Jay. \"Title of Webpage.\" testWebsite. testPublisher, 2000. wwww.testwebsite.com.");
    });
});
