export function convertPagesObjToArray(pages: Array<{page: string}>): Array<string> {
  let arr: Array<string> = [];

  pages.forEach((page) => {
    if (page.page !== '') {
      arr.push(page.page);
    }
  });

  return arr;
}

export function validatePages(pages: Array<{page: string}>): Array<{page: string}> {
    let arr: Array<{page: string}> = [];

    pages.forEach((page) => {
        if (page.page !== '') arr.push(page);
    });

    return arr;
}