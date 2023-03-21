<script setup lang="ts">
import { computed, inject, onMounted, reactive, ref } from 'vue';
import HttpClient from '../infra/HttpClient';
import TodoGateway from '../gateways/TodoGateway';

const data: any = reactive({todos: []})
const description = ref("")

//? The dependence of the axios is no more needed here as the istance of the adapter 
//? the component doesn't not know what library for HTTP he uses
const todoGateway = inject("todoGateway") as TodoGateway;

async function addItem() {
  const item = { id: Math.random().toString(36).slice(2,7), description: description.value, done: false}
  data.todos.push(item)
  await todoGateway.addItem(item);
}

async function removeItem( item: any) {
  data.todos.splice(data.todos.indexOf(item), 1);
  await todoGateway.removeItem(item.id)
}

async function toggleDone (item: any) {
  item.done = !item.done;
  await todoGateway.updateItem(item);
}

const completed = computed(() => {
  const total = data.todos.length;
  const done = data.todos.filter((item: any) => item.done).length;

  return Math.round((done/total) * 100)
})

onMounted(async () => {
  data.todos = await todoGateway.getTodos();
})

</script>

<template>
  <section>
    <div v-if="data.todos.length === 0">
      No Items
    </div>
    <div v-else>
      <span class="completed">{{ completed }}%</span>
      {{ data.todos }}
    </div>
  </section>

</template>

<style scoped>

</style>