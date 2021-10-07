const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const UserSchema = new Schema({
   // _id : Object,
    email : String,
    orderPlacedOn : String, //date
    isDelivered : String,
    orderDeliveredOn : String, //date
})
// (Name, Schema, DB Collection)
const UserModel = model("user", UserSchema, "user");

module.exports = UserModel