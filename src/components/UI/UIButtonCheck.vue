<script setup>
import { defineProps, ref, watch } from 'vue';
import UIButtonEdit from './UIButtonEdit.vue';
import UIButtonDelete from './UIButtonDelete.vue';

const props = defineProps(['tasks'])
const listTask = ref(props.tasks)
// membuat variable untuk mengedit task
const editedTask = ref('')
const editedTaskIndex = ref(null)

// function untuk mengedit task
const editTask = (index, taskList) => {
  editedTaskIndex.value = index
  editedTask.value = taskList
}

// membuat function untuk menyimpan perubahan pada task list
const saveEditedTask = () =>{
  if(editedTaskIndex.value !== null && editedTask.value.trim !== ''){
    listTask.value[editedTaskIndex.value].task = editedTask.value
    editedTaskIndex.value = null
  } 
}


watch(() => props.tasks, (newTask) =>{
  listTask.value = newTask
})

const deleteList = (index) => {
  listTask.value.splice(index, 1)
}


</script>


<template>

<div class="form-check p-2">
  <ul v-if="listTask.length !== 0" v-for="(task, index) in listTask" :key="index">
      <input 
      class="form-check-input" 
      type="checkbox"
      value="" 
      id="flexCheckDefault"
      v-model="task.completed"
      :id="index"
      >
      <div class="list-task d-flex justify-content-between">
        <label class="form-check-label" for="flexCheckDefault" :for="index">
          <input type="text"
          v-if="editedTaskIndex === index"
          v-model="editedTask"
          @keyup.enter="saveEditedTask"
          class="form-control task-input"
          autofocus
          >
          <span :class="{'completed-task': task.completed}" v-else>
          {{ task.task }}
        </span>
        </label>
        <div class="btn-action d-flex flex-row gap-3 ms-auto">
          <UIButtonEdit @editTask="editTask(index, task.task)" :taskList="task"/>
          <UIButtonDelete @deleteList="deleteList(index)" :id="index"/>
        </div>
      </div>
  </ul>
</div>

</template>


<style scoped>

.form-check{
    width: 100%;
    height: 100px;
    overflow-y: scroll;
    background-color: #F4F8D3;
    margin-bottom: 10px;
    border-radius: 10px;
}
.completed-task{
    text-decoration: line-through;
    color: gray;
}
</style>