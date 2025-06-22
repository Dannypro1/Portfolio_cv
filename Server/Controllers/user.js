//import prisma client form generetad folder instead of node modules 
const { PrismaClient } =require( '../prisma/generated/prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jwt-auth');


//POST METHOD
exports.createUser = async (req,res)=>{
    const{ name,Email,Password} = req.body;
    // basic Validation
    if (!name || !Email || !Password) {
        return res.status(400).json({error:"fill all fields required"})
    }
    try{ 
        //check if the email already exist
        const existingEmail = await prisma.User.findUnique({ where : {Email}});
        if (existingEmail){
            return res.status(409).json({error:"Email already exist"});
        }
        const HashedPassword = await bcrypt.hash(Password,10);

        const NewUser = await  prisma.User.create({
            data:{
                name,
                Email,
                Password: HashedPassword
            }
        });
        const {Password:_,...UserData}=NewUser;
        res.status(201).json({message:"user created",user:UserData});

    }
    catch(error){
        res.status(500).json({error:"server error",detail:error.message});
    }
};

//GET METHOD
exports.getUser = async (req,res) =>{
    try{
        const users = await prisma.user.findMany();
        if (users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error:"server error",detail:error.message});
    }
};

//DELETE METHOD
exports.DeleteUser = async (req,res) =>{
    const{Id} = req.params;
    console.log(Id);
    try{
        const users = await prisma.user.findUnique({ where: { Id: Number(Id) } });
        if (!users){
            return res.status(404).json({message:"No user with this id"});
        }
        await prisma.user.delete({ where: { Id: Number(Id) } });
        return res.status(201).json({message:"user deleted successfuly"});

    }catch(error){
        return res.status(404).json({message:"error accured"});
    }
};

//PUT METHOD
exports.EditUser = async (req,res)=>{
    const {Id}=req.params;
    const {name,Email} = req.body;
    console.log(name);
    try{
        const User = await prisma.user.findUnique({where: { Id: Number(Id)}});
        if(!User){
            return res.status(404).json({message:"user not found"});
        }
        const newupdates = await prisma.user.update({
            where: {Id: Number(Id)},
            data:{
                name:name,
                Email:Email,
            }});
        return res.status(201).json({message:"Edited",user:newupdates});

    }catch(error){
        return res.status(404).json({error:"error",detail:error.message});
    }
};

//auth user
