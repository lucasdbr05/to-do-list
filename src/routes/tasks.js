const express = require("express")
const ct_router = express.Router()
const router = express.Router()



const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


ct_router.post('/:id/tasks', async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    let {mission, deadline} = req.body
    deadline = deadline!=null? new Date(deadline): null
    try{
        let task = await prisma.task.create({
            data:{
                mission: mission,
                deadline: deadline,
                listId: id,
                done:false,
            }
        })
        res.status(200).send(task);
    }catch(err){
        res.status(422).send(err)
    }
})


router.delete('/:id', async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    try{
        let task = await prisma.task.delete({
            where:{
                id: id
            }
        })

        res.status(200).send(task);
    }catch(err){
        res.status(422).send(err)
    }
})

router.put('/:id', async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    let {mission, deadline} = req.body;
    deadline = deadline!=null? new Date(deadline): null
    try{
        let =task = await prisma.task.findUnique({
            where:{
                id: id
            }
        })

        let updated_task = await prisma.task.update({
            where:{
                id: id
            },
            data:{
                mission:mission,
                deadline: deadline!=null? deadline: task.deadline
            }
        })

        res.status(200).json(updated_task);
    }catch(err){
        res.status(422).send(err)
    }
})


module.exports= {task_router:router, checklist_task_router:ct_router}