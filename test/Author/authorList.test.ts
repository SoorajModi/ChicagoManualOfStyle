import AuthorList from "../../src/Author/authorList";

let authorList = new AuthorList([{first: "Author", last: "One"}]);
let emptyAuthorList = new AuthorList([]);
let twoAuthorList = new AuthorList([{first: "Author", last: "One"}, {first: "Author", last: "Two"}]);
let threeAuthorList = new AuthorList([
    {first: "Author", last: "One"},
    {first: "Author", last: "Two"},
    {first: "Author", last: "Three"}
]);
let fourAuthorList = new AuthorList([
    {first: "Author", last: "One"},
    {first: "Author", last: "Two"},
    {first: "Author", last: "Three"},
    {first: "Author", last: "Four"}
]);
let elevenAuthorList = new AuthorList([
    {first: "Author", last: "One"},
    {first: "Author", last: "Two"},
    {first: "Author", last: "Three"},
    {first: "Author", last: "Four"},
    {first: "Author", last: "Five"},
    {first: "Author", last: "Six"},
    {first: "Author", last: "Seven"},
    {first: "Author", last: "Eight"},
    {first: "Author", last: "Nine"},
    {first: "Author", last: "Ten"},
    {first: "Author", last: "Eleven"}
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
        expect(fourAuthorList.authors).toEqual([
            {first: "Author", last: "One"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"},
            {first: "Author", last: "Four"}
        ]);
    });
});

describe("authorList.note() testing", () => {
    test("should create note citation with one author", () => {
        expect(authorList.note()).toBe("Author One, ");
    });

    test("should create note citation with no authors", () => {
        expect(emptyAuthorList.note()).toBe("");
    });

    test("should create note citation with two authors", () => {
        expect(twoAuthorList.note()).toBe("Author One and Author Two, ");
    });

    test("should create note citation with three authors", () => {
        expect(threeAuthorList.note()).toBe("Author One, Author Two, and Author Three, ");
    });

    test("should create note citation with greater than three authors", () => {
        expect(fourAuthorList.note()).toBe("Author One et al., ");
    });
});

describe("authorList.bibliography() testing", () => {
    test("should create bibliography citation with one author", () => {
        expect(authorList.bibliography()).toBe("One, Author. ");
    });

    test("should create bibliography citation with no authors", () => {
        expect(emptyAuthorList.bibliography()).toBe("");
    });

    test("should create bibliography citation with two authors", () => {
        expect(twoAuthorList.bibliography()).toBe("One, Author, and Author Two. ");
    });

    test("should create bibliography citation with three authors", () => {
        expect(threeAuthorList.bibliography()).toBe("One, Author, Author Two, and Author Three. ");
    });

    test("should create bibliography citation with between three to ten authors", () => {
        expect(fourAuthorList.bibliography()).toBe("One, Author, Author Two, Author Three, and Author Four. ");
    });

    test("should create bibliography citation with more than ten authors", () => {
        expect(elevenAuthorList.bibliography()).toBe("One, Author, Author Two, Author Three, Author Four, Author Five, Author Six, Author Seven, et al.");
    })
});
