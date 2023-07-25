<script setup lang="ts">
import {createApp, onMounted, ref, watch} from 'vue';
import Input from '@/components/dragCmp/Input.vue';
import {useMouse} from '@/core/cmpBase'

const mainEditor = ref<Element | null>(null)
const {x,y} = useMouse()

watch(x,(val)=>{
  console.log('--------', val);
})

onMounted(() => {
  const cmpIns = createApp(Input, {
    x: x,
    y: y,
    placeholder: '1111111',
  })
  console.log('--------', cmpIns);


  cmpIns.mount(mainEditor.value as Element)

})
</script>

<template>
  <div>{{x}},{{y}}</div>
  <main ref="mainEditor">

  </main>
</template>
