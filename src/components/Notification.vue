<template>
  <portal to="notification">
    <div v-if="open">
      <div>{{ message }}</div>
      <button @click="clicked()">OK</button>
    </div>
  </portal>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'Unexpected error.',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    return {
      clicked: () => {
        emit('close')
      },
    }
  },
})
</script>
