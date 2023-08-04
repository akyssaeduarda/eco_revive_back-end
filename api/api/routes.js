const express = require("express");
const userController = require("./controller/userController");
const companyController = require("./controller/companyController")
const discarddController = require("./controller/discarddController")
const authUserController = require("./controller/authUserController")


const router = express.Router();
router.post("/users", userController.addUser);
router.post("/company", companyController.addCompany)
router.post("/discardd", discarddController.addDiscardd)
router.post("/login", authUserController.loginUser)



module.exports = router;
