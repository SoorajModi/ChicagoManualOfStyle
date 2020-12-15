import {Book} from "../src/book"
import {Author} from "../src/author";
import {AuthorList} from "../src/authorList";
import {BookPublishingInfo} from "../src/bookPublishingInfo";

let book = new Book({
    title: "The Great Gatsby",
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});
let noAuthorBook = new Book({
    title: "The Great Gatsby",
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});
let twoAuthBook = new Book({
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});
let threeAuthBook = new Book({
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"},
        {first: "Author", last: "Three"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});
let fourAuthBook = new Book({
    title: "The Great Gatsby",
    authorList: [
        {first: "F. Scott", last: "Fitzgerald"},
        {first: "Author", last: "Two"},
        {first: "Author", last: "Three"},
        {first: "Author", last: "Four"}
    ],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
});

describe("Book.ts member variable testing", () => {
    test("should set title member variable", () => {
        expect(book.title).toBe("The Great Gatsby");
    });

    test("should set publishing info member variable", () => {
        expect(book.publishingInfo).toStrictEqual(new BookPublishingInfo({
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        }));
    });

    test("should set author list member variable", () => {
        expect(book.authorList).toStrictEqual(new AuthorList([{first: "F. Scott", last: "Fitzgerald"}]));
        expect(twoAuthBook.authorList).toStrictEqual(new AuthorList([{first: "F. Scott", last: "Fitzgerald"},
            {first: "Author", last: "Two"}]));
        expect(threeAuthBook.authorList).toStrictEqual(new AuthorList([{first: "F. Scott", last: "Fitzgerald"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"}]));
        expect(fourAuthBook.authorList).toStrictEqual(new AuthorList([{first: "F. Scott", last: "Fitzgerald"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"},
            {first: "Author", last: "Four"}]));
    });
});

describe("Book.note() testing", () => {
    test("should create note citation with no author", () => {
        expect(noAuthorBook.note("1")).toBe("The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note with one author", () => {
        expect(book.note("1")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with two authors", () => {
        expect(twoAuthBook.note("1")).toBe("F. Scott Fitzgerald and Author Two, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with three authors", () => {
        expect(threeAuthBook.note("1")).toBe("F. Scott Fitzgerald, Author Two, and Author Three, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });

    test("should create note citation with four+ authors", () => {
        expect(fourAuthBook.note("1")).toBe("F. Scott Fitzgerald et al., The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.");
    });
});

describe("Book.bibliography() testing", () => {
    test("should create bibliography citation with no author", () => {
        expect(noAuthorBook.bibliography()).toBe("The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography with one author", () => {
        expect(book.bibliography()).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with two authors", () => {
        expect(twoAuthBook.bibliography()).toBe("Fitzgerald, F. Scott, and Author Two. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with three authors", () => {
        expect(threeAuthBook.bibliography()).toBe("Fitzgerald, F. Scott, Author Two, and Author Three. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with four authors", () => {
        expect(fourAuthBook.bibliography()).toBe("Fitzgerald, F. Scott, Author Two, Author Three, and Author Four. The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });

    test("should create bibliography citation with four+ authors", () => {
        let sixAuthBook = new Book({
            title: "The Great Gatsby",
            authorList: [
                {first: "F. Scott", last: "Fitzgerald"},
                {first: "Author", last: "Two"},
                {first: "Author", last: "Three"},
                {first: "Author", last: "Four"},
                {first: "Author", last: "Five"},
                {first: "Author", last: "Six"}
            ],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        });
        expect(sixAuthBook.bibliography()).toBe("Fitzgerald, F. Scott, Author Two, Author Three, Author Four, Author Five, and Author Six. " +
            "The Great Gatsby. New York: Charles Scribner's Sons, 2000.");
    });
});

describe("Book.eNote() testing", () => {
    test("should create book note citation with URL", () => {
        expect(book.eNote("1", "www.thegreatgatsby.com")).toBe("F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com.");
    });
});

describe("Book.eBibliography() testing", () => {
   test("should create book bibliography citation with URL", () => {
      expect(book.eBibliography("www.thegreatgatsby.com")).toBe("Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.");
   });
});
