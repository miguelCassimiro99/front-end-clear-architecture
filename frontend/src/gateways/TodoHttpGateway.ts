import HttpClient from '../infra/HttpClient';
import ITodoGateway from './TodoGateway';

export default class TodoHttpGateway implements ITodoGateway {

  constructor (readonly httpClient: HttpClient, readonly baseUrl:string) {}

  async getTodos(): Promise<any> {
    return await this.httpClient.get(`${this.baseUrl}/todos`)
  }

  async addItem(item: any): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/todos`, item)
  }
  async updateItem(item: any): Promise<any> {
    await this.httpClient.put(`${this.baseUrl}/todos`, item)
  }
  async removeItem(id: string): Promise<any> {
    await this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
  
}
