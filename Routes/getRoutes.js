const express = require('express');
const router =  express.Router();
const {getContacts} = require("../controller/contactsController");


router.route('/:bg').get(getContacts);

module.exports = router;
