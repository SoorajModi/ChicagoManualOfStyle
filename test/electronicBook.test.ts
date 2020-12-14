import {ElectronicBook} from "../src/electronicBook";
import {AuthorList} from "../src/authorList";

let eBook = new ElectronicBook({
    title: "The Great Gatsby",
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
}, "www.testwebsite.com");
let noAuthorEBook = new ElectronicBook({
    title: "The Great Gatsby",
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
}, "www.testwebsite.com");

describe("electronicBook.ts test", () => {
    test("should inherit Book member variables", () => {
        expect(eBook.title).toBe("The Great Gatsby");
        expect(eBook.authorList).toStrictEqual(new AuthorList([{first: "F. Scott", last: "Fitzgerald"}]));
        expect(eBook.publisher).toBe("Charles Scribner's Sons");
        expect(eBook.placeOfPublication).toBe("New York");
        expect(eBook.yearOfPublication).toBe("2000");
    });

    test("should have url member variable", () => {
        expect(eBook.url).toBe("www.testwebsite.com");
    });
});

describe("electronicBook.eNote() citation tests", () => {
    test("should create note citations with all fields passed", () => {
        expect(eBook.eNote("1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.testwebsite.com.");
    });

    test("should create note citations with missing author field", () => {
        expect(noAuthorEBook.eNote("1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.testwebsite.com.");
    });
});

describe("electronicBook.eBibliography() citation tests", () => {
    test("should create bibliography citation with all fields passed", () => {
        expect(eBook.eBibliography()).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.testwebsite.com.");
    });

    test("should create bibliography citation with missing author field", () => {
        expect(noAuthorEBook.eBibliography()).toBe("The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.testwebsite.com.");
    });
});