// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'


export const itemProps = {
  /**
   * @description native input id
   */
  id: {
    type: String,
    default: undefined
  },

  x: {
    type: Number,
    default: 0
  },

  y: {
    type: Number,
    default: 0
  },

  width: {
    type: Number,
    default: 0
  },

  height: {
    type: Number,
    default: 0
  },

  rotate:{
    type: Number,
    default: 0
  },
}

export function useEventListener(target, event, callback) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}


// 按照惯例，组合式函数名以“use”开头
export function useMouse() {
  // 被组合式函数封装和管理的状态
  const x = ref(0)
  const y = ref(0)

  // 组合式函数可以随时更改其状态。
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  useEventListener(window, 'mousemove', (event) => {
    update(event)
  })

  // 通过返回值暴露所管理的状态
  return { x, y }
}
