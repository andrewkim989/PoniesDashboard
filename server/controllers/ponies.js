const mongoose = require("mongoose");
var Pony = mongoose.model("Pony");

module.exports = {
    home: function(req, res) {
        Pony.find({}, function(err, ponies) {
            if (err) {
                console.log("Error. Data not found");
            }
            else {
                res.render("home", {ponies: ponies.reverse()});
            }
        })
    },

    new: function(req, res) {
        res.render("new");
    },

    show: function(req, res) {
        Pony.findOne({_id: req.params.id}, function(err, pony) {
            if (err) {
                console.log("Error. Data not found");
            }
            else {
                res.render("show", {pony: pony});
            }
        })
    },

    createpony: function(req, res) {
        var pony = new Pony({name: req.body.name, type: req.body.type,
            image: req.body.image, likes: req.body.likes});
        pony.save(function(err) {
            if(err) {
                for(var key in err.errors){
                    req.flash("pony", err.errors[key].message);
                }
                res.redirect("/ponies/new");
            }
            else {
                res.redirect("/");
            }
        })
    },

    edit: function(req, res) {
        Pony.findOne({_id: req.params.id}, function(err, pony) {
            if (err) {
                console.log("Error. Data not found");
            }
            else {
                res.render("edit", {pony: pony});
            }
        })
    },

    updatepony: function(req, res) {
        Pony.findOne({_id: req.params.id}, function(err, pony) {
            if (err) {
                console.log("Error. Data not found");
            }
            else {
                pony.name = req.body.name;
                pony.type = req.body.type;
                pony.image = req.body.image;
                pony.likes = req.body.likes;
                pony.updatedAt = Date();
    
                pony.save(function(err) {
                    if(err) {
                        for(var key in err.errors){
                            req.flash("pony", err.errors[key].message);
                        }
                        res.redirect("/ponies/edit/" + req.params.id);
                    }
                    else {
                        res.redirect("/ponies/" + req.params.id);
                    }
                })
            }
        })
    },

    delete: function (req, res) {
        Pony.deleteOne({_id: req.params.id}, function (err) {
            res.redirect("/");
        })
    }
}