<template>
  <div>
    <h1>Todo List</h1>
    <TodoForm @createTodo="createTodo" />
    <TodoList
      :todos="todos"
      @deleteTodo="deleteTodo"
      @changeChecked="changeChecked"
    />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: 'IndexPage',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    createTodo(inputValue) {
      this.todos.push({
        id: Date.now(),
        name: inputValue,
        isChecked: false,
      })
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id)
    },
    changeChecked(value, id) {
      this.todos = this.todos.map((item) => item.id === id ? { ...item, isChecked: value } : item)
    }
  }
}
</script>