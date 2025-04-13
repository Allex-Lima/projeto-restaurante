import { BadRequestException, Injectable } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class IdCheckMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
    const cod = (isNaN(Number(req.params.codigo))) || (Number(req.params.codigo)) <= 0;

    if (cod) {
        throw new BadRequestException(`ID (${req.params.codigo}) INVÁLIDO.`);
    }
    next()
   }
}