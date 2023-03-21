import TodoList from '../entities/TodoList';
import HttpClient from '../infra/HttpClient';
import ITodoGateway from './TodoGateway';

export default class TodoHttpGateway implements ITodoGateway {

  constructor (readonly httpClient: HttpClient, readonly baseUrl:string) {}

  async getTodos(): Promise<any> {
    const todosData =  await this.httpClient.get(`${this.baseUrl}/todos`)
    const todoList = new TodoList(todosData); // to restore the data to the domain object
    return todoList;
  }

  async addItem(item: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/todos`, item)
  }
  async updateItem(item: any): Promise<any> {
    await this.httpClient.put(`${this.baseUrl}/todos`, item)
  }
  async removeItem(id: string): Promise<any> {
    await this.httpClient.delete(`${this.baseUrl}/todos/${id}`)
  }
  
}
