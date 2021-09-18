import TodoService from "./service"

export default {
  Query: {
    todos: () => TodoService.getAllTodos()
  }
}
