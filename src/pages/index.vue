<template>
  <div>
    <portal-target name="notification" />
    <div>hello world</div>
    <notification :open="openNotification" @close="openNotification = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const openNotification = ref(false)
    ;(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      openNotification.value = true
    })()
    return {
      openNotification,
    }
  },
})
</script>
