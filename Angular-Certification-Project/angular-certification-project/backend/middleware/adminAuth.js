const jwt = require("jsonwebtoken")
const SECRET_KEY = "lkhfhgdgj(*&(*$khdsd78fsadhfjkh34gh4g2&*(h4g2jh342gh3j4jg2jh4g2g4";
const UserModel = require("../schemas/users")

function AdminMiddleware(req, res, next) {
    try {
        const user =  UserModel.findById(req.user.id)//might need await
        if(user.admin)
            {   
                next()
            }
            else
                throw 401
    }
    catch (error) {
        res.status(401).json({ status: "error", message: "user not authorized,action only availableto admins" })
    }
}

module.exports = AdminMiddleware;