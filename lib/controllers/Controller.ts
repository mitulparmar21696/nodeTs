import * as mongoose from 'mongoose';
import { MySchema } from '../models/Model';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', MySchema);

export class Controller{

}