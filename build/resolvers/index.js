"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const book_resolver_1 = require("./book.resolver");
const borrow_book_resolver_1 = require("./borrow.book.resolver");
const user_resolver_1 = require("./user.resolver");
// import { BookingResolver } from './booking.resolver'
exports.resolvers = [
    user_resolver_1.UserResolver,
    book_resolver_1.BookResolver,
    borrow_book_resolver_1.BorrowBookResolver
];
