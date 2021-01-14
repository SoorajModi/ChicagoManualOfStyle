import Editors from "../../src/Author/editors";

let editor = new Editors([{ first: "Author", last: "One" }]);

describe("editors testing", () => {
  it("should set authors member variable", () => {
    expect(editor.authors).toEqual([{ first: "Author", last: "One" }]);
  });
});

describe("editors.editorNote() testing", () => {
  it("should generate editor note", () => {
    expect(editor.editorNote()).toBe(", ed. Author One");
  });
});

describe("editors.editorBibliography() testing", () => {
  it("should generate editor bibliography with edition", () => {
    expect(editor.editorBibliography("Not Empty")).toBe(
      " Edited by Author One,"
    );
  });

  it("should generate editor bibliography with no edition", () => {
    expect(editor.editorBibliography("")).toBe(" Edited by Author One.");
  });
});

describe("editors.noAuthorBibliography() testing", () => {
  it("should generate editor bibliography format with no author for source", () => {
    expect(editor.noAuthorBibliography()).toBe("One, Author, ed. ");
  });
});

describe("editors.noAuthorsNote() testing", () => {
  it("should generate editor note format with no author specified", () => {
    expect(editor.noAuthorsNote()).toBe("Author One, ed., ");
  });
});
