describe('Making sure SimpleForm exist and functions well', () => {
    const simpleForm = () => cy.get('button[id=simple-form]')
    it('simpleform button should exist & be able to click on it ', () => {
        cy.visit('http://localhost:3000/')
        simpleForm().should('exist').click()
    })
    it('should take you to the correct form example', () => {
        cy.url().should('include' , '/simple-form')
    })
})
describe('Testing functionality of simple form', () => {
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const submitBtn = () => cy.get('button[id=simple-submit]')
    it('Both inputs should exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        submitBtn().should('exist')
    })
    it('Type inside inputs and submit', () => {
        nameInput().type('Hank Hill')
        emailInput().type('hankhill@propaine.com')
        submitBtn().click()
        nameInput().should('value', '')
        emailInput().should('value', '')
    })
})
describe('Navigation back to home page', () => {
    const homeBtn = () =>  cy.get('button[id=homeBTN]')
    it('When clicked we should be back at home page', () => {
        homeBtn().should('exist').click()
        cy.url().should('include', '/')
    })
})