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
exports.PaginatedBookResponse = exports.CreateBookInput = exports.BookModel = exports.Book = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const class_validator_1 = require("class-validator");
const pagination_schema_1 = __importDefault(require("./pagination.schema"));
const user_schema_1 = require("./user.schema");
const mongoose_1 = require("mongoose");
const object_id_scalar_1 = require("../object-id.scalar");
let Book = class Book {
};
__decorate([
    (0, type_graphql_1.Field)(() => object_id_scalar_1.ObjectIdScalar),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], Book.prototype, "_id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Book.prototype, "isbn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Book.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Book.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Book.prototype, "numberOfCopies", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Date)
], Book.prototype, "dateAdded", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => user_schema_1.User),
    (0, typegoose_1.prop)({ ref: user_schema_1.User, required: true }),
    __metadata("design:type", Object)
], Book.prototype, "user", void 0);
Book = __decorate([
    (0, type_graphql_1.ObjectType)()
], Book);
exports.Book = Book;
exports.BookModel = (0, typegoose_1.getModelForClass)(Book, {
    schemaOptions: { timestamps: true },
});
let CreateBookInput = class CreateBookInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateBookInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(150),
    __metadata("design:type", String)
], CreateBookInput.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "isbn", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "numberOfCopies", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateBookInput.prototype, "genre", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(500, {
        message: "Description must not be more than 500 characters!",
    }),
    __metadata("design:type", String)
], CreateBookInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateBookInput.prototype, "price", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Date),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateBookInput.prototype, "dateAdded", void 0);
CreateBookInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateBookInput);
exports.CreateBookInput = CreateBookInput;
// @InputType({ description: "Update book" })
// export class UpdateBookInput {
//   @Field()
//   title: string;
//   @Field({ nullable: true })
//   author: string;
//   @Field({ nullable: true })
//   numberOfCopies: number;
//   @Field({ nullable: true })
//   genre: string;
//   @Field({ nullable: true })
//   description?: string;
//   @Field({ nullable: true })
//   price: number;
//   @Field({ nullable: true })
//   dateAdded: Date;
// }
// @InputType({ description: "Delete book" })
// export class DeleteBookInput {
//   @Field(() => ObjectIdScalar)
//   _id: Types.ObjectId;
// }
let PaginatedBookResponse = class PaginatedBookResponse extends (0, pagination_schema_1.default)(Book) {
};
PaginatedBookResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedBookResponse);
exports.PaginatedBookResponse = PaginatedBookResponse;
