import { Todo } from "./types";

export default { 
  getAllTodos: (): Todo[] => {
      return [
        { 
          task:"Do your homework!", 
          completed: false,
          message: { 
            body: "Son do your homework first!", 
            sender: "Father"
          }
        }
      ]
  }
}
