import {
    book,
    journal,
    webpage,
    lecture, newspaper
} from "../src/citation";

describe("book() testing", () => {
    it("should create book citation", () => {
        let citation = book({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000"
        }, ["1", "2", "3"]);

        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.",
                "Fitzgerald, 2.",
                "Fitzgerald, 3."]
        });
    });

    it("should create book citation with only title", () => {
        let citation = book({
            title: "The Great Gatsby"
        }, ["1", "2", "3"]);

        expect(citation).toStrictEqual({
            "bibliography": "The Great Gatsby.",
            "notes": [
                "The Great Gatsby, 1.",
                "The Great Gatsby, 2.",
                "The Great Gatsby, 3."]
        });
    });

    // it("should create note citations with invalid pages", () => {
    //     let citation = book({
    //         title: "The Great Gatsby",
    //         authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    //         publisher: "Charles Scribner's Sons",
    //         placeOfPublication: "New York",
    //         yearOfPublication: "2000",
    //     }, [{page: "1"}, {page: ""}, {page: "2"}]);
    //
    //     expect(citation).toStrictEqual({
    //         "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
    //         "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1.",
    //             "Fitzgerald, 2."]
    //     });
    // });

    it("should create book citation with url", () => {
        let citation = book({
            title: "The Great Gatsby",
            authorList: [{first: "F. Scott", last: "Fitzgerald"}],
            publisher: "Charles Scribner's Sons",
            placeOfPublication: "New York",
            yearOfPublication: "2000",
            url: "www.thegreatgatsby.com"
        }, ["1"]);

        expect(citation).toStrictEqual({
            "bibliography": "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000. www.thegreatgatsby.com.",
            "notes": ["F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1, www.thegreatgatsby.com."]
        });
    });

    it("should create book citation with only title and url", () => {
        let citation = book({
            title: "The Great Gatsby",
            url: "www.thegreatgatsby.com"
        }, ["1"]);

        expect(citation).toStrictEqual({
            "bibliography": "The Great Gatsby. www.thegreatgatsby.com.",
            "notes": ["The Great Gatsby, 1, www.thegreatgatsby.com."]
        });
    });
});

describe("journal() testing", () => {
    it("should create journal citation", () => {
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

    it("should create journal citation with only title", () => {
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

    it("should create journal citation of url", () => {
        let citation = journal({
            title: "Title", authorList: [{first: "First", last: "Last"}], publisher: "Publisher",
            yearOfPublication: "Year", volume: "vol", issue: "iss", startRange: "1", endRange: "10",
            url: "www.test.com"
        }, [{page: "1"}]);
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Title.\" Publisher vol, no. iss (Year): 1-10. www.test.com.",
            "notes": ["First Last, \"Title,\" Publisher vol, no. iss (Year): 1, www.test.com."]
        });
    });

    it("should create journal citation with only title and url", () => {
        let citation = journal({
            title: "Title",
            url: "www.test.com"
        }, [{page: "1"}]);

        expect(citation).toStrictEqual({
            "bibliography": "\"Title.\" www.test.com.",
            "notes": ["\"Title,\" 1, www.test.com."]
        });
    });
});

describe("webpage() testing", () => {
    it("should create webpage citation", () => {
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
            "notes": ["First Last, \"Title of Webpage,\" testWebsite, testPublisher, 2000, wwww.testwebsite.com.",
            "Last, \"Title of Webpage.\""]
        });
    });

    it("should create webpage citation with only title and url", () => {
        let citation = webpage({
            title: "Title of Webpage",
            nameOfSite: "testWebsite",
            url: "wwww.testwebsite.com"
        });
        expect(citation).toStrictEqual({
            "bibliography": "\"Title of Webpage.\" testWebsite. wwww.testwebsite.com.",
            "notes": ["\"Title of Webpage,\" testWebsite, wwww.testwebsite.com.",
            "testWebsite, \"Title of Webpage.\""]
        });
    });
});

describe("lecture() testing", () => {
    it("should create lecture citation", () => {
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
            "notes": ["First Last, \"Course\" (lecture, University, City, Province, Date).", "Last, \"Course.\""]
        });
    });

    it("should create lecture with only title and prof", () => {
        let citation = lecture({
            title: "Course",
            professor: [{first: "First", last: "Last"}]
        });
        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Course.\" Lecture.",
            "notes": ["First Last, \"Course\" (lecture).", "Last, \"Course.\""]
        });
    });
});

describe("newspaper() testing", () => {
    it("should create newspaper citation", () => {
        let citation = newspaper({
            articleTitle: "Article Title",
            newspaperTitle: "Newspaper Title",
            authorList: [{first: "First", last: "Last"}],
            date: "Date",
            edition: "Edition",
        });

        expect(citation).toStrictEqual({
           "bibliography": "Last, First. \"Article Title.\" Newspaper Title, Edition, Date.",
           "notes": ["First Last, \"Article Title,\" Newspaper Title, Date, Edition."]
        });
    });

    it("should create newspaper citation with URL", () => {
        let citation = newspaper({
            articleTitle: "Article Title",
            newspaperTitle: "Newspaper Title",
            authorList: [{first: "First", last: "Last"}],
            date: "Date",
            edition: "Edition",
            url: "URL",
        });

        expect(citation).toStrictEqual({
            "bibliography": "Last, First. \"Article Title.\" Newspaper Title, Edition, Date. URL.",
            "notes": ["First Last, \"Article Title,\" Newspaper Title, Date, Edition, URL."]
        })
    });
});
