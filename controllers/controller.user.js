var db = require("../db");
var shortid = require('shortid')

module.exports.indexUser = (req, res) =>{
    res.render("users/user",{
        users:db.get("users").value()
    })
}

module.exports.getCreateUser = (req, res) => {
    res.render("users/create");
}

module.exports.postCreateUser =  (req, res) => {
    req.body.id = shortid.generate();
    db.get("users").push(req.body).write();
    res.redirect("/users");
}

module.exports.deleteUser = (req, res) =>{
    var id = req.params.id;
    db.get("users").remove({id:id}).write();
    res.redirect("back");
}

module.exports.getUpdateUser = (req, res) => {
    var id = req.params.id;
    var user =  db.get("users").find({id:id}).value();
    res.render("users/update", {
        user:user
    })
}

module.exports.postUpdateUser = (req, res) => {
    var id = req.body.id;
    db.get("users").find({id:id}).assign({name: req.body.name}).write();
    res.redirect("/users");
}