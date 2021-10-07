const bcrypt = require("bcrypt");
const Router = require("express").Router();
//const UserModel = require("../schema/user")
const OrderModel = require("../schemas/orders")
const AuthMiddleware = require("../middleware/userAuth")
const AdminMiddleWare = require('../middleware/adminAuth')
var express = require('express');
var router = express.Router();

//add authMiddleWare and AdminMiddleWare
router.patch("/:id", AuthMiddleware , AdminMiddleWare, async (req, res) => {//admin processes order
    try {
        const payload = req.user;
        var id = req.params.id;
        console.log(payload)

        var myquery = {_id  : ObjectId(id)};
        var newvalues = { $set: {isDelivered: true} };
        const order = await OrderModel.updateOne(myquery, newvalues)
        await order.save()
        const result = {"status":"success","message": "order modified successfully"}
        res.json(result)
        console.log("order...",result)

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: "server error occured" })
    }
});

//add authMiddleWare and AdminMiddleWare
router.delete("/:id",AuthMiddleware , AdminMiddleWare, async (req, res) => {//admin processes order
    try {
        const payload = req.user;
        var id = req.params.id;
        console.log(payload)

        var myquery = {_id  : ObjectId(id)};
        const order = await OrderModel.deleteOne(myquery)
        await order.save()
        const result = {"status":"success","message": "order deleted successfully"}
        res.json(result)
        console.log("order...",result)

    }
    catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: "server error occured" })
    }
});



module.exports = Router;
