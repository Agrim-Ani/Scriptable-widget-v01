const express = require('express');
const router = express.Router();
const Task = require('../models/taskSchema')

router.post('/items', async(req,res)=>{
    try {
        const {task} = req.body;
        if (!task.length) {
        return res.status(400).json({ error: 'Task is required' });
        }
        const newTask = new Task({task});
        await newTask.save();
        res.json(newTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/items', async(req,res)=>{
    try {
        const getTask = await Task.find({}).sort({ createdAt: 'desc'}).exec();
        if(getTask.length>=2){
            const recent_task_id = getTask[0]._id;
            await Task.deleteMany({_id: {$ne:recent_task_id}});
            console.log(recent_task_id);
        }
        res.status(200).json(getTask[0].task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
})
module.exports = router;