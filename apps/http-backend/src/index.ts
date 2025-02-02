import express, { Request, Response } from "express";
import { prisma } from "@repo/db/client";
const app = express();

app.get("/", async(req : Request, res : Response)=>{
    try {
        await prisma.user.create({
            data : {
                name : "arsh",
                password : "1234"
            }
        })
        res.send("working");

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : "Internal server error.",
        })
    }
})

app.listen(4000, ()=>{
    console.log("listening to port 4000");
    
})