const User = require("../models/user");
const Sequelize = require('sequelize')
const sequelize = require("../database");

//for database alteration...

exports.getUsers = (req, res, next) => {
    User.fetchAll(users => {
        res.json(products)
    })
}
exports.getAddUser = (req, res, next) => {
    res.render("user/edit-user", {
      pageTitle: "Add User",
      path: "/user/add-user",
      editing: false,
    });
  };


exports.postAddUser = async (req, res, next) => {
    try{
    const name = req.body.name
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const data = await User.create({name: name, email: email, phonenumber: phonenumber})
    res.status(201).json({newUserDetails: data})
    } catch(error){
        res.status(500).json({
            error: error
        })
    }
}