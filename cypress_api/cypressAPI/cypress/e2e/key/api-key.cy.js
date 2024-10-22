
const {createGoal} = require("../../services/goalsMethods");
const {createKey, updateKey, deleteKey} = require("../../services/keyMethods");


describe('Check key functionality', () => {

    it('create key result', () => {
        createGoal()
            .then((response)=>{
                const id = response.body.goal.id
                createKey(id)
                    .then((response)=>{
                        expect(response.status).to.eq(200)
                })
            })
    })

    it('update key result', () => {
        createGoal()
            .then((response)=>{
                const id = response.body.goal.id
                createKey(id)
                    .then((response)=>{
                        const key_id = response.body.key_result.id
                        updateKey(key_id)
                            .then((response)=>{
                                expect(response.status).to.eq(200)
                            })
                })
            })
    })

    it('delete key result', () => {
        createGoal()
            .then((response)=>{
                const id = response.body.goal.id
                createKey(id)
                    .then((response)=>{
                        const key_id = response.body.key_result.id
                        deleteKey(key_id)
                            .then((response)=>{
                                expect(response.status).to.eq(200)
                            })
                    })
            })
    })

})
