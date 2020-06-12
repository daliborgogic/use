<template>
  ### {{ width }} {{ height }}
</template>

<script>
import { useWindowSize } from './packages/core/useWindowSize.js'

export default {
  setup() {
    const { width, height } = useWindowSize()

    return { width, height }
  }
}
</script>
