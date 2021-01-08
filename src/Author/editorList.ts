import AuthorList from "./authorList";

export default class EditorList extends AuthorList {
    constructor(editorList: Array<{first: string, last: string}>) {
        super(editorList);
    }

    noAuthorBibliography(): string {
        return (this.bibliography()).replace('.', ', ed.');
    }

    noAuthorsNote(): string {
        return (`${this.note()}ed., `);
    }

    editorNote(): string {
        return ", ed. " + this.note().trim().slice(0, -1);
    }

    editorBibliography(): string {
        return " Edited by " + this.note().trim().slice(0, -1) + ".";
    };
}