<script setup lang="ts">
import { createApp, getCurrentInstance, onMounted, ref } from 'vue';
import Input from '@/components/dragCmp/Input.vue';

const mainEditor = ref<Element | null>(null)

onMounted(() => {
  const cmpIns = createApp(Input, {
    x: 10,
    y: 10,
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
