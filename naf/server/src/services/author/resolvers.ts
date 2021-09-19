import AuthorService from "./service";
import BookService from "../book/service";
import { Author } from "./types";

export default {
  Query: {
    authors: () => AuthorService.getAllAuthors(),
  },
  Author: {
    books: (parent: Author) => {
      return BookService.getBooksByAuthorId(parent.id);
    },
  },
};
