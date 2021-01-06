export default function validatePages(pages: Array<{page: string}>): Array<{page: string}> {
  let arr: Array<{page: string}> = [];

  pages.forEach((page) => {
    if (page.page !== '') arr.push(page);
  });

  return arr;
}
