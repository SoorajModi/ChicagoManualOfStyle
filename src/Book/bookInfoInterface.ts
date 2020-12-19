export interface BookInfoInterface {
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
}

function createBookInfo(info: BookInfoInterface): {publisher: string, placeOfPublication: string, yearOfPublication: string} {
    return {
        publisher: info.publisher || "",
        placeOfPublication: info.placeOfPublication || "",
        yearOfPublication: info.yearOfPublication || ""
    }
}

export {createBookInfo};
