<template>
  <li @click="goTo" class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <input
          class="form-check-input me-1"
          type="checkbox"
          :checked="todo.isChecked"
          @change="(e) => $emit('changeChecked', e.target.checked, todo.id)"
          id="oneCheckboxStretched"
      >
      <label class="form-check-label px-3" for="oneCheckboxStretched">
        {{ todo.name }}
      </label>
    </div>
    <button @click.stop="() => $emit('deleteTodo', todo.id)" class="btn btn-danger">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    goTo() {
      this.$router.push(`/todo-info/${this.todo.id}`)
    }
  }

}
</script>