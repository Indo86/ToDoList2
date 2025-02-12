<script setup>
import Card from '@/components/Card/Card.vue';
import getNotes from '../../composable/getNotes';
import FormSearch from '@/components/Form/FormSearch.vue';
import UIButtonAdd from '@/components/UI/UIButtonAdd.vue';
import AddNote from '../components/Modal/AddNote.vue';
import DetailNote from '@/components/Modal/DetailNote.vue';

import { onMounted, ref } from 'vue';

const {notes, error, load} = getNotes()
const displayNotes = ref([])
const isVisible = ref(false)
const isSelectNote = ref(false)
// function untuk membuat form terlihat
const showForm = () => {
  isVisible.value = true
  document.body.style.overflow = 'hidden';
}


const addNewNote = async (newNote) =>{
  // console.log("New note before sending:", newNote); // Cek apakah content sudah ada
  
  await fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {'Content-type':'application/json'},
    body: JSON.stringify(newNote)
  })
  
  displayNotes.value.push(newNote)
  hideForm()
}


const updateNote = () =>{

}

// function untuk membuat form hidden
const hideForm = () => {
  isVisible.value = false
  document.body.style.overflow = 'auto';

}

const hideNote = () =>{
  isSelectNote.value = false
  document.body.style.overflow = 'auto';
}

// Fungsi untuk memperbarui displayNotes berdasarkan hasil pencarian
const updateFilteredNotes = (filtered) => {
  displayNotes.value = filtered;
};

// Mengambil data notes dan menginisialisasi displayNotes saat komponen dimuat
onMounted(async () => {
  await load();
  displayNotes.value = notes.value;
});

</script>

<template>
  <div class="container mb-4">
    <header class="mt-5 d-flex flex-row justify-content-between align-items-center">
      <h2>To Do Productivity</h2>
      <UIButtonAdd @click="showForm"/>
      <FormSearch :notes="notes" @filteredNotes="updateFilteredNotes"/>
    </header>
    <div class="content">
      <Card :notes="displayNotes.length ? displayNotes : notes" />
    </div>
  </div>
  <DetailNote v-if="isSelectNote" @close="hideForm" @update="updateNote"/>  
  <AddNote v-if="isVisible" @close="hideForm" @save="addNewNote"/>
</template>

<style scoped>
  /* Tambahkan gaya sesuai kebutuhan */
</style>
