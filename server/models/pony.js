var mongoose = require("mongoose");

var PoniesSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name cannot be blank"], 
    minlength: [2, "Name must be at least 2 characters long"]},

    type: {type: String, required: [true, "Type cannot be blank"],
    minlength: [2, "Type must be at least 2 characters long"]},

    image: {type: String},
    likes: {type: String}
}, {timestamps: true });

mongoose.model("Pony", PoniesSchema);