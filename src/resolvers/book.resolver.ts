import {
  Resolver,
  Query,
  Arg,
  Args,
  Mutation,
  Authorized,
  Ctx,
} from "type-graphql";
import { PaginationInput } from "../schema/pagination.schema";
import { UserRole } from "../enums/user-role";
import { BookService } from "../services/book.service";
import {
  Book,
  CreateBookInput,
  PaginatedBookResponse,
} from "../schema/book.schema";
import { Context } from "../types/context";

@Resolver()
export class BookResolver {
  constructor(private bookService: BookService) {
    this.bookService = new BookService();
  }

  @Query(() => PaginatedBookResponse)
  async books(
    @Args() paginatedInput: PaginationInput
  ): Promise<PaginatedBookResponse> {
    return this.bookService.getBooks(paginatedInput);
  }

  @Query(() => Book)
  async book(@Arg("_id") _id: string): Promise<Book> {
    return this.bookService.getBook(_id);
  }

  @Authorized([UserRole.ADMIN, UserRole.LIBRERIAN])
  @Mutation(() => Book)
  async createBook(
    @Ctx() { user }: Context,
    @Arg("book") book: CreateBookInput
  ): Promise<Book> {
    return this.bookService.createBook(book, user._id);
  }

  @Mutation(() => Book)
  async updateBook(
    @Arg("_id") _id: string,
    @Arg("book") book: CreateBookInput
  ): Promise<Book> {
    return this.bookService.updateBooking(_id, book);
  }

  @Authorized([UserRole.ADMIN, UserRole.LIBRERIAN])
  @Mutation(() => Book)
  async deleteBook(@Arg("_id") _id: string): Promise<Book> {
    return this.bookService.deleteBook(_id);
  }

  
}
