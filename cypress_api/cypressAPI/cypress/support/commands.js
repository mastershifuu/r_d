
Cypress.Commands.add('sentRequest',(method,url,payload,) =>{
    return cy.request({
        method: method,
        url: url,
        failOnStatusCode: false,
        headers: {
            Authorization: Cypress.env('token')
        },
        body: payload
    })
})
