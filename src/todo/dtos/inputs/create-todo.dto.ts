import { Field, InputType } from "@nestjs/graphql"
import { IsNotEmpty, IsString, MaxLength } from "class-validator"

@InputType()
export class CreateTodoInput {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @Field(() => String, { description: 'The description of the todo' })
    description: string
/*     @Field(() => Boolean)
    done: boolean  */  
}