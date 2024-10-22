
const {getGoals, createGoal, updateGoal, getGoal, deleteGoal} = require("../../services/goalsMethods");

describe('Check goals functionality', () => {

    it('get goals', () => {
        getGoals()
            .then((response)=>{
                expect(response.status).to.eq(200)
            })

    })

    it('create goal', () => {
        createGoal().then((response)=>{
            cy.get('@myRandomName').then((name)=>{
                expect(response.body.goal.name).to.eq(name)
            })
            expect(response.status).to.eq(200)
        })
    })

    it('update goal', () => {
        createGoal()
            .then((response)=>{
                cy.get('@myRandomName').then((name)=>{
                    const id = response.body.goal.id
                    updateGoal(id)
                        .then((response)=>{
                            cy.get('@newRandomName').then((name)=>{
                                expect(response.body.goal.name).to.eq(name)
                            })
                            expect(response.status).to.eq(200)
                            })
            })
            expect(response.status).to.eq(200)
        })
    })


    it('get goal', () => {
        createGoal()
            .then((response)=>{
                const id = response.body.goal.id
                getGoal(id).then((response)=>{
                        expect(response.status).to.eq(200)
                    })
        })
    })

    it('delete goal', () => {
        createGoal()
            .then((response)=>{
                const id = response.body.goal.id
                deleteGoal(id)
                    .then((response)=>{
                        expect(response.status).to.eq(200)
                    })
            })
    })

})