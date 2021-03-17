<template>
  <div>
    <input v-model="container.text" type="text" />
    <input v-model="text" type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const container = reactive({ text: 'hello' })
    return {
      container,
      ...toRefs(container),
    }
  },
})
</script>
