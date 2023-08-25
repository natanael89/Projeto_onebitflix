import jwt from 'jsonwebtoken'

const secret = 'chave-do-jwt'

export const jwtService = {
    // Receber Token
    signtToken: (payload: string | object | Buffer, expiration: string) => {
        return jwt.sign(payload, secret, {
            expiresIn: expiration
        })
    },

    // Verificar Token
    verifyToken: (token: string, callbackfn: jwt.VerifyCallback)=>{
        jwt.verify(token, secret, callbackfn)
    }
}