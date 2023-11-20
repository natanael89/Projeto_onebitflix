import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/environment'


export const jwtService = {
    // Receber Token
    signtToken: (payload: string | object | Buffer, expiration: string) => {
        return jwt.sign(payload, JWT_KEY, {
            expiresIn: expiration
        })
    },

    // Verificar Token
    verifyToken: (token: string, callbackfn: jwt.VerifyCallback)=>{
        jwt.verify(token, JWT_KEY, callbackfn)
    }
}