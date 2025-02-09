const Contact = require('../models/Contact')


const create = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body

        const contact = new Contact({
            name,
            email,
            phone,
            city
        })
        await contact.save()
        res.status(204).json(contact);

    }catch(error){
        console.log(error)
        res.status(404).json({message:"not created"})
    }
}


const getContacts = async(req,res)=>{
    try{
        const contacts = await Contact.find()
        res.status(200).json(contacts)
    }catch(error){
        console.log(error)
        res.status(500).json({message:"server error"})
    }
}

const update = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const update = await Contact.findByIdAndUpdate(req.params.id,{name,email,phone,city})
        res.status(204).json(update);

    }catch(error){
        console.log(error)
        res.status(404).json({message:"not created"})
    }
}



const del = async(req,res)=>{
    try{
        const delet = await Contact.findByIdAndDelete(req.params.id)
        
        res.status(200).send()

    }catch(error){
        console.log(error)
        res.status(404).json({message:"not created"})
    }
}

module.exports = {create,getContacts,update,del}