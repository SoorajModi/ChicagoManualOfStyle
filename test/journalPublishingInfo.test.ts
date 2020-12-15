import {JournalPublishingInfo} from "../src/journalPublishingInfo";
import exp = require("constants");

let publishingInfo = new JournalPublishingInfo({
    publisher: "Journal",
    volume: "vol",
    issue: "iss",
    yearOfPublication: "date"
});
let noJournalTitle = new JournalPublishingInfo({volume: "vol", issue: "iss", yearOfPublication: "date"});
let noVol = new JournalPublishingInfo({publisher: "Journal", issue: "iss", yearOfPublication: "date"});
let noIss = new JournalPublishingInfo({publisher: "Journal", volume: "vol", yearOfPublication: "date"});
let noDate = new JournalPublishingInfo({publisher: "Journal", volume: "vol", issue: "iss"});
let noVolIss = new JournalPublishingInfo({publisher: "Journal", yearOfPublication: "date"});
let onlyTitle = new JournalPublishingInfo({publisher: "Journal"});
let emptyPublishingInfo = new JournalPublishingInfo({});

describe("journalPublishingInfo.ts testing", () => {
    test("should set journal name member variable", () => {
        expect(publishingInfo.journal).toBe("Journal");
        expect(noVol.journal).toBe("Journal");
        expect(noIss.journal).toBe("Journal");
        expect(noDate.journal).toBe("Journal");
        expect(noVolIss.journal).toBe("Journal");
        expect(onlyTitle.journal).toBe("Journal");
    });

    test("should default journal name member variable", () => {
        expect(noJournalTitle.journal).toBe("");
        expect(emptyPublishingInfo.journal).toBe("");
    });

    test("should set volume member variable", () => {
        expect(publishingInfo.volume).toBe("vol");
        expect(noJournalTitle.volume).toBe("vol");
        expect(noIss.volume).toBe("vol");
        expect(noDate.volume).toBe("vol");
    });

    test("should default volume member variable", () => {
        expect(noVol.volume).toBe("");
        expect(noVolIss.volume).toBe("");
        expect(onlyTitle.volume).toBe("");
        expect(emptyPublishingInfo.volume).toBe("");
    });

    test("should set issue member variable", () => {
        expect(publishingInfo.issue).toBe("iss");
        expect(noJournalTitle.issue).toBe("iss");
        expect(noDate.issue).toBe("iss");
        expect(noVol.issue).toBe("iss");
    });

    test("should default issue member variable", () => {
       expect(noIss.issue).toBe("");
       expect(noVolIss.issue).toBe("");
       expect(onlyTitle.issue).toBe("");
       expect(emptyPublishingInfo.issue).toBe("");
    });

    test("should set date member variable", () => {
        expect(publishingInfo.date).toBe("date");
        expect(noJournalTitle.date).toBe("date");
        expect(noVol.date).toBe("date");
        expect(noIss.date).toBe("date");
        expect(noVolIss.date).toBe("date");
    });

    test("should set default date member variable", () => {
        expect(noDate.date).toBe("");
        expect(onlyTitle.date).toBe("");
        expect(emptyPublishingInfo.date).toBe("");
    });
});

describe("journalPublishing.citation() testing", () => {
    test("should create citation for journal with all fields specified", () => {
       expect(publishingInfo.citation()).toBe("Journal vol, no. iss (date):");
    });

    test("should create citation for journal with missing journal title", () => {
       expect(noJournalTitle.citation()).toBe("vol, no. iss (date):");
    });

    test("should create citation for journal with missing volume information", () => {
       expect(noVol.citation()).toBe("Journal, no. iss (date):");
    });

    test("should create citation for journal with missing issue information", () => {
       expect(noIss.citation()).toBe("Journal vol, (date):");
    });

    test("should create citation for journal with missing date information", () => {
       expect(noDate.citation()).toBe("Journal vol, no. iss:");
    });

    test("should create citation with no volume or issue specified", () =>  {
        expect(noVolIss.citation()).toBe("Journal, (date):");
    });

    test("should create citation with only title specified", () => {
       expect(onlyTitle.citation()).toBe("Journal:");
    });

    test("should create citation for journal with no fields specified", () => {
       expect(emptyPublishingInfo.citation()).toBe("");
    });
});
