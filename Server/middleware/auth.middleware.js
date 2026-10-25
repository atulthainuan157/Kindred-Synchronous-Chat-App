import jwt from "jsonwebtoken"
import cookie from "cookie-parser"


export const verifyTokens = (request, response, next) => {
    console.log(request.cookie);
    const token = request.cookie.jwt;
    if(!token) {
        return response.status(401).send("You are not Authenticated");
    }
    jwt.verify(token, process.env.JWT_KEY, async(err, payload) => {
        if(err) {
            return response.status(403).send("Token is not valid");
        }
        request.userId = payload.userId;
        next();
    })
}