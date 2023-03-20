import { mount } from "@vue/test-utils"
import TodoListView from '../src/components/TodoListView.vue'

test("Deve testar a tela de todo list", function () {
  const wrapper = mount(TodoListView, {})

  console.log(wrapper);
})