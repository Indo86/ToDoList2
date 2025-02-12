<script setup>
defineEmits(['close']);


</script>


<template>

<button type="button" class="btn btn-outline-danger" @click="$emit('close')">
  Discard Note
</button>


</template>


<style scoped>




</style>