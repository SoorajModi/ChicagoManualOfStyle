import {AuthorList} from "../src/authorList";

let authorList = new AuthorList([{first: "Author", last: "One"}]);
let emptyAuthorList = new AuthorList([]);
let twoAuthorList = new AuthorList([{first: "Author", last: "One"}, {first: "Author", last: "Two"}]);
let threeAuthorList = new AuthorList([
    {first: "Author", last: "One"},
    {first: "Author", last: "Two"},
    {first: "Author", last: "Three"}
]);
let multiAuthorList = new AuthorList([
    {first: "Author", last: "One"},
    {first: "Author", last: "Two"},
    {first: "Author", last: "Three"},
    {first: "Author", last: "Four"}
]);

describe("authorList testing", () => {
    test("should set authors member variable", () => {
        expect(authorList.authors).toEqual([{first: "Author", last: "One"}]);
        expect(emptyAuthorList.authors).toEqual([]);
        expect(twoAuthorList.authors).toEqual([{first: "Author", last: "One"}, {first: "Author", last: "Two"}]);
        expect(threeAuthorList.authors).toEqual([
            {first: "Author", last: "One"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"}
        ]);
        expect(multiAuthorList.authors).toEqual([
            {first: "Author", last: "One"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"},
            {first: "Author", last: "Four"}
        ]);
    });
});

describe("authorList.note() testing", () => {
    test("should create note citation with one author", () => {
        expect(authorList.authorsNote()).toBe("Author One, ");
    });

    test("should create note citation with no authors", () => {
        expect(emptyAuthorList.authorsNote()).toBe("");
    });

    test("should create note citation with two authors", () => {
        expect(twoAuthorList.authorsNote()).toBe("Author One and Author Two, ");
    });

    test("should create note citation with three authors", () => {
        expect(threeAuthorList.authorsNote()).toBe("Author One, Author Two and Author Three, ");
    });

    test("should create note citation with greater than three authors", () => {
        expect(multiAuthorList.authorsNote()).toBe("Author One et al., ");
    });
});

describe("authorList.bibliography() testing", () => {
    test("should create bibliography citation with one author", () => {
        expect(authorList.authorsBibliography()).toBe("One, Author. ");
    });

    test("should create bibliography citation with no authors", () => {
        expect(emptyAuthorList.authorsBibliography()).toBe("");
    });

    test("should create bibliography citation with two authors", () => {
        expect(twoAuthorList.authorsBibliography()).toBe("One, Author, and Author Two. ");
    });

    test("should create bibliography citation with three authors", () => {
        expect(threeAuthorList.authorsBibliography()).toBe("One, Author, Author Two, and Author Three. ");
    });

    test("should create bibliography citation with more than authors", () => {
        expect(multiAuthorList.authorsBibliography()).toBe("One, Author, Author Two, Author Three, and Author Four. ");
    });
});
