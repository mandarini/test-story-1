describe('ui-test: UiTest component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uitest--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-test!');
    });
});
