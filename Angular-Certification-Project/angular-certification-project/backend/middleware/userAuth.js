const jwt = require("jsonwebtoken")
const SECRET_KEY = "lkhfhgdgj(*&(*$khdsd78fsadhfjkh34gh4g2&*(h4g2jh342gh3j4jg2jh4g2g4";

function AuthMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;
        const payload = jwt.verify(authorization, SECRET_KEY);
        if(payload)
            {   
                req.user = payload
                next()
            }
    }
    catch (error) {
        res.status(401).json({ status: "error", message: "user not authorized." })
    }
}

module.exports = AuthMiddleware;