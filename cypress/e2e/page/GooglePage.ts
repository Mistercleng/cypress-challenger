export default class GooglePage {
    visit() {
      cy.visit('https://www.google.com');
    }
  
    searchFor(term: string) {
      cy.get('[name="q"]').type(`${term}{enter}`);
    }
  
    verifyResultsContain(term: string) {
      cy.get('#search').should('exist');
      cy.get('#search').within(() => {
        cy.contains(term, { matchCase: false }).should('exist');
      });
    }
  }
  