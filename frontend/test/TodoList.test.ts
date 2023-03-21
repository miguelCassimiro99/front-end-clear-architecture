import TodoList from '../src/entities/TodoList';


test("Must create a ToDo list with 3 items", function () {
  const todoList = new TodoList();
  todoList.addItem("a")
  todoList.addItem("b")
  todoList.addItem("c")
  expect(todoList.getCompleted()).toBe(0);
})

test("Must create a ToDo list with 3 items and 2 with done", function () {
  const todoList = new TodoList();
  todoList.addItem("a")
  todoList.addItem("b")
  todoList.addItem("c")

  const a = todoList.getItem("a");
  const b = todoList.getItem("b");

  if (a) todoList.toggleDone(a)
  if (b) todoList.toggleDone(b)

  expect(todoList.getCompleted()).toBe(67);
})

test("Must create a ToDo list with 3 items and delete one", function () {
  const todoList = new TodoList();
  todoList.addItem("a")
  todoList.addItem("b")
  todoList.addItem("c")

  const b = todoList.getItem("b");
  if (b) todoList.removeItem(b);

  expect(todoList.items).toHaveLength(2);
})