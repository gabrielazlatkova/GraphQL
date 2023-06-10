import { ObjectId } from "mongodb";
import {
  ArgsType,
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from "type-graphql";
import { getModelForClass, prop as Prop } from "@typegoose/typegoose";
import { UserRole } from "../enums/user-role";
import { ObjectIdScalar } from "../object-id.scalar";
import { IsEmail, MinLength, MaxLength } from "class-validator";
import PaginatedResponse from "./pagination.schema";
import { Types } from "mongoose";

registerEnumType(UserRole, {
  name: "UserRole",
});
@ObjectType()
export class User {
  @Field(() => ObjectIdScalar)
  readonly _id: Types.ObjectId

  @Prop({ required: true })
  @Field()

  firstName: string;

  @Prop({ required: true })
  @Field()
  lastName: string;


  @Prop({ required: true, unique: true })
  @Field()
  
  email: string;

  
  @Prop({ required: true })
  @Field()
 
  password: string;


  @Prop({ nullable: true })
  @Field()
  
  tel?: number;


  @Prop({nullable:true})
  @Field()
  address?: string;

  @Prop({ type: [String], enum: UserRole, default: [UserRole.READER] })
  @Field(() => [UserRole])
  roles: UserRole[];
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
});

@InputType()
export class BaseUserInput {
  @Field()
  @MaxLength(30)
  firstName: string;

  @Field()
  @MaxLength(30)
  lastName: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field({ nullable: true })
  tel?: number;

  @Field({ nullable: true })
  address?: string;


}
@InputType()
export class CreateUserInput extends BaseUserInput {
  @Field()
  @IsEmail()
  email: string;
}

@ObjectType()
export class PaginatedUserResponse extends PaginatedResponse(User) {}

@ArgsType()
export class UserLoginArgs {
  @Field()
  @IsEmail()
  email: string;
  
  @MinLength(6)
  @Field()
  password: string;
}
