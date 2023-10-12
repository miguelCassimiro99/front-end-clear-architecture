import { mount } from "@vue/test-utils";
import TodoListView from '../src/components/TodoListView.vue';
import TodoMemoryGateway from "../src/gateways/TodoMemoryGateway";
import TodoListComponentVue from "../src/components/TodoListComponent.vue";
import TodoList from "../src/entities/TodoList";

function sleep (mili: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, mili)
  })
}

test("It should test the TodoListView Screen", async function () {
  const todoList = new TodoList();

  todoList.addItem("a")
  todoList.addItem("b")
  todoList.addItem("c")

  const wrapper = mount(TodoListComponentVue, {
    props: {
      todoList
    }
  })

  await sleep(100);
  expect(wrapper.get('.completed').text()).toBe("0%");
})