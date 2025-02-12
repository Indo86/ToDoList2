<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['content']);
const emit = defineEmits(['update:content']);
</script>

<template>
  <div class="mb-3">
    <label for="noteForm" class="form-label">Note</label>
    <textarea 
      class="form-control" 
      id="noteForm" 
      rows="3" 
      style="resize: none;" 
      placeholder="Write some words or note" 
      required
      :value="props.content"
      @input="emit('update:content', $event.target.value)"
    ></textarea>
  </div>
</template>

<style scoped>
</style>
