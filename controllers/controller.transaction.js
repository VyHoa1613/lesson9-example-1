var db = require("../db");
var shortid = require('shortid')

module.exports.indexTransaction = (req, res) =>{
    res.render("transaction/borrow",{
        borrows:db.get("transaction").value()
    })
}

module.exports.getCreateTransaction = (req, res)=> {
    res.render("transaction/create",{
        users:db.get("users").value(),
        books:db.get("books").value()
    });
    
}

module.exports.postCreateTransaction = (req, res)=> {
    req.body.id = shortid.generate();
    db.get("transaction").push(req.body).write();
    res.redirect("/transaction");
}