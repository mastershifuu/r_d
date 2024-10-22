import {faker} from "@faker-js/faker";
const goalsUrl = `/team/9012387526/goal`;

export const getGoals = ()=>{
    return cy.sentRequest('GET', goalsUrl)
}

export const createGoal = ()=>{
    const randomName= faker.internet.userName()
    cy.wrap(randomName).as('myRandomName')
    return cy.fixture('goals/create_goal.json').then((payload) => {
        payload.name = randomName
        return  cy.sentRequest('POST', goalsUrl, payload)
    })
}

export const updateGoal = (id)=>{
    const newRandomName= faker.internet.userName()
    cy.wrap(newRandomName).as('newRandomName')
    return cy.fixture('goals/update_goal.json').then((payload) => {
        payload.name = newRandomName
        return  cy.sentRequest('PUT', `/goal/${id}`, payload)
    })
}

export const getGoal = (id)=>{
    return cy.sentRequest('GET', `/goal/${id}`)
}

export const deleteGoal = (id)=>{
    return cy.sentRequest('DELETE', `/goal/${id}`)
}
