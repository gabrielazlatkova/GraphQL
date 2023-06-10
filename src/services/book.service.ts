import { PaginationInput } from '../schema/pagination.schema'
import { PaginationService } from './pagination.service'
import { CreateBookInput,BookModel  } from '../schema/book.schema'
import { Types } from 'mongoose'
import { AppError } from '../utils/error'

export class BookService {
  async getBooks(paginatedInput: PaginationInput) {
    const userPaginationServices =
        new PaginationService(
          {
            model: BookModel,
            populate: 'user',
          })
    return userPaginationServices.getPaginatedItems(paginatedInput)
  }
  async getBook(_id: string) {
    return BookModel.findById(_id).populate('user').lean()
  }
  async createBook(book: CreateBookInput,user: Types.ObjectId) {
    const newBookByUser={ ...book, user }
    const bookCreated = await BookModel.create(newBookByUser)
    return bookCreated.populate('user')
  }
  async deleteBook(_id: string) {
    return BookModel.findByIdAndRemove(_id).populate('user')
  }
  async updateBooking(_id: string, book: CreateBookInput) {
    return BookModel.findByIdAndUpdate(_id, book, { new: true }).populate('user')
  }

  
}