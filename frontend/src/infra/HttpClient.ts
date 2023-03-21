export default interface IHttpClient {
  get (url: string): Promise<any>
  post (url: string, body: any): Promise<any>
  put (url: string, body: any): Promise<any>
  delete (id: string): Promise<any>
}

//? Padrão adapter: criar um adapter que transforme uma biblioteca específica
//? Esta utilizara a interface HttpClient como um contrato