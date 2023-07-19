<script setup lang="ts">
import { onMounted, ref } from 'vue';
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
</script>

<template>
    <div>
        <input type="text" @click="buttonClick" :placeholder="placeholder">
    </div>
</template>

<style lang="less"></style>