export interface BookInfoInterface {
    edition?: string;
    publisher?: string;
    placeOfPublication?: string;
    yearOfPublication?: string;
}

export interface ValidBookInfoInterface {
    edition: string;
    pub: string;
    pop: string;
    yop: string;
}

export function createBookInfo(info: BookInfoInterface): ValidBookInfoInterface {
  return {
    edition: info.edition || '',
    pub: info.publisher || '',
    pop: info.placeOfPublication || '',
    yop: info.yearOfPublication || '',
  };
}
