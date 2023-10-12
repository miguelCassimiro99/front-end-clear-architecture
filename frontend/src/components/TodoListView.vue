<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue';
import TodoList from '../entities/TodoList';
import TodoGateway from '../gateways/TodoGateway';
import Observer from '../entities/Observer';
import TodoListComponent from './TodoListComponent.vue';

const data: any = reactive({ todoList: new TodoList() })
const description = ref("")

//? The dependence of the axios is no more needed here as the istance of the adapter 
//? the component doesn't not know what library for HTTP he uses
const todoGateway = inject("todoGateway") as TodoGateway;

onMounted(async () => {

  const todoList = await todoGateway.getTodos();

  todoList.register(new Observer("addItem", async function (item: any) {
    await todoGateway.addItem(item)
  }))

  todoList.register(new Observer("removeItem", async function (item: any) {
    await todoGateway.removeItem(item.id)
  }))

  todoList.register(new Observer("toggleDone", async function (item: any) {
    await todoGateway.updateItem(item)
  }))

  data.todoList = todoList;
})

</script>

<template>
  <TodoListComponent :todo-list="data.todoList"  />

</template>

<style scoped>

</style>