describe('ui-ang', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testlibcomponentcomponent--primary'));

  it('should render the component', () => {
    cy.get('attempt-three-test-lib-component').should('exist');
  });
});
