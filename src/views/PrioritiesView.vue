<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from '../components/Main-Header.vue'
import DashFooter from '@/components/Dash-Footer.vue'
import { prioritiesFetcher as priorityFetcher } from '@/main'
import DashPriorities from '@/components/Dash-Priorities.vue'

const priorityName = ref('')
const priorityType = ref(0)
const priorityTag = ref('')
const isVisible = ref(false)

function toggleMenu() {
  isVisible.value = !isVisible.value
}

function postData(): void {
  const id = priorityFetcher.getUuidv4
  const data = {
    id: id,
    appUserId: id,
    priorityName: priorityName.value,
    prioritySort: priorityType.value,
    tag: priorityTag.value
  }

  priorityFetcher.fetchPost(data)
}
</script>

<template>
  <main class="main">
    <MainHeader />

    <h2>All priorities in BACKEND.</h2>
    <div class="center">
      <Suspense>
        <DashPriorities />
      </Suspense>
    </div>

    <div class="options">
      <button class="generalButton" @click="toggleMenu">Create new priority.</button>
      <div v-if="isVisible">
        <input type="text" v-model="priorityName" placeholder="Priority name:" />
        <br />
        <input type="number" v-model="priorityType" placeholder="Priority type:" />
        <br />
        <input type="text" v-model="priorityTag" placeholder="Priority tag:" />
        <br />
        <button @click="postData">Submit</button>
      </div>
    </div>

    <DashFooter />
  </main>
</template>
