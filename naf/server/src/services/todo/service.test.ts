import TodoService from "./service";


describe("Todo Service should work", () => {
  it("should return a list of Todos", () => {
    expect(TodoService.getAllTodos()).toStrictEqual([
        { 
          task:"Do your homework!", 
          completed: false,
          message: { 
            body: "Son do your homework first!", 
            sender: "Father"
          }
        }
      ])
  })
})
