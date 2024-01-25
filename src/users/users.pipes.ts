import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import {plainToInstance } from "class-transformer";
import { User } from "./data/user.dto";
import { validate } from "class-validator";

export class UserPipe implements PipeTransform{
    async transform(value: any, metadata: ArgumentMetadata) {
        const userClass= plainToInstance(User ,value);
        const errors=await validate(userClass);
        if(errors.length>0)
        throw new BadRequestException('Validation failed'+ " "+ JSON.stringify(errors));
        return value; 
    }
    
}