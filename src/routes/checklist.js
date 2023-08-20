const express = require("express")
const router = express.Router()

const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res)=>{
    try{
        let checklist = await prisma.checklist.findMany({});
        res.send(checklist);
    }catch(err){
        res.status(422).json(err);
    }
})
    
router.post("/", async (req, res)=>{
    let {name} = req.body;
    try{
        let checklist = await prisma.checklist.create({
            data:{
                name: name,
            },
        })
        res.status(200).send(checklist);
    }catch(err){
        res.status(422).send(err)
    }
})

router.get("/:id", async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    try{
        let checklist = await prisma.checklist.findUnique({
            where:{
                id: id
            },
            include:{
                Task:true,
            }
        })
        res.status(200).send(checklist);
    }catch(err){
        res.status(422).send(err)
    }
})

router.put("/:id", async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    let {name}= req.body
    try{
        let checklist = await prisma.checklist.update({
            where:{
                id: id
            },
            data:{
                name: name
            }
        })
        res.status(200).json(checklist);
    }catch(err){
        res.status(422).send(err)
    }
})

router.delete("/:id", async (req, res)=>{
    let id = req.params.id;
    id = parseInt(id);
    try{
        let tasks = await prisma.task.deleteMany({
            where:{
                listId: id
            }
        })

        let checklist = await prisma.checklist.delete({
            where:{
                id: id
            }
        })
        res.status(200).send([task,checklist]);
    }catch(err){
        res.status(422).send(err)
    }
})

module.exports = router;