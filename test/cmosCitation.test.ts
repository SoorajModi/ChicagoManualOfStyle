import {
    book,
    eBook,
    journal,
    eJournal,
    webpage,
    lecture
} from "../src/cmosCitation";

describe("createBookCitation() testing", () => {
    test("should create book citation", () => {
        let citation = book({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        }, [{page: "1"}, {page: "2"}, {page: "3"}]);

        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.",
                "Fitzgerald, 2.",
                "Fitzgerald, 3."]
        });
    });

    test("should create book citation with only title", () => {
        let citation = book({
            title: "The Great Gatsby"
        }, [{page: "1"}, {page: "2"}, {page: "3"}]);

        expect(citation).toStrictEqual({
            "bibliography": "The Great Gatsby.",
            "notes": [
                "The Great Gatsby, 1.",
                "The Great Gatsby, 2.",
                "The Great Gatsby, 3."]
        });
    });

    test("should create note citations with invalid pages", () => {
        let citation = book({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000",
        }, [{page: "1"}, {page: ""}, {page: "2"}]);

        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.",
                "Fitzgerald, 2."]
        });
    });
});

describe("createEBookCitation() testing", () => {
    test("should create eBook citation", () => {
        let citation = eBook({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000",
            url: "www.thegreatgatsby.com"
        }, [{page: "1"}]);

        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com."]
        });
    });

    test("should create eBook citation with only title and url", () => {
        let citation = eBook({
            title: "The Great Gatsby",
            url: "www.thegreatgatsby.com"
        }, [{page: "1"}]);

        expect(citation).toStrictEqual({
            "bibliography": "The Great Gatsby. www.thegreatgatsby.com.",
            "notes": ["The Great Gatsby, 1, www.thegreatgatsby.com."]
        });
    });

    test("should throw error if missing url field", () => {
        try {
            eBook({title: "The Great Gatsby"}, [{page: "1"}]);
            fail("No error thrown with missing URL field");
        } catch (e) {
            expect(e.message).toBe("URL not specified");
        }
    });
});

describe("createJournalCitation() testing", () => {
    test("should create journal citation", () => {
        let citation = journal({
            title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10"
        }, [{page: "1"}, {page: "2"}, {page: "3"}]);
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10.",
            "notes": [
                "First Last, \"Title,\" Publisher vol, no. iss (Year): 1.",
                "Last, 2.",
                "Last, 3."
            ]
        });
    });

    test("should create journal citation with only title", () => {
        let citation = journal({
            title: "Title"
        }, [{page: "1"}, {page: "2"}, {page: "3"}]);

        expect(citation).toStrictEqual({
            "bibliography": "\"Title.\"",
            "notes": [
                "\"Title,\" 1.",
                "\"Title,\" 2.",
                "\"Title,\" 3."
            ]
        });
    });
});

describe("createEJournalCitation() testing", () => {
    test("should create eJournal citation", () => {
        let citation = eJournal({
            title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10",
            url: "www.test.com"
        }, [{page: "1"}]);
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10. www.test.com.",
            "notes": ["First Last, \"Title,\" Publisher vol, no. iss (Year): 1, www.test.com."]
        });
    });

    test("should create eJournal citation with only title and url", () => {
        let citation = eJournal({
            title: "Title",
            url: "www.test.com"
        }, [{page: "1"}]);

        expect(citation).toStrictEqual({
            "bibliography": "\"Title.\" www.test.com.",
            "notes": ["\"Title,\" 1, www.test.com."]
        });
    });

    test("should throw error if missing url field", () => {
        try {
            eJournal({title: "The Great Gatsby"}, [{page: "1"}]);
            expect(true).toBe(false);   // Will trigger if no error thrown
        } catch (e) {
            expect(e.message).toBe("URL not specified");
        }
    });
});

describe("createWebpageCitation() testing", () => {
    test("should create webpage citation", () => {
        let citation = webpage({
            title: "Title of Webpage",
            authorList: [{first: "First", last: "Last"}],
            publisher: "testPublisher",
            nameOfSite: "testWebsite",
            date: "2000",
            url: "wwww.testwebsite.com"
        });
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title of Webpage.\" testWebsite. testPublisher, 2000. wwww.testwebsite.com.",
            "notes": ["First Last, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com."]
        });
    });

    test("should create webpage citation with only title and url", () => {
        let citation = webpage({
            title: "Title of Webpage",
            nameOfSite: "testWebsite",
            url: "wwww.testwebsite.com"
        });
        expect(citation).toStrictEqual({
            "bibliography": "\"Title of Webpage.\" testWebsite. wwww.testwebsite.com.",
            "notes": ["\"Title of Webpage,\" testWebsite, wwww.testwebsite.com."]
        });
    });
});

describe("createLectureCitation() testing", () => {
    test("should create lecture citation", () => {
        let citation = lecture({
            title: "Course",
            professor: [{first: "First", last: "Last"}],
            university: "University",
            province: "Province",
            city: "City",
            date: "Date"
        });
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Course.\" Lecture, University, City, Province, Date.",
            "notes": ["First Last, \"Course\" (lecture, University, City, Province, Date)."]
        });
    });

    test("should create lecture with only title and prof", () => {
        let citation = lecture({
            title: "Course",
            professor: [{first: "First", last: "Last"}]
        });
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Course.\" Lecture.",
            "notes": ["First Last, \"Course\" (lecture)."]
        });
    });
});
