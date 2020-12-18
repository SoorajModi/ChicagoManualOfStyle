export interface BookInfoInterface {
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
}

function createBookInfo(info: BookInfoInterface) {
    return {
        publisher: info.publisher || "",
        placeOfPublication: info.placeOfPublication || "",
        yearOfPublication: info.yearOfPublication || ""
    }
}

module.exports = {
    createBookInfo: createBookInfo
};