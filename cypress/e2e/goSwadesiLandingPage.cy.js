import { BASE_URL, GROCERIES_URL, PULSES_URL, SPICES_URL, SWEETS_URL,PERSONNEL_CARE_URL,MEDICINE_URL,COOKWARE_URL  } from '../support/constants'

describe('Land on Swadesi page', () =>{
    it('Navigate to Swadesi home page', () =>{
        cy.visit(BASE_URL);
        cy.visit(GROCERIES_URL);
        cy.visit(PULSES_URL);
        cy.visit(SPICES_URL);
        cy.visit(SWEETS_URL);
        cy.visit(PERSONNEL_CARE_URL);
        cy.visit(MEDICINE_URL);
        cy.visit(COOKWARE_URL);
    });
});