<script setup>
import { defineProps } from 'vue';
import UIButtonDelete from '../UI/UIButtonDelete.vue';
defineEmits(['viewNote', 'deleteNote'])
const props = defineProps(['notes']);
</script>

<template>
  <div class="row">
    <div class="col-3 d-flex gap-1" v-for="(note, index) in notes" :key="note.id || index">
      <div class="card mt-4" :style="{ backgroundColor: note.color }">
        <div class="card-body d-flex flex-wrap justify-content-between"  @click="$emit('viewNote', note)">
          <h5 class="card-title">{{ note.title }}</h5>
          <p class="card-text">
            {{ note.content }}
          </p>
          <ul>
            <li v-for="(task, taskIndex) in note.tasks" :key="task.id || `${note.id}-${taskIndex}`" :class="{'completed-task' : task.completed}">
              {{ task.task }}
            </li>
          </ul>
        </div>
        <div class="card-footer text-body-secondary">
          <UIButtonDelete :id="note.id" @delete-list="$emit('deleteNote', note.id)" class="btn-delete d-flex justify-content-center align-items-center"/>
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

.completed-task{
  text-decoration: line-through;
}

.btn-delete{
  background-color: white;
  max-width: 25px;
  border-radius: 5px;

}

.btn-delete:hover{
  background-color: grey;
}


</style>
