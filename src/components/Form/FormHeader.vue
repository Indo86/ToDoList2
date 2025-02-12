<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['title']);
const emit = defineEmits(['update:title']);
</script>

<template>
  <div class="mb-3">
    <label for="todoInput" class="form-label">Head</label>
    <input 
      type="text" 
      class="form-control" 
      id="todoInput" 
      placeholder="Name your activity" 
      required
      :value="props.title"
      @input="emit('update:title', $event.target.value)"
    >
  </div>
</template>

<style scoped>
</style>
