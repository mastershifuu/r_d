import {faker} from "@faker-js/faker";


export const createKey = (id)=>{
    const randomName= faker.internet.userName()
    cy.wrap(randomName).as('myRandomName')
    return cy.fixture('key/create_key.json').then((payload) => {
        payload.name = randomName
        return  cy.sentRequest('POST', `/goal/${id}/key_result`, payload)
    })
}

export const updateKey = (key_id)=>{
    return cy.fixture('/key/update_key.json').then((payload) => {
        return  cy.sentRequest('PUT', `/key_result/${key_id}`, payload)
    })
}

export const deleteKey = (key_id)=>{
    return cy.sentRequest('DELETE', `/key_result/${key_id}`)
}