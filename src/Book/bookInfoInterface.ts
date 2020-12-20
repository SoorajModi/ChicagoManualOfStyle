export interface BookInfoInterface {
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
}

export function createBookInfo(info: BookInfoInterface): {publisher: string, placeOfPublication: string, yearOfPublication: string} {
  return {
    publisher: info.publisher || '',
    placeOfPublication: info.placeOfPublication || '',
    yearOfPublication: info.yearOfPublication || '',
  };
}
