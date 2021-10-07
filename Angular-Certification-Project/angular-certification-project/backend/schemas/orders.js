const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const OrderSchema = new Schema({
   // _id : Object,
    user : String,
    orderPlacedOn : Date, //date
    isDelivered : Boolean,
    orderDeliveredOn : Date, //date
    cart : [{
            productId : String,
            quantity: Number
            }]
})
// (Name, Schema, DB Collection)
const OrderModel = model("orders", OrderSchema, "orders");

module.exports = OrderModel