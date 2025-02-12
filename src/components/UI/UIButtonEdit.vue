<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps(['task'])
const emit = defineEmits(['editTask'])

const editedTask = (id, task) =>{
  emit('editTask', id, task)
}


</script>


<template>
  <!-- edit -->
    <div class="btn-edit" @click="editedTask">
      <i class="bi bi-pencil-square bi-sm text-primary" ></i>
    </div>
</template>


<style scoped>
.btn-edit{
  cursor: pointer;
}
</style>