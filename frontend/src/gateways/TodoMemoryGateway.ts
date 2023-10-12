import TodoGateway from './TodoGateway'
import TodoList from '../entities/TodoList';
export default class TodoMemoryGateway implements TodoGateway {
  todos: TodoList;

  constructor() {
    this.todos = new TodoList([
      { id: Math.random().toString(36).slice(2,7), description: "Estudar Engenharia de Software", done: true},
      { id: Math.random().toString(36).slice(2,7), description: "Pagar contas", done: false},
      { id: Math.random().toString(36).slice(2,7), description: "Estudar Engenharia de Software", done: false}
    ])
  }
  async getTodos(): Promise<any> {
    return this.todos;
  }
  async addItem(item: any): Promise<any> {
    return this.todos.addItem(item)
  }
  async updateItem(item: any): Promise<any> {
   return this.todos.toggleDone(item);
  }

  async removeItem(id: string): Promise<any> {
    return this.todos.removeItem(id)
  }
}