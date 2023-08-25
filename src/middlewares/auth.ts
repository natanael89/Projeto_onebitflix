import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtServece";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";

export interface AuthenticatedRequest extends Request {
    user?: UserInstance | null
}

export function ensureAuth(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const authorizationHeader = req.headers.authorization

    if(!authorizationHeader) return res.status(401).json({
        message: 'Não autorizado: nenhum token foi encontrado.'
    })

    const token = authorizationHeader.replace(/Bearer /, '')

    jwtService.verifyToken(token, (err, decoded)=>{
        if(err || typeof decoded === 'undefined') return res.json({
            message: 'Não autorizado: token inválido.'
        })

    const user = userService.findByEmail((decoded as JwtPayload).email).then(user => {
            req.user = user
            next()
        })
    })
}

export function ensureAuthViaQuery(req: AuthenticatedRequest, res: Response, next: NextFunction){
    const {token} = req.query

    if(!token){ return res.status(401).json({
        message: 'Não autorizado: nenhum token foi encontrado.'
    })}

    if (typeof token !== 'string'){ return res.status(400).json({
        message: 'O parâmetro token deve ser do tipo string.'
    })}

    jwtService.verifyToken(token, async (err, decoded)=>{
        if(err || typeof decoded === 'undefined') {return res.status(401).json({
            message: 'Não autorizado: token inválido.'
        })}

        userService.findByEmail((decoded as JwtPayload).email).then(user =>{
            req.user = user
            next()
        })
    })
}