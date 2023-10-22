import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as BookModel } from 'src/graphql';

@Resolver((of) => Book)
export class BookResolver {
  @Query((returns) => [Book], { name: 'books' })
  getALlBooks() {
    const arr: BookModel[] = [
      {
        id: 1,
        title: 'Nest Doc',
        price: 500,
      },
      {
        id: 2,
        title: 'Next Doc',
        price: 450,
      },
      {
        id: 3,
        title: 'React Doc',
        price: 400,
      },
    ];
    return arr;
  }
}
