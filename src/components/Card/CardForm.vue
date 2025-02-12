<script setup>
import FormList from '../Form/FormList.vue';
import FormNote from '../Form/FormNote.vue';
import UIButtonSave from '../UI/UIButtonSave.vue';
import UIButtonDiscard from '../UI/UIButtonDiscard.vue';
import UIButtonCheck from '../UI/UIButtonCheck.vue';
import FormHeader from '../Form/FormHeader.vue';
import { ref } from 'vue';

const emit = defineEmits(['close', 'save'])


// function untuk mengacak warna 
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// membuat struktur data untuk menyesuaikan dengan JSON
const noteData = ref({
  title: '',
  color: '',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  content: '',
  tasks: [],
})

const saveNote = () =>{
  // mengupdate Timestamp
  noteData.value.updated_at = new Date().toISOString();
  noteData.value.color = getRandomHexColor();
  // Melakukan emit event ke parent dengan data yang sudah dilakukan
  emit('save', noteData.value)
}

// function untuk menambahkan task pada to do list
const addTask = (newTask) =>{
  if(newTask){
  noteData.value.tasks.unshift({
      task: newTask,
      completed: false,
    })
  }
  // console.log(noteData.value.tasks)
}

</script>



<template>

<div class="card">
  <div class="card-header text-center">
    Add Your Note For Your Productivity
  </div>
  <div class="card-body">
    <FormHeader v-model:title="noteData.title"/>
    <FormNote v-model:content="noteData.content"/>
    <FormList :tasks="noteData.tasks" @addTask="addTask"/>
    <UIButtonCheck :tasks="noteData.tasks"/>
    <div class="d-grid gap-2 ">
      <UIButtonSave @save="saveNote" :title="noteData.title" :content="noteData.content"/>
      <UIButtonDiscard @close="$emit('close')"/>
    </div>
  </div>
</div>



</template>



<style scoped>

.card{
  width: 100%;
}


</style>