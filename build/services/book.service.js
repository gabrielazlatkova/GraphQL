"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const pagination_service_1 = require("./pagination.service");
const book_schema_1 = require("../schema/book.schema");
class BookService {
    async getBooks(paginatedInput) {
        const userPaginationServices = new pagination_service_1.PaginationService({
            model: book_schema_1.BookModel,
            populate: 'user',
        });
        return userPaginationServices.getPaginatedItems(paginatedInput);
    }
    async getBook(_id) {
        return book_schema_1.BookModel.findById(_id).populate('user').lean();
    }
    async createBook(book, user) {
        const newBookByUser = { ...book, user };
        const bookCreated = await book_schema_1.BookModel.create(newBookByUser);
        return bookCreated.populate('user');
    }
    async deleteBook(_id) {
        return book_schema_1.BookModel.findByIdAndRemove(_id).populate('book');
    }
    async updateBooking(_id, book) {
        return book_schema_1.BookModel.findByIdAndUpdate(_id, book, { new: true }).populate('user');
    }
}
exports.BookService = BookService;
