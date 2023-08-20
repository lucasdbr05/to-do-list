const express = require("express");
const app = express();
const PORT = 3000;

//const path = require("path");
const method_override = require("method-override")



const checklist_router = require("./src/routes/checklist");
const task_router= require("./src/routes/tasks")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(method_override("_method", {methods:['POST', 'GET']}))


app.use('/',checklist_router);
app.use('/', task_router.checklist_task_router);
app.use('/task',task_router.task_router);


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})