const asynHandler = require('express-async-handler')

const Goal = require('../model/goalsModel')


// @desc, gets all goals (specifc user)
// @route Get/api/goals
// @access PRIVATE
const getGoals = asynHandler (async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// @desc, Set goals (specifc user)
// @route POST/api/goals
// @access PRIVATE
const setGoals = asynHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc, Update  goal(specifc user)
// @route Get/api/goals/:id
// @access PRIVATE
const updateGoals = asynHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not Found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})


    res.status(200).json(updatedGoal)
})

// @desc, gets all goals (specifc user)
// @route Get/api/goals
// @access PRIVATE
const deleteGoals = asynHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not Found')
    }
    await Goal.findByIdAndDelete(req.params.id)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}