import {Journal} from "../src/journal";
import {AuthorList} from "../src/authorList";
import {JournalPublishingInfo} from "../src/journalPublishingInfo";

let journal = new Journal({title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
    yearOfPublication: "Year", volume: "vol", issue: "iss", pageRange: "1-10"});
let noAuthor = new Journal({title: "Title", publisher: "Publisher", yearOfPublication: "Year", volume: "vol",
    issue: "iss", pageRange: "1-10"});
let twoAuth = new Journal({title: "Title", authorList: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}], publisher: "Publisher",
    yearOfPublication: "Year", volume: "vol", issue: "iss", pageRange: "1-10"});
let threeAuth =  new Journal({title: "Title", authorList: [{first: "Author", last: "One"}, {first: "Author", last: "Two"}, {first: "Author", last: "Three"}], publisher: "Publisher",
    yearOfPublication: "Year", volume: "vol", issue: "iss", pageRange: "1-10"});

describe("journal.ts testing", () => {
    test("should set title member variable", () => {
        expect(journal.title).toBe("Title");
        expect(noAuthor.title).toBe("Title");
    });

    test("should set author list member variable", () => {
       expect(journal.authorList).toStrictEqual(new AuthorList([{first: "First", last: "Last"}]));
    });

    test("should default author list variable", () => {
        expect(noAuthor.authorList).toStrictEqual(new AuthorList([]));
    });

    test("should set publishing information member variable", () => {
        expect(journal.publishingInfo).toStrictEqual(new JournalPublishingInfo({publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss"}));
        expect(noAuthor.publishingInfo).toStrictEqual(new JournalPublishingInfo({publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss"}));
    });

    test("should set page range member variable", () => {
        expect(journal.pageRange).toBe("1-10");
        expect(noAuthor.pageRange).toBe("1-10");
    });
});

describe("journal.note() testing", () => {
   test("should create note citation with one author", () => {
      expect(journal.note("1")).toBe("First Last, \"Title,\" Publisher vol, no. iss (Year): 1.")
   });

   test("should create note citation with two authors", () => {
       expect(twoAuth.note("1")).toBe("Author One and Author Two, \"Title,\" Publisher vol, no. iss (Year): 1.")
   });

   test("should create note citation with three authors", () => {
       expect(threeAuth.note("1")).toBe("Author One, Author Two, and Author Three, \"Title,\" Publisher vol, no. iss (Year): 1.")
   });

    test("should create note citation with no authors", () => {
      expect(noAuthor.note("1")).toBe("\"Title,\" Publisher vol, no. iss (Year): 1.")
    });
});

describe("journal.bibliography() testing", () => {
   test("should create bibliography citation with one author", () => {
      expect(journal.bibliography()).toBe("Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
   });

    test("should create bibliography citation with twi author", () => {
        expect(twoAuth.bibliography()).toBe("One, Author, and Author Two. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation with three authors", () => {
       expect(threeAuth.bibliography()).toBe("One, Author, Author Two, and Author Three. \"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });

    test("should create bibliography citation with no authors", () => {
        expect(noAuthor.bibliography()).toBe("\"Title.\" Publisher vol, no. iss (Year): 1-10.");
    });
});