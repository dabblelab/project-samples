const authors = [
  {
    name: "Mabroor Ahmad",
    id: 1,
  },
  {
    name: "Jhon Wick",
    id: 2,
  },
  {
    name: "Stan Lee",
    id: 3,
  },
];

export default {
  getAllAuthors: () => authors,
  getAuthorById: (id: number) => {
    for (let author of authors) {
      if (author.id === id) {
        return author;
      }
    }
  },
};
