import { Todo } from "./types";

export default {
  getAllTodos: (): Todo[] => {
    return [
      {
        task: "Do your homework!",
        completed: false,
      },
    ];
  },
};
