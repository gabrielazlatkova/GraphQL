import { BookResolver } from './book.resolver'
import { BorrowBookResolver } from './borrow.book.resolver'
import { UserResolver } from './user.resolver'
// import { BookingResolver } from './booking.resolver'
export const resolvers = [
  UserResolver,
  BookResolver,
  BorrowBookResolver
] as const