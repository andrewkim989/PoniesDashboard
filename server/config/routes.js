var ponies = require("../controllers/ponies.js");

module.exports = function(app) {
    app.get("/", function(req, res) {
        ponies.home(req, res);
    });
    
    app.get("/ponies/new", function(req, res) {
        ponies.new(req, res);
    });
    
    app.get("/ponies/:id", function(req, res) {
        ponies.show(req, res);
    });
    
    app.post("/ponies", function(req, res) {
        ponies.createpony(req, res);
    });
    
    app.get("/ponies/edit/:id", function(req, res) {
        ponies.edit(req, res);
    });
    
    app.post("/ponies/:id", function(req, res) {
        ponies.updatepony(req, res);
    });
    
    app.post("/ponies/destroy/:id", function(req, res) {
        ponies.delete(req, res);
    })
}