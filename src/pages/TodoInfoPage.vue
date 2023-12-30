<template>
  <div>
    <h1>TodoInfoPage</h1>
    <h2>{{ todoById($route.params.id)?.name }}</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'TodoInfoPage',
  computed: {
    ...mapGetters(['todoById'])
  },
}
</script>