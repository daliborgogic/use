import { ref } from '@vue/runtime-dom'
import { isClient } from './../utils/index.js'
import { useEventListener } from './useEventListener.js'

export function useWindowSize(initialWidth = Infinity, initialHeight = Infinity) {
  const width = ref(isClient ? window.innerWidth : initialWidth)
  const height = ref(isClient ? window.innerHeight : initialHeight)

  if (isClient) {
    console.log({ref})
    useEventListener('resize', () => {
      width.value = window.innerWidth
      height.value = window.innerHeight
    })
  }

  return { width, height }
}
