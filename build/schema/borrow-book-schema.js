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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedBorrowBookResponse = exports.BorrowBookInput = exports.BorrowBookModel = exports.BorrowBook = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const type_graphql_1 = require("type-graphql");
const book_schema_1 = require("./book.schema");
const mongoose_1 = require("mongoose");
const user_schema_1 = require("./user.schema");
const class_validator_1 = require("class-validator");
const pagination_schema_1 = __importDefault(require("./pagination.schema"));
const object_id_scalar_1 = require("../object-id.scalar");
let BorrowBook = class BorrowBook {
};
__decorate([
    (0, type_graphql_1.Field)(() => object_id_scalar_1.ObjectIdScalar),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], BorrowBook.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ ref: book_schema_1.Book, required: true }),
    __metadata("design:type", Object)
], BorrowBook.prototype, "bookId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Date)
], BorrowBook.prototype, "borrowDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)({ nullable: true }),
    __metadata("design:type", Date)
], BorrowBook.prototype, "returnDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ ref: user_schema_1.User, required: true }),
    __metadata("design:type", Object)
], BorrowBook.prototype, "borrowedByUser", void 0);
BorrowBook = __decorate([
    (0, type_graphql_1.ObjectType)()
], BorrowBook);
exports.BorrowBook = BorrowBook;
exports.BorrowBookModel = (0, typegoose_1.getModelForClass)(BorrowBook, {
    schemaOptions: { timestamps: true },
});
let BorrowBookInput = class BorrowBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], BorrowBookInput.prototype, "borrowDate", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], BorrowBookInput.prototype, "returnDate", void 0);
BorrowBookInput = __decorate([
    (0, type_graphql_1.InputType)({ description: "Borrow book" })
], BorrowBookInput);
exports.BorrowBookInput = BorrowBookInput;
let PaginatedBorrowBookResponse = class PaginatedBorrowBookResponse extends (0, pagination_schema_1.default)(BorrowBook) {
};
PaginatedBorrowBookResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedBorrowBookResponse);
exports.PaginatedBorrowBookResponse = PaginatedBorrowBookResponse;
