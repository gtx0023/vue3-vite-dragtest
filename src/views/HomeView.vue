<script setup lang="ts">
import { createApp, onMounted, ref } from 'vue';
import Input from '@/components/dragCmp/Input.vue';
import {useMouse} from '@/core/cmpBase'

const mainEditor = ref<Element | null>(null)
const {x,y} = useMouse()

onMounted(() => {
  const cmpIns = createApp(Input, {
    x: x.value,
    y: y.value,
    placeholder: '1111111',
  })
  console.log('--------', cmpIns);


  cmpIns.mount(mainEditor.value as Element)

})
</script>

<template>
  <main ref="mainEditor">
  </main>
</template>
