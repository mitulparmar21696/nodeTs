import {Request, Response, NextFunction} from "express";
import { Controller } from "../controllers/Controller";

export class Routes { 
    
    public Controller: Controller = new Controller() 
    
    public routes(app): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send("Working fine")
        })


    }
}