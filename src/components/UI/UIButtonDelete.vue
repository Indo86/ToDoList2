<script setup>
import { defineEmits } from 'vue';

const emit =  defineEmits(['deleteList'])
const props = defineProps(['id'])
const deleteList = (id)=>{
  emit('deleteList', id)
}

</script>


<template>

<div class="btn-delete" @click="deleteList(id)">
  <i class="bi bi-trash text-danger"></i>
</div>

</template>


<style scoped>
.btn-delete{
  cursor: pointer;
}
</style>