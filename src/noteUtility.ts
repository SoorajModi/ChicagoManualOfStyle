export default function validatePages(
  pages: { page: string }[]
): { page: string }[] {
  let arr: { page: string }[] = [];

  pages.forEach((page) => {
    if (page.page !== "") arr.push(page);
  });

  return arr;
}
