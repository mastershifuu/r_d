
const {getGoals, createGoal, updateGoal, getGoal, deleteGoal, getGoals401, createGoalWithoutName} = require("../../services/goalsMethods");

describe('Check goals functionality', () => {

    it('get goals', () => {
        getGoals()
            .then((response)=>{
                expect(response.status).to.eq(200)
            })

    })

    it('get goals with invalid team id', () => {
        getGoals401()
            .then((response)=>{
                expect(response.status).to.eq(401)
                expect(response.body.err).to.eq("Team not authorized")
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

    it('create goal without name', () => {
        createGoalWithoutName()
            .then((response)=>{
                expect(response.status).to.eq(500)
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

    it('get goal with invalid goal id', () => {
        createGoal()
            .then((response)=>{
                const id = "invalid-goal-id"
                getGoal(id).then((response)=>{
                        expect(response.status).to.eq(403)
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

    it('delete goal with invalid goal id', () => {
        createGoal()
            .then((response)=>{
                const id = "e111c786-7cf7-4abe-bfbc-910d0bd85711"
                deleteGoal(id)
                    .then((response)=>{
                        expect(response.status).to.eq(404)
                        expect(response.body.err).to.eq("Goal Not Found")
                    })
            })
    })

})