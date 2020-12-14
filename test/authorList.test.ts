import {AuthorList} from "../src/authorList";

let authorList = new AuthorList([{ first: "Author", last: "One" }]);
let emptyAuthorList = new AuthorList([]);
let twoAuthorList = new AuthorList([{ first: "Author", last: "One" }, { first: "Author", last: "Two" }]);
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
    test("should create author list with one author", () => {
        expect(authorList.authors).toEqual([{ first: "Author", last: "One" }]);
    });

    test("should create empty author list with no authors", () => {
        expect(emptyAuthorList.authors).toEqual([]);
    });

    test("should create author list with two authors", () => {
       expect(twoAuthorList.authors).toEqual([{ first: "Author", last: "One" }, { first: "Author", last: "Two" }]);
    });

    test("should create author list with three authors", () => {
        expect(threeAuthorList.authors).toEqual([
            {first: "Author", last: "One"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"}
        ]);
    });

    test("should create author list with four+ authors", () => {
        expect(multiAuthorList.authors).toEqual([
            {first: "Author", last: "One"},
            {first: "Author", last: "Two"},
            {first: "Author", last: "Three"},
            {first: "Author", last: "Four"}
        ]);
    });
});