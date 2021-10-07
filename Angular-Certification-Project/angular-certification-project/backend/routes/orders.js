const bcrypt = require("bcrypt");
const Router = require("express").Router();
//const UserModel = require("../schema/user")
const OrderModel = require("../schemas/orders")
const AuthMiddleware = require("../middleware/userAuth")
var express = require('express');
var router = express.Router();


//AuthMiddleware
Router.get("/",AuthMiddleware, async (req, res) => {//get order
    try {

        const payload = req.user;

        const user = await UserModel.findById(payload.id)
        if(user.admin){//if admin

            console.log(payload)
            const order = await OrderModel.find()
            res.json(order)
            console.log("admin order...",order)

        }
        else //if not admin
        {
            console.log("testing get order....")
            var query = { user : ObjectID(payload.id) }
            const order = await OrderModel.find(query)//finds users where
            res.json(order)
            console.log("regular order...",order)
        }
   
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: "server error occured" })
    }
});


// //add authMiddleWare and AdminMiddleWare
// router.patch("/:id", async (req, res) => {//admin processes order
//     try {
//         const payload = req.user;
//         var id = req.params.id;
//         console.log(payload)

//         var myquery = {_id  : ObjectId(id)};
//         var newvalues = { $set: {isDelivered: true} };
//         const order = await OrderModel.updateOne(myquery, newvalues)
//         await order.save()
//         const result = {"status":"success","message": "order modified successfully"}
//         res.json(result)
//         console.log("order...",result)

//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ status: "error", message: "server error occured" })
//     }
// });

// //add authMiddleWare and AdminMiddleWare
// router.delete("/:id", async (req, res) => {//admin processes order
//     try {
//         const payload = req.user;
//         var id = req.params.id;
//         console.log(payload)

//         var myquery = {_id  : ObjectId(id)};
//         const order = await OrderModel.deleteOne(myquery)
//         await order.save()
//         const result = {"status":"success","message": "order deleted successfully"}
//         res.json(result)
//         console.log("order...",result)

//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ status: "error", message: "server error occured" })
//     }
// });


// Router.post("/api/v1/guest/checkout", async (req, res) => {
//     try {
//         // const payload = req.user;
//         const { body } = req
//         const { user, cart } = body
  
//         //auto-generate a userID   

//         const checkOut = await OrderModel.insertOne({cart: cart}) // {}
//         res.json(checkOut)
//         console.log("checkout...",checkOut)
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ status: "error", message: "server error occured" })
//     }
// });

//AuthMiddleware
// Router.post("/api/v1/checkout", async (req, res) => {
//     try {
//         // const payload = req.user;
//         const { body } = req
//         const { cart } = body

//         const checkOut = await OrderModel.insertOne({cart: cart}) // {}
//         res.json(checkOut)
//         console.log("checkout...",checkOut)
//     }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({ status: "error", message: "server error occured" })
//     }
// });

module.exports = Router;
