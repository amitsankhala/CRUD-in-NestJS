import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService{
    addbook(): string{
        return "This is adding the book";
    }
    getbook(): string {
        return "this will give all book info";
    }
    updatebook(): string {
        return "this will update book info";
    }
    deletebook(): string {
        return "this will delete book info";
    }
}