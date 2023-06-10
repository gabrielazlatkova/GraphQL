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
exports.BorrowBookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const pagination_schema_1 = require("../schema/pagination.schema");
const user_role_1 = require("../enums/user-role");
const borrow_book_service_1 = require("../services/borrow-book-service");
const borrow_book_schema_1 = require("../schema/borrow-book-schema");
let BorrowBookResolver = class BorrowBookResolver {
    constructor(borrowBookService) {
        this.borrowBookService = borrowBookService;
        this.borrowBookService = new borrow_book_service_1.BorrowBookService();
    }
    async borrows(paginatedInput) {
        return this.borrowBookService.getAll(paginatedInput);
    }
    async borrow(_id) {
        return this.borrowBookService.getBorrow(_id);
    }
    async createNewBorrow({ user, book }, input) {
        return this.borrowBookService.createBorrow(input, user._id, book._id);
    }
    async updateBorrow(_id, input) {
        return this.borrowBookService.updateBorrow(_id, input);
    }
    async deleteBook(_id) {
        return this.borrowBookService.delete(_id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => borrow_book_schema_1.PaginatedBorrowBookResponse),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_schema_1.PaginationInput]),
    __metadata("design:returntype", Promise)
], BorrowBookResolver.prototype, "borrows", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.ADMIN, user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Query)(() => borrow_book_schema_1.BorrowBook),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BorrowBookResolver.prototype, "borrow", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Mutation)(() => borrow_book_schema_1.BorrowBook),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, borrow_book_schema_1.BorrowBookInput]),
    __metadata("design:returntype", Promise)
], BorrowBookResolver.prototype, "createNewBorrow", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Mutation)(() => borrow_book_schema_1.BorrowBook),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, borrow_book_schema_1.BorrowBookInput]),
    __metadata("design:returntype", Promise)
], BorrowBookResolver.prototype, "updateBorrow", null);
__decorate([
    (0, type_graphql_1.Authorized)([user_role_1.UserRole.LIBRERIAN]),
    (0, type_graphql_1.Mutation)(() => borrow_book_schema_1.BorrowBook),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BorrowBookResolver.prototype, "deleteBook", null);
BorrowBookResolver = __decorate([
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [borrow_book_service_1.BorrowBookService])
], BorrowBookResolver);
exports.BorrowBookResolver = BorrowBookResolver;
