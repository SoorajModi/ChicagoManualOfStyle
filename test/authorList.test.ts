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
        expect(authorList.authorListNote()).toBe("Author One, ");
    });

    test("should create note citation with no authors", () => {
        expect(emptyAuthorList.authorListNote()).toBe("");
    });

    test("should create note citation with two authors", () => {
        expect(twoAuthorList.authorListNote()).toBe("Author One and Author Two, ");
    });

    test("should create note citation with three authors", () => {
        expect(threeAuthorList.authorListNote()).toBe("Author One, Author Two and Author Three, ");
    });

    test("should create note citation with greater than three authors", () => {
        expect(multiAuthorList.authorListNote()).toBe("Author One et al., ");
    });
});

describe("authorList.bibliography() testing", () => {
    test("should create bibliography citation with one author", () => {
        expect(authorList.authorListBibliography()).toBe("One, Author. ");
    });

    test("should create bibliography citation with no authors", () => {
        expect(emptyAuthorList.authorListBibliography()).toBe("");
    });

    test("should create bibliography citation with two authors", () => {
        expect(twoAuthorList.authorListBibliography()).toBe("One, Author, and Author Two. ");
    });

    test("should create bibliography citation with three authors", () => {
        expect(threeAuthorList.authorListBibliography()).toBe("One, Author, Author Two, and Author Three. ");
    });

    test("should create bibliography citation with more than authors", () => {
        expect(multiAuthorList.authorListBibliography()).toBe("One, Author, Author Two, Author Three, and Author Four. ");
    });
});
