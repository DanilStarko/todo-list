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
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'IndexPage',
  components: {
    TodoForm,
    TodoList,
  },
  methods: {
    ...mapActions(['createTodo', 'changeChecked']),
    ...mapMutations(['deleteTodo']),
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    }
  }
}
</script>