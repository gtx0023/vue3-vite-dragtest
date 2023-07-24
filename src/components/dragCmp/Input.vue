<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import {itemProps} from '@/core/cmpBase'
const emit = defineEmits(['inFocus', 'submit'])
const props = defineProps({
    ...itemProps,
    placeholder: {
        type: String,
        default: '请输入'
    }
})

function buttonClick() {
    emit('submit')
}

onMounted(()=>{
})

watch(props,()=>{
      console.log('props change')
      getStyle();
    },
    { deep: true }
)

function getStyle(){
  return {
    left: `${props.x}px`,
    top: `${props.y}px`,
    width: `${props.width}px`,
    height: `${props.height}px`
  }
}
</script>

<template>
    <div class="editor-input" :style="getStyle">
        <input type="text" @click="buttonClick" :placeholder="placeholder">
    </div>
</template>

<style lang="less">
.editor-input{
  position: absolute;
}
</style>