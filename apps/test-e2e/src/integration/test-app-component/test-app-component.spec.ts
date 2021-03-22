describe('test: TestAppComponent component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testappcomponent--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to test!');
    });
});
