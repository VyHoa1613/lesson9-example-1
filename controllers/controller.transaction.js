var db = require("../db");
var shortid = require('shortid')

module.exports.indexTransaction = (req, res) =>{
    var usersTran = db.get("transaction").value();
    var takeUser =usersTran.map(function(item){
        return{
            user: db.get("users").find({id:item.userId}).value().name,
            book: db.get("books").find({id:item.bookId}).value().title
        }
    })
    res.render("transaction/borrow",{
        borrows:takeUser
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