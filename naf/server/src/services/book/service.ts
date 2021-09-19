import { Book } from "./types";

const books: Book[] = [
  {
    id: 1,
    title: "Romeo & Juliet",
    authorId: 1,
  },
  {
    id: 2,
    title: "Marvel Avengers",
    authorId: 3,
  },
];

export default {
  getAllBooks: () => {
    return books;
  },
  getBooksByAuthorId: (id: number) => {
    const output: any = [];
    for (let book of books) {
      if (book.authorId === id) {
        output.push(book);
      }
    }
    return output;
  },
};
