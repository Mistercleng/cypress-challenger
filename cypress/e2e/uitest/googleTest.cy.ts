// google_search.cy.ts

import GooglePage from '../page/GooglePage';

describe('Google Search for Headphone', () => {
  const googlePage = new GooglePage();

  it('should search for "headphone" on Google and check if results are returned', () => {

    googlePage.visit();
    googlePage.searchFor('headphone');
    googlePage.verifyResultsContain('headphone');
  });
});
