import {
    Resolver,
    Query,
    Arg,
    Args,
    Mutation,
    Authorized
  } from "type-graphql";
  import { PaginationInput } from "../schema/pagination.schema";
  import { UserRole } from "../enums/user-role";
import { BorrowBookService } from "../services/borrow-book-service";
import { BorrowBook, BorrowBookInput, PaginatedBorrowBookResponse } from "../schema/borrow-book-schema";

  
  @Resolver()
  export class BorrowBookResolver {
    constructor(private borrowBookService: BorrowBookService) {
      this.borrowBookService = new BorrowBookService();
    }
  
    @Query(() => PaginatedBorrowBookResponse)
    async borrows(
      @Args() paginatedInput: PaginationInput): Promise<PaginatedBorrowBookResponse> {
      return this.borrowBookService.getAll(paginatedInput);
    }
  
    @Authorized([UserRole.ADMIN,UserRole.LIBRERIAN])
    @Query(() => BorrowBook)
    async borrow(@Arg("_id") _id: string): Promise<BorrowBook> {
      return this.borrowBookService.getBorrow(_id);
    }
  
    @Authorized([UserRole.LIBRERIAN])
    @Mutation(() => BorrowBook)
    async createNewBorrow(
    @Arg("input") input: BorrowBookInput): Promise<BorrowBook> {
        // const bookId = await BookModel.findOne({book_id});
        // const userId = await UserModel.findOne({user_id})
      return this.borrowBookService.createBorrow(input);
    }
  
    @Authorized([UserRole.LIBRERIAN])
    @Mutation(() => BorrowBook)
    async updateBorrow(
      @Arg("_id") _id: string,
      @Arg("input") input: BorrowBookInput
    ): Promise<BorrowBook> {
      return this.borrowBookService.updateBorrow(_id, input);
    }
  
    @Authorized([UserRole.LIBRERIAN])
    @Mutation(() => BorrowBook)
    async delete(@Arg("_id") _id: string): Promise<BorrowBook> {
      return this.borrowBookService.delete(_id);
    }
  }
  