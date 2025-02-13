<script setup>
import FormList from '../Form/FormList.vue';
import FormNote from '../Form/FormNote.vue';
import UIButtonSave from '../UI/UIButtonSave.vue';
import UIButtonDiscard from '../UI/UIButtonDiscard.vue';
import UIButtonCheck from '../UI/UIButtonCheck.vue';
import FormHeader from '../Form/FormHeader.vue';
import { ref, defineEmits, defineProps, watch } from 'vue';

const emit = defineEmits(['close', 'update', 'show'])
const props = defineProps(['note'])

// membuat struktur data untuk menyesuaikan dengan JSON
// const singleNoteData = ref({
//   title: '',
//   color: '',
//   created_at: new Date().toISOString(),
//   updated_at: new Date().toISOString(),
//   content: '',
//   tasks: [],
// })

const singleNoteData = ref({...props.note})

watch(()=> props.note, (newNote)=> {
  singleNoteData.value = {...newNote}
})


const saveNote = () =>{
  // mengupdate Timestamp
  singleNoteData.value.updated_at = new Date().toISOString();
  // Melakukan emit event ke parent dengan data yang sudah dilakukan
  emit('update', singleNoteData.value)
}

// function untuk menambahkan task pada to do list
const addTask = (newTask) =>{
  if(newTask){
    singleNoteData.value.tasks.unshift({
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
    <FormHeader v-model:title="singleNoteData.title"/>
    <FormNote v-model:content="singleNoteData.content"/>
    <FormList :tasks="singleNoteData.tasks" @addTask="addTask"/>
    <UIButtonCheck :tasks="singleNoteData.tasks"/>
    <div class="d-grid gap-2 ">
      <UIButtonSave @save="saveNote" :title="singleNoteData.title" :content="singleNoteData.content"/>
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


