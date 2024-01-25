import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService){}

  @Get('/bookinfo')
  getbook(): string {
    return this.bookService.getbook();
  }
  @Get('/:id')
  getbookbyId(@Param("id",ParseIntPipe) id: number): string {
    console.log(id,typeof(id));
    return "book by id";
  }

  @Post('/add')
  addbook(): string {
    return this.bookService.addbook();
  }
  @Delete('/delete')
  deletebook(): string{
    return this.bookService.deletebook();
  }
  @Put('/update')
  updatebook(): string{
    return this.bookService.updatebook();
  }
}
