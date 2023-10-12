import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AxiosAdapter from './infra/AxiosAdapter';
import TodoHttpGateway from './gateways/TodoHttpGateway';

//? It turns possible Dependency Inversion
//? The Adapter used is injected on the application
//? The component using the Http Client doesn't need to know the 
const httpClient = new AxiosAdapter();


const app = createApp(App)
// app.provide("httpClient", httpClient) //? No uses now that we have the gateways

const todoGateway = new TodoHttpGateway(httpClient, 'http://localhost:3000')
app.provide("todoGateway", todoGateway)
app.mount('#app')
