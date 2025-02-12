<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['save'])
const props = defineProps(['title', 'content'])

const saveNote = () =>{
  if(props.content !== '' && props.title !== ''){
    emit('save')
  }
}

</script>


<template>


<button type="button" class="btn btn-outline-success" @click="saveNote">
  Save Note
</button>

</template>


<style scoped>


</style>