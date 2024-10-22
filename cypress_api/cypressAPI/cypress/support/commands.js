
Cypress.Commands.add('sentRequest',(method,url,payload,) =>{
    return cy.request({
        method: method,
        url: url,
        headers: {
            Authorization: Cypress.env('token')
        },
        body: payload
    })
})
