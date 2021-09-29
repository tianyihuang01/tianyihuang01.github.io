describe('The Home Page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should show Melbourne"s weather after pageload', () => {
		cy.get('.sc-bCwfaz', {timeout: 6000})
			.contains('Melbourne')
	})

	it('should contains a clickable link in a news title', () => {
		cy.get('.sc-iqAclL > a', {timeout: 6000}).eq(1)
			.should('have.attr', 'href')
		cy.get('.sc-iqAclL > a', {timeout: 6000}).eq(1)
			.invoke('removeAttr', 'target').click()
	})

	it('should show Sydney"s weather after searching', () => {
		cy.get('input')
			.type('Sydney')
			.should('have.value', 'Sydney')
		cy.get('button').click()
		cy.get('#2147714').click()
		cy.get('.sc-bCwfaz', {timeout: 6000})
			.contains('Sydney')
	})
})