import TodoGateway from './TodoGateway'
export default class TodoMemoryGateway implements TodoGateway {
  todos: any;

  constructor() {
    this.todos = [
      { id: Math.random().toString(36).slice(2,7), description: "Estudar Engenharia de Software", done: true},
      { id: Math.random().toString(36).slice(2,7), description: "Pagar contas", done: false},
      { id: Math.random().toString(36).slice(2,7), description: "Estudar Engenharia de Software", done: false}
    ]
  }
  async getTodos(): Promise<any> {
    return this.todos;
  }
  async addItem(item: any): Promise<any> {
    return this.todos.push(item)
  }
  async updateItem(item: any): Promise<any> {
    const todo = this.todos.find((todo: any) => todo.id === item.id);
    if (todo) return todo.done = item.done;

    return this.todos;
  }

  async removeItem(id: string): Promise<any> {
    const todo = this.todos.find((todo: any) => todo.id === id);
    if (todo) this.todos.splice(this.todos.indexOf(todo), 1);

    return this.todos;
  }
}