const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  qualification: String,
  designation: String,
  about:String,
  email: {
    type: String,
    required: true,
  },
  mobileno: Number,

  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const maintable = new mongoose.model("maintable", userSchema);


module.exports = maintable;
