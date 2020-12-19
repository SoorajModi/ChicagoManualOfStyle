# ChicagoManualOfStyle

![npm_version](https://img.shields.io/npm/v/chicagomanualofstyle)
![code_cov](https://img.shields.io/codecov/c/github/SoorajModi/ChicagoManualOfStyle)
![build](https://img.shields.io/github/workflow/status/SoorajModi/ChicagoManualOfStyle/Main)
![license](https://img.shields.io/badge/license-GNU_V2-brightgreen)

This is an application to create citations in Chicago Manual of Style (CMoS) 17th ed. in Note-Bibliography style: www.chicagomanualofstyle.org.

## Features

- Will create note and bibliography citations for the following source types

    - Books / Electronic Books
    - Journal / Electronic Journals
    - Lectures
    - Webpages
    
## Installation

```bash
npm i chicagomanualofstyle
```

## Usage

```bash
let CMoS = require('chicagomanualofstyle');

let str = CMOS.createBookCitation({
    title: "The Great Gatsby",
    authorList: [{first: "F. Scott", last: "Fitzgerald"}],
    publisher: "Charles Scribner's Sons",
    placeOfPublication: "New York",
    yearOfPublication: "2000"
}, ["1"]);

console.log(str);
```

This will return:

```bash
{
  bibliography: "Fitzgerald, F. Scott. The Great Gatsby. New York: Charles Scribner's Sons, 2000.",
  notes: [
    "F. Scott Fitzgerald, The Great Gatsby (New York: Charles Scribner's Sons, 2000), 1."
  ]
}
```

## How to Run Locally

Install node packages: `npm install`

To test: `npm t` or `npm run test`

To run tests with coverage: `npm run coverage`

To run linter: `npm run lint`

## License

MIT
