<template>
  <form class="row g-3">
    <div class="col-4">
      <label for="staticEmail2" class="visually-hidden">Email</label>
      <input type="text" v-model="inputValue" class="form-control-plaintext border" id="staticEmail2">
    </div>
    <div class="col-auto">
      <button v-on:click.prevent="addTodo" class="btn btn-primary mb-3">Добавить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    addTodo() {
      if (!this.inputValue) {
        return
      }
      this.$emit('createTodo', this.inputValue);
      this.inputValue = ''
    },
  }
}
</script>