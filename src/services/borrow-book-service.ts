import { Types } from "mongoose"
import { BorrowBookInput, BorrowBookModel } from "../schema/borrow-book-schema"
import { PaginationInput } from "../schema/pagination.schema"
import { PaginationService } from "./pagination.service"
import { Book } from "../schema/book.schema"


export class BorrowBookService {
    async getAll(paginatedInput: PaginationInput) {
      const userPaginationServices =
          new PaginationService(
            {
              model: BorrowBookModel,
             
             
            })
      return userPaginationServices.getPaginatedItems(paginatedInput)
    }
    async getBorrow(_id: string) {
      return BorrowBookModel.findById(_id).lean()
    }

    async createBorrow(borrow: BorrowBookInput) {
      const borrowBook = { ...borrow}
    
      const bookBorrowed = await BorrowBookModel.create(borrowBook)
      return bookBorrowed
    }
    
    async updateBorrow(_id: string, booking: BorrowBookInput) {
      return BorrowBookModel.findByIdAndUpdate(_id, booking, { new: true })
    }


    async delete(_id: string) {
        return BorrowBookModel.findByIdAndRemove(_id)
      }
}