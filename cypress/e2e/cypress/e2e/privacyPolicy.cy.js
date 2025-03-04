it('', () => {
    cy.visit('./src/privacy.html')
    cy.contains('h1','CAC TAT - Política de privacidade').should('be.visible')
    cy.contains('p','Talking About Testing').should('be.visible')

});








