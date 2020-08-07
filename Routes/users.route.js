var express = require('express')
var router = express.Router()

var controller = require("../controllers/controller.user")

router.get("/",controller.indexUser)

router.get("/create",controller.getCreateUser)

router.post("/create", controller.postCreateUser)

router.get("/:id/delete",controller.deleteUser)

router.get("/:id/update",controller.getUpdateUser)

router.post("/update",controller.postUpdateUser)

module.exports = router;