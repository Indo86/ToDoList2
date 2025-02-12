<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  notes: Array,
});

const searchKey = ref('');
const filteredNotes = ref([...props.notes]); // Salin data awal
const emit = defineEmits(['filteredNotes']);

// Perbarui filteredNotes setiap kali searchKey berubah
watch(searchKey, () => {
  filteredNotes.value = props.notes.filter(note => 
    note.title.toLowerCase().includes(searchKey.value.toLowerCase().trim()) ||
    note.content.toLowerCase().includes(searchKey.value.toLowerCase().trim())
  );
  emit('filteredNotes', filteredNotes.value); // Kirim ke parent
});

</script>

<template>
  <form>
    <div class="d-flex flex-row align-items-center gap-0">
      <div class="input-group">
        <div class="input-group-text">
          <i class="bi bi-search"></i>
        </div>
        <input 
          type="text" 
          v-model.trim="searchKey" 
          class="form-control" 
          placeholder="Search Note"
        >
      </div>
    </div>
  </form>
</template>

<style scoped>
.icon-search {
  background-color: grey;
  padding: 6px;
  border-radius: 10px 0 0 10px;
}
</style>
