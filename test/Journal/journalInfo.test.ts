import {JournalInfo} from "../../src/Journal/journalInfo";
import exp = require("constants");

let info = new JournalInfo({
    publisher: "Journal",
    volume: "vol",
    issue: "iss",
    yearOfPublication: "date"
});
let noJournalTitle = new JournalInfo({volume: "vol", issue: "iss", yearOfPublication: "date"});
let noVol = new JournalInfo({publisher: "Journal", issue: "iss", yearOfPublication: "date"});
let noIss = new JournalInfo({publisher: "Journal", volume: "vol", yearOfPublication: "date"});
let noDate = new JournalInfo({publisher: "Journal", volume: "vol", issue: "iss"});
let noVolIss = new JournalInfo({publisher: "Journal", yearOfPublication: "date"});
let onlyTitle = new JournalInfo({publisher: "Journal"});
let emptyPublishingInfo = new JournalInfo({});

describe("journalInfo.ts testing", () => {
    test("should set journal name member variable", () => {
        expect(info.journal).toBe("Journal");
    });

    test("should default journal name member variable", () => {
        expect(emptyPublishingInfo.journal).toBe("");
    });

    test("should set volume member variable", () => {
        expect(info.volume).toBe("vol");
    });

    test("should default volume member variable", () => {
        expect(emptyPublishingInfo.volume).toBe("");
    });

    test("should set issue member variable", () => {
        expect(info.issue).toBe("iss");
    });

    test("should default issue member variable", () => {
       expect(emptyPublishingInfo.issue).toBe("");
    });

    test("should set date member variable", () => {
        expect(info.date).toBe("date");
    });

    test("should set default date member variable", () => {
        expect(emptyPublishingInfo.date).toBe("");
    });
});

describe("journalPublishing.citation() testing", () => {
    test("should create citation for journal with all fields specified", () => {
       expect(info.citation()).toBe("Journal vol, no. iss (date):");
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
