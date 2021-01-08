# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
## Added
- Added citation generation for books with editors and/or editions beyond the first.

## Changed
- To generate citations for electronic books, caller must specify URL in book() function call instead of calling eBook().
- To generate citation for electronic journal, caller must specify URL field in journal() function call instead of calling eJournal().

## Removed
- eBook() citation

# 1.3.5
## Changed
- Revert Book/EBook pages back to string array from object.

# 1.3.4
## Changed
- Bug fixes with page validation for books and electronic books.

# 1.3.3
## Changed
- Bug fixes with page validation.

# 1.3.2
## Changed
- Fix type error resulting in invalid returned note citation.

# 1.3.1
## Changed
- Update README.
- Fix type error with author.isValid is not a function. 

# 1.3.0
### Added
- Validate author list. Will not generate citation if first, last, or both are empty.
- Validate pages. Will note generate note citation if page is empty.

### Changed
- Improve code for authorList and author.
- Change array structure for pages from string to `{ page: string }`.

# 1.2.0
### Added
- Support for short note citations for Books and Journal.

### Changed
- Bug fixes.

# 1.1.1
### Changed
- Bug fixes.

# 1.1.0
### Added
- Upgrade to airbnb style guidelines.
- Add CD to NPM to pipeline.

## Changed
- Refactor code.
- Rename createCitation -> cmosCitation and core function names.

## [1.0.1-4]
### Fixed
- Bug fixes.

## [1.0.0] - Initial Release