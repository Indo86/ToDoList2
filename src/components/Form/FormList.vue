<script setup>
import { ref, defineProps, defineEmits } from 'vue'


const props = defineProps(['tasks'])
const emit = defineEmits(['addTask'])
const tasks = ref('')

function addTaskLocal(){
  if(tasks.value){
    emit('addTask',tasks.value)
    tasks.value=''
  }
}

</script>



<template>

<div class="mb-3">
  <label for="todoInput" class="form-label">What To Do</label>
  <input type="text" class="form-control" id="todoInput" placeholder="Do Something!" @keyup.enter="addTaskLocal" v-model="tasks">
</div>

</template>



<style scoped>



</style>