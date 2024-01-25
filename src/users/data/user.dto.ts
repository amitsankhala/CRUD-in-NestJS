/* eslint-disable prettier/prettier */

import { IsInt, IsString } from "class-validator";


export class User{
    
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsInt()
    age : number;

    @IsInt()
    Mobile: number;
}