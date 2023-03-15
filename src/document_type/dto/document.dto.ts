import { IsNotEmpty, IsString } from "class-validator";

export class DocumentDTO{

    @IsNotEmpty()
    @IsString()
    name!:string
}