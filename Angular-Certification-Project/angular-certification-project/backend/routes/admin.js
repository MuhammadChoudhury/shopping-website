const multer = require("multer");
const fs = require("fs");
const path = require("path")
const bcrypt = require("bcrypt");
const Router = require("express").Router();
//const UserModel = require("../schema/user")
const OrderModel = require("../schemas/orders")
const AuthMiddleware = require("../middleware/userAuth")
var express = require('express');
var router = express.Router();


Router.post("/products", multer().any(), (req, res)=>{
    console.log(req.files[0], req.body);
    const file = req.files[0];
    const { name, description } = req.body
    const filePath = path.join("/images/products/", file.originalname )

    fs.writeFile(path.join("./public", filePath), file.buffer, (err)=>{
        /* 
        const product = new ProductModel({
            name,
            description,
            image : filePath
        })

        Angular code will use this path - http://localhost:3000/images/products/Screen%20Shot%202021-07-23%20at%2008.36.15%20AM.png

        */
        res.json({ status : "success" })
    })
})

module.exports = Router;