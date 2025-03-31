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
  res.status(201).send(contact);
});

module.exports = {
  getContacts,
  postContact,
};
