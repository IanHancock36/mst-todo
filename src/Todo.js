// Creating the first Model. 
    // easy way to define model is to pass sample data that will be used for defaults. 

import { types, getSnapshot } from "mobx-state-tree"

const Todo  = types.model({
    name: ""
, 
done: false
})

const User = types.model({
    name: ""
})

//Creating Model instances (tree nodes)

const jimmy = User.create()
const drinkWater = Todo.create()

console.log("Jimmy:", getSnapshot(jimmy))
console.log("Eat TODO:", getSnapshot(drinkWater))