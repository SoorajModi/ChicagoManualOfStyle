# ChicagoManualOfStyle

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
import * as CMOS from ("ChicagoManualOfStyle");

console.log(CMoS.creteBookCitation({title: "Your Book Title"}, ["1"]));
```

## How to Run Locally

Install node packages: `npm install`

To test: `npm t` or `npm run test`

To run tests with coverage: `npm run coverage`

To run linter: `npm run lint`
