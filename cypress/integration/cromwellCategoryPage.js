/// <reference types="Cypress" />

import * as cromwellPage from '../support/page_objects/Cromwell/cromwellPages.js'

describe('CROMWELL Listing Products Test', () => {

    beforeEach(() => {

        cy.visit('/')

    })

    it('Ten products should be displayed', () => {

        cromwellPage.tenProducts()

    })

    it('Twenty-five products should be displayed', () => {

        cromwellPage.twfiveProducts()

    })

    it('Show Out of Stock products', () => {

        cromwellPage.outOfStock()

    })

    it('Ten products should be displayed in order of price(low to high)', () => {

        cromwellPage.lowToHigh()

    })

})
