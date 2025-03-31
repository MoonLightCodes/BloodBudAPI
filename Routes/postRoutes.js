const express = require('express');
const router = express.Router();
const {postContact} = require("../controller/contactsController");

router.route('/').post(postContact);

module.exports = router;