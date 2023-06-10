import { Request } from 'express'
import { User } from '../schema/user.schema'
import { Book } from '../schema/book.schema'
export interface Context {
    req: Request,
    user: User
    ip: any,
    // location: any,
    md: any,
}
