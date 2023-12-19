<template>
  <div class="row g-3 align-items-center">
    <ul class="list-group" :style="{maxWidth: '700px'}">
      <TodoItem
        v-for="item in todos"
        :key="item.id"
        :todo="item"
        @deleteTodo="(id) => $emit('deleteTodo', id)"
        @changeChecked="(value, id) => $emit('changeChecked', value, id)"
      />
    </ul>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";
export default  {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    }
  },
}
</script>