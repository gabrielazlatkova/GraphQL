"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const pagination_schema_1 = require("../schema/pagination.schema");
const user_role_1 = require("../enums/user-role");
const book_service_1 = require("../services/book.service");
const book_schema_1 = require("../schema/book.schema");
let BookResolver = class BookResolver {
    constructor(bookService) {
        this.bookService = bookService;
        this.bookService = new book_service_1.BookService();
    }
    async books(paginatedInput) {
        return this.bookService.getBooks(paginatedInput);
    }
    async book(_id) {
        return this.bookService.getBook(_id);
    }
    async createBook({ user }, book) {
        return this.bookService.createBook(book, user._id);
    }
    async updateBook(_id, book) {
        return this.bookService.updateBooking(_id, book);
    }
    async deleteBook(_id) {
        return this.bookService.deleteBook(_id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => book_schema_1.PaginatedBookResponse),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_schema_1.PaginationInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    (0, type_graphql_1.Query)(() => book_schema_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.ADMIN, user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Mutation)(() => book_schema_1.Book),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("book")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, book_schema_1.CreateBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => book_schema_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("book")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, book_schema_1.CreateBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "updateBook", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.ADMIN, user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Mutation)(() => book_schema_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookResolver);
exports.BookResolver = BookResolver;
