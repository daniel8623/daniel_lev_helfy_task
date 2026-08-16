const express = require('express');
const router = express.Router();
const { validateTask } = require('../middleware/validate');

let tasks = [];

router.get('/', (req,res) => {
    res.json(tasks);
})

router.post('/', validateTask, (req,res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description || '',
        priority: req.body.priority || 'low',
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.put('/:id', validateTask, (req, res) => {
    const idToUpdate = Number(req.params.id);
    const task = tasks.find(t => t.id === idToUpdate);

    if (!task){
        return res.status(404).json({ message: "Task doesn't exist"});
    }

    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.priority = req.body.priority || task.priority;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
});

router.delete('/:id', (req, res) => {
    const idToDelete = Number(req.params.id);
    tasks = tasks.filter(task => task.id !== idToDelete);
    res.json({ message: "Task deleted"});
})

router.patch('/:id/toggle', (req, res) => {
    const idToToggle = Number(req.params.id);
    const task = tasks.find(t => t.id === idToToggle);

    if (!task) {
        return res.status(404).json({ message: "Task doesn't exist" });
    }
    
    task.completed = !task.completed;
    res.json(task);
});

module.exports = router;