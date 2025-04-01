const express = require('express');
const router = express.Router();
const {deleteContact} = require('../controller/contactsController'); 


router.route('/').delete(deleteContact);

module.exports= router;