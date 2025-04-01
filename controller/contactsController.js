const asyncHandler = require("express-async-handler");
const contacts = require("../models/contactsModel");

//@Discription Get the relavent contacts
//@Path /get
//@Method GET
//@Access Public
const getContacts = asyncHandler(async (req, res) => {
  const bloodgroup = req.params.bg;
  if (!bloodgroup) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const contact = await contacts.find({ bloodgroup: bloodgroup });
  if (!contact) {
    res.status(404);
    throw new Error("No contact found with this blood group");
  }
  res.status(200).send(contact);
});

//@Discription Post the new contact
//@Path /post
//@Method POST
//@Access Public
const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone, bloodgroup } = req.body;
  if (!name || !email || !phone || !bloodgroup) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  const contact = await contacts.create({
    name,
    email,
    phone,
    bloodgroup,
  });
  res.status(201).json({message:"Successfully updated!"});
});

//@Discription Delete the contact
//@Path /delete
//@Method DELETE
//@Access Public
const deleteContact= asyncHandler(async (req,res)=>{
  const {email} = req.body;
  if(!email){
    res.status(400);
    throw new Error('All Feilds Are Mandatory');
  }
  const contact = await contacts.findOne({email:email});
  if(!contact){
    res.status(400);
    throw new Error("No Contact Exist On this EMAIL!")
  }
  await contacts.deleteOne({email});
  res.status(200).json({message:"Deleted Sucessfully!"})
});

module.exports = {
  getContacts,
  postContact,
  deleteContact,
};
