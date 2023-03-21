<script setup lang="ts">
import { ref } from 'vue';

const description = ref("")

defineProps(["todoList"])


</script>

<template>
  <section>
    <div v-if="todoList.items.length === 0">
      No Items
    </div>
    <div v-else>
      <span class="completed">{{ todoList.getCompleted() }}%</span>
      <div v-for="item in todoList.items">
        <span :style="{ 'text-decoration': (item.done) ? 'line-through' : '' }">{{ item.id }} {{ item.description }}</span>
        <button @click="todoList.toggleDone(item)">Done/Undone</button>
        <button @click="todoList.removeItem(item)">Remove</button>
      </div>
      <hr />
    </div>
    <input type="text" v-model="description" @keyup.enter="todoList.addItem(description)" />
  </section>
</template>