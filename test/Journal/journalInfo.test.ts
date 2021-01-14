import journalInfoCitation from '../../src/Journal/journalInfo';

let info = {
  journal: 'Journal',
  volume: 'vol',
  issue: 'iss',
  date: 'date',
};
let noJournalTitle = {
  journal: '', volume: 'vol', issue: 'iss', date: 'date',
};
let noVol = {
  journal: 'Journal', volume: '', issue: 'iss', date: 'date',
};
let noIss = {
  journal: 'Journal', volume: 'vol', issue: '', date: 'date',
};
let noDate = {
  journal: 'Journal', volume: 'vol', issue: 'iss', date: '',
};
let noVolIss = {
  journal: 'Journal', volume: '', issue: '', date: 'date',
};
let onlyTitle = {
  journal: 'Journal', volume: '', issue: '', date: '',
};
let emptyPublishingInfo = {
  journal: '', volume: '', issue: '', date: '',
};

describe('journalInfoCitation() testing', () => {
  test('should create citation for journal with all fields specified', () => {
    expect(journalInfoCitation(info)).toBe('Journal vol, no. iss (date):');
  });

  test('should create citation for journal with missing journal title', () => {
    expect(journalInfoCitation(noJournalTitle)).toBe('vol, no. iss (date):');
  });

  test('should create citation for journal with missing volume information', () => {
    expect(journalInfoCitation(noVol)).toBe('Journal, no. iss (date):');
  });

  test('should create citation for journal with missing issue information', () => {
    expect(journalInfoCitation(noIss)).toBe('Journal vol, (date):');
  });

  test('should create citation for journal with missing date information', () => {
    expect(journalInfoCitation(noDate)).toBe('Journal vol, no. iss:');
  });

  test('should create citation with no volume or issue specified', () => {
    expect(journalInfoCitation(noVolIss)).toBe('Journal, (date):');
  });

  test('should create citation with only title specified', () => {
    expect(journalInfoCitation(onlyTitle)).toBe('Journal:');
  });

  test('should create citation for journal with no fields specified', () => {
    expect(journalInfoCitation(emptyPublishingInfo)).toBe('');
  });
});
