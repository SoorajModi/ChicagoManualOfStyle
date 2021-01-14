import { bookInfoNote, bookInfoBibliography } from "../../src/Book/bookInfo";

let bookInfo = {
  edition: "Edition",
  publisher: "Publisher",
  placeOfPublication: "Place",
  yearOfPublication: "Year",
};
let emptyBookInfo = {};
let noPlaceOfPublication = {
  publisher: "Publisher",
  yearOfPublication: "Year",
};
let noYearOfPublication = {
  publisher: "Publisher",
  placeOfPublication: "Place",
};
let noPublisher = { placeOfPublication: "Place", yearOfPublication: "Year" };
let onlyYearOfPublication = { yearOfPublication: "Year" };
let onlyPublisher = { publisher: "Publisher" };
let onlyPlaceOfPublication = { placeOfPublication: "Place" };
let onlyEdition = { edition: "Edition" };

describe("bookInfoNote() testing", () => {
  it("should generate note citation with all fields specified", () => {
    expect(bookInfoNote(bookInfo)).toBe(", Edition (Place: Publisher, Year)");
  });

  it("should generate note citation with no publisher field", () => {
    expect(bookInfoNote(noPublisher)).toBe(" (Place: Year)");
  });

  it("should generate note citation with no place of publication specified", () => {
    expect(bookInfoNote(noPlaceOfPublication)).toBe(" (Publisher, Year)");
  });

  it("should generate note citation with no year of publication specified", () => {
    expect(bookInfoNote(noYearOfPublication)).toBe(" (Place: Publisher)");
  });

  it("should generate note citation with only year of publication specified", () => {
    expect(bookInfoNote(onlyYearOfPublication)).toBe(" (Year)");
  });

  it("should generate note citation with only publisher specified", () => {
    expect(bookInfoNote(onlyPublisher)).toBe(" (Publisher)");
  });

  it("should generate note citation with only place of publication specified", () => {
    expect(bookInfoNote(onlyPlaceOfPublication)).toBe(" (Place)");
  });

  it("should generate note citation with only edition specified", () => {
    expect(bookInfoNote(onlyEdition)).toBe(", Edition");
  });

  it("should generate note citation with no fields specified", () => {
    expect(bookInfoNote(emptyBookInfo)).toBe("");
  });
});

describe("bookInfo.bibliography() testing", () => {
  it("should generate bibliography citation with all fields specified", () => {
    expect(bookInfoBibliography(bookInfo)).toBe(
      " Edition. Place: Publisher, Year."
    );
  });

  it("should generate bibliography citation with no publisher field", () => {
    expect(bookInfoBibliography(noPublisher)).toBe(" Place: Year.");
  });

  it("should generate bibliography citation with no place of publication specified", () => {
    expect(bookInfoBibliography(noPlaceOfPublication)).toBe(
      " Publisher, Year."
    );
  });

  it("should generate bibliography citation with no year of publication specified", () => {
    expect(bookInfoBibliography(noYearOfPublication)).toBe(
      " Place: Publisher."
    );
  });

  it("should generate bibliography citation with only year of publication specified", () => {
    expect(bookInfoBibliography(onlyYearOfPublication)).toBe(" Year.");
  });

  it("should generate bibliography citation with only publisher specified", () => {
    expect(bookInfoBibliography(onlyPublisher)).toBe(" Publisher.");
  });

  it("should generate bibliography citation with only place of publication specified", () => {
    expect(bookInfoBibliography(onlyPlaceOfPublication)).toBe(" Place.");
  });

  it("should generate note citation with only edition specified", () => {
    expect(bookInfoBibliography(onlyEdition)).toBe(" Edition.");
  });

  it("should generate bibliography with no fields specified", () => {
    expect(bookInfoBibliography(emptyBookInfo)).toBe("");
  });
});
