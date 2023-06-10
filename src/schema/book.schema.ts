import { Field, InputType, ObjectType } from "type-graphql";
import { prop as Prop, Ref, getModelForClass } from "@typegoose/typegoose";
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from "class-validator";
import PaginatedResponse from "./pagination.schema";
import { User } from "./user.schema";
import { ObjectId, Types } from "mongoose";
import { ObjectIdScalar } from "../object-id.scalar";

@ObjectType()
export class Book {
  @Field(() => ObjectIdScalar)
  readonly _id: Types.ObjectId;

  @Field()
  @Prop({ required: true, unique: true })
  title: string;

  @Field()
  @Prop({ required: true })
  isbn: number;

  @Field()
  @Prop({ required: true })
  author: string;

  @Field()
  @Prop({ required: true })
  genre: string;

  @Field({ nullable: true })
  @Prop()
  description?: string;

  @Field()
  @Prop({ required: true })
  price: number;

  @Field()
  @Prop({ required: true })
  numberOfCopies: number;

  @Field(() => Date)
  @Prop({ required: true })
  dateAdded: Date;

  @Field(() => User)
  @Prop({ ref: User, required: true })
  user: Ref<User, Types.ObjectId>;
}

export const BookModel = getModelForClass(Book, {
  schemaOptions: { timestamps: true },
});

@InputType()
export class CreateBookInput {
  @Field()
  @IsString()
  @MaxLength(100)
  title: string;

  @Field()
  @IsString()
  @MaxLength(150)
  author: string;

  @Field()
  @IsNotEmpty()
  @IsPositive()
  isbn: number;

  @Field()
  @IsInt()
  @IsPositive()
  numberOfCopies: number;

  @Field()
  @IsString()
  @MaxLength(100)
  genre: string;

  @Field({ nullable: true })
  @MaxLength(500, {
    message: "Description must not be more than 500 characters!",
  })
  description?: string;

  @Field()
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @Field(() => Date)
  @IsDate()
  @IsNotEmpty()
  dateAdded: Date;
}


@ObjectType()
export class PaginatedBookResponse extends PaginatedResponse(Book) {}
