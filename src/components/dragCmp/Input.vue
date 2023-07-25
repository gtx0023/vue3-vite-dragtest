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
const countStyle = ref<StyleValue>()


function buttonClick() {
    emit('submit')
}

onMounted(()=>{
})

watch(props,()=>{
      getStyle();
    },
    { deep: true }
)

function getStyle(){
  countStyle.value =  {
    left: `${props.x.value}px`,
    top: `${props.y.value}px`,
    width: `${props.width}px`,
    height: `${props.height}px`
  }
}
</script>

<template>
    <div class="editor-input" :style="countStyle">
        <input type="text" @click="buttonClick" :placeholder="placeholder">
    </div>
</template>

<style lang="less">
.editor-input{
  position: absolute;
}
</style>