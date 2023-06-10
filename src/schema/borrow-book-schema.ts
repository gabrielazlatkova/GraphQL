import { prop as Prop, Ref, getModelForClass } from "@typegoose/typegoose";
import { Field, InputType, ObjectType } from "type-graphql";
import { Book } from "./book.schema";
import { Types } from "mongoose";
import { User } from "./user.schema";
import { IsDate, IsNotEmpty } from "class-validator";
import PaginatedResponse from "./pagination.schema";
import { ObjectIdScalar } from "../object-id.scalar";

@ObjectType()
export class BorrowBook {
  @Field(() => ObjectIdScalar)
  readonly _id: Types.ObjectId

  @Field(() => [Book])
  @Prop({ ref: Book, required: true })
  bookId: Ref<Book, Types.ObjectId>[];

  @Field(() => [User])
  @Prop({ ref: User, required: true })
  borrowedByUser: Ref<User, Types.ObjectId>[];


  @Field(() => Date)
  @Prop({ required: true })
  borrowDate: Date;

  @Field(() => Date)
  @Prop({ nullable: true })
  returnDate?: Date;

  
}

export const BorrowBookModel = getModelForClass(BorrowBook, {
  schemaOptions: { timestamps: true },
});

@InputType({ description: "Borrow book" })
export class BorrowBookInput {
  
  @Field(() => [ObjectIdScalar])
  bookId: Ref<Book, Types.ObjectId>[];

    
  @Field(() => [ObjectIdScalar])
  borrowedByUser: Ref<User, Types.ObjectId>[];
  @Field()
  @IsDate()
  borrowDate: Date;

  @Field({ nullable: true })
  @IsDate()
  returnDate?: Date;
}

@ObjectType()
export class PaginatedBorrowBookResponse extends PaginatedResponse(BorrowBook) {}
