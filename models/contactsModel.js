const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Your email"],
      unique: [true, "Email already exists"],
    },
    phone: {
      type: String,
      required: [true, "Please Enter Your phone number"],
      unique: [true, "Phone number already exists"],
    },
    bloodgroup: {
      type: String,
      required: [true, "Please Enter Your blood group"],
    },
  },
  {
    timestamps: true,
  }
);
const contact = mongoose.model('Contacts', contactSchema);

module.exports = contact;