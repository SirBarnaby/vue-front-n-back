<script setup lang="ts">
import { ref } from 'vue'
import { tasksFetcher as taskFetcher } from '@/main'
import MainHeader from '../components/Main-Header.vue'
import DashFooter from '@/components/Dash-Footer.vue'
import DashTasks from '@/components/Dash-Tasks.vue'

const taskName = ref('')
const taskType = ref('')
const taskCompleted = ref(false)
const taskArchived = ref(false)
const isVisible = ref(false)

function toggleMenu() {
  isVisible.value = !isVisible.value
}

function postData(): void {
  const id = taskFetcher.getUuidv4
  const data = {
    id: id,
    todoCategoryId: '3bfb77a8-4d07-48ed-8f15-9c4ddb603317', // this must point to an existing category
    todoPriorityId: 'd0efe966-2db1-45de-6c2b-08dc65350834', // this must point to an existing priority
    taskName: taskName.value,
    taskSort: taskType.value,
    isCompleted: taskCompleted.value,
    isArchived: taskArchived.value,
    dueDt: '9999-04-23T16:09:43.421Z'
  }

  taskFetcher.fetchPost(data)
}
</script>

<template>
  <main class="main">
    <MainHeader />

    <h2>All tasks in BACKEND.</h2>
    <div class="center">
      <Suspense>
        <DashTasks />
      </Suspense>
    </div>

    <div class="options">
      <button class="generalButton" @click="toggleMenu">Create new task.</button>
      <div v-if="isVisible">
        <input type="text" v-model="taskName" placeholder="Task name:" />
        <br />
        <input type="number" v-model="taskType" placeholder="Task type:" />
        <br />
        <input type="checkbox" v-model="taskCompleted" />
        <label htmlFor="taskCompleted">Completed?</label>
        <br />
        <input type="checkbox" v-model="taskArchived" />
        <label htmlFor="taskArchived">Archived?</label>
        <br />
        <button @click="postData">Submit</button>
      </div>
    </div>

    <DashFooter />
  </main>
</template>
