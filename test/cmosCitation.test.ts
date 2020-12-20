import {
    bookCitation,
    eBookCitation,
    journalCitation,
    eJournalCitation,
    webpageCitation,
    lectureCitation
} from "../src/cmosCitation";

describe("createBookCitation() testing", () => {
    test("should create book citation", () => {
        let citation = bookCitation({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        }, ["1"]);
        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1."]
        })
    });
});

describe("createEBookCitation() testing", () => {
    let citation = eBookCitation({
        title: "The Great Gatsby",
        authorList: [{first: "F. Scott", last: "Fitzgerald"}],
        publisher: "Charles Scribner's Sons",
        placeOfPublication: "New York",
        yearOfPublication: "2000",
        url: "www.thegreatgatsby.com"
    }, ["1"]);

    test("should create eBook citation", () => {
        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com."]
        });
    });

    test("should throw error if missing url field", () => {
        try {
            eBookCitation({title: "The Great Gatsby",}, ["1"]);
            expect(true).toBe(false);   // Will trigger if no error thrown
        } catch (e) {
            expect(e.message).toBe("URL not specified");
        }
    });
});

describe("createJournalCitation() testing", () => {
    test("should create journal citation", () => {
        let citation = journalCitation({
            title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10"
        }, ["1"]);
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10.",
            "notes": ["First Last, \"Title,\" Publisher vol, no. iss (Year): 1."]
        })
    });
});

describe("createEJournalCitation() testing", () => {
    test("should create eJournal citation", () => {
        let citation = eJournalCitation({
            title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10",
            url: "www.test.com"
        }, ["1"]);
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10. www.test.com.",
            "notes": ["First Last, \"Title,\" Publisher vol, no. iss (Year): 1, www.test.com."]
        })
    });

    test("should throw error if missing url field", () => {
        try {
            eJournalCitation({title: "The Great Gatsby"}, ["1"]);
            expect(true).toBe(false);   // Will trigger if no error thrown
        } catch (e) {
            expect(e.message).toBe("URL not specified");
        }
    });
});

describe("createWebpageCitation() testing", () => {
    test("should create webpage citation", () => {
        let citation = webpageCitation({
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
});

describe("createLectureCitation() testing", () => {
    test("should create lecture citation", () => {
        let citation = lectureCitation({
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
        })
    });
});
