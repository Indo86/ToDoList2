<script setup>
import { defineProps } from 'vue';

const props = defineProps(['notes']);
</script>

<template>
  <div class="row">
    <div class="col-3 d-flex gap-1" v-for="(note, index) in notes" :key="note.id || index">
      <div class="card mt-4" :style="{ backgroundColor: note.color }">
        <div class="card-body d-flex flex-wrap justify-content-between">
          <h5 class="card-title">{{ note.title }}</h5>
          <p class="card-text">
            {{ note.content }}
          </p>
          <ul>
            <li v-for="(task, taskIndex) in note.tasks" :key="task.id || `${note.id}-${taskIndex}`">
              {{ task.task }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  scale: 1.012;
  cursor: pointer;
}



</style>
