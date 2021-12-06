export class independentLoginPage { }

export function tenProducts() {

    cy.get('.MuiSelect-root.MuiSelect-select')
        .contains('10')

    cy.get('div.MuiPaper-root > div.MuiGrid-root')
        .should('be.visible')
        .should('have.length', 10)
}

export function twfiveProducts() {

    cy.get('.MuiSelect-root.MuiSelect-select')
        .contains('10').click()

    cy.get('.MuiList-root.MuiMenu-list.MuiList-padding')
        .contains('25').click()

    cy.wait(2000)

    cy.get('div.MuiPaper-root > div.MuiGrid-root')
        .should('be.visible')
        .should('have.length', 25)
}

export function outOfStock() {

    cy.get('.MuiSelect-root.MuiSelect-select')
        .contains('10').click()

    cy.get('.MuiList-root.MuiMenu-list.MuiList-padding')
        .contains('25').click()

    cy.wait(2000)

    cy.get('[aria-label="stockStatus"] [type]').check({ force: true })

    cy.get('div.MuiPaper-root > div.MuiGrid-root').should('be.visible')

    cy.get('.MuiTypography-root.jss181.MuiTypography-h5')
        .contains('OUT OF STOCK')

}

export function lowToHigh() {

    cy.get('#sort').click()
    cy.get('[data-value="price-asc"]')
        .contains('Price Low to High').click()

    cy.wait(2000)

    cy.get('div.MuiBox-root')
        .find('h2')
        .should('have.length.gt', 0)
        .then($prices => {
            // remove "$" from prices and convert to strings
            const prices = $prices
                .toArray()
                .map($el => parseFloat($el.innerText.substr(1)))
            // assertion comes from chai-sorted
            expect(prices).to.be.sorted()

        })
}



