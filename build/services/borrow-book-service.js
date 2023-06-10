"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBookService = void 0;
const borrow_book_schema_1 = require("../schema/borrow-book-schema");
const pagination_service_1 = require("./pagination.service");
class BorrowBookService {
    async getAll(paginatedInput) {
        const userPaginationServices = new pagination_service_1.PaginationService({
            model: borrow_book_schema_1.BorrowBookModel,
            populate: 'user, book',
        });
        return userPaginationServices.getPaginatedItems(paginatedInput);
    }
    async getBorrow(_id) {
        return borrow_book_schema_1.BorrowBookModel.findById(_id).populate('user').lean();
    }
    async createBorrow(borrow, user, book) {
        const borrowBook = { ...borrow, user, book };
        const bookBorrowed = await borrow_book_schema_1.BorrowBookModel.create(borrowBook);
        return bookBorrowed.populate('user, book');
    }
    async updateBorrow(_id, booking) {
        return borrow_book_schema_1.BorrowBookModel.findByIdAndUpdate(_id, booking, { new: true }).populate('user,book');
    }
    async delete(_id) {
        return borrow_book_schema_1.BorrowBookModel.findByIdAndRemove(_id).populate('user, book');
    }
}
exports.BorrowBookService = BorrowBookService;
