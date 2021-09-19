import BookService from "./service";
import AuthorService from "../author/service";
import { Book } from "./types";

export default {
  Query: {
    books: () => {
      return BookService.getAllBooks();
    },
  },
  Book: {
    author: (parent: Book) => {
      return AuthorService.getAuthorById(parent.authorId);
    },
  },
};
