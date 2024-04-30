<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from '../components/Main-Header.vue'
import DashFooter from '@/components/Dash-Footer.vue'
import DashCategories from '@/components/Dash-Categories.vue'
import { categoryFetcher } from '@/main'

const categoryName = ref('')
const categoryType = ref('')
const categoryTag = ref('')
const isVisible = ref(false)

function toggleMenu() {
  isVisible.value = !isVisible.value
}

function postData(): void {
  const data = {
    id: categoryFetcher.getUuidv4,
    categoryName: categoryName.value,
    categorySort: categoryType.value,
    tag: categoryTag.value
  }

  categoryFetcher.fetchPost(data)
}
</script>

<template>
  <main class="main">
    <MainHeader />

    <h2>All categories in BACKEND.</h2>
    <div class="center">
      <Suspense>
        <DashCategories />
      </Suspense>
    </div>

    <div class="options">
      <button class="generalButton" @click="toggleMenu">Create new category.</button>
      <div v-if="isVisible">
        <input type="text" v-model="categoryName" placeholder="Category name:" />
        <br />
        <input type="number" v-model="categoryType" placeholder="Category type:" />
        <br />
        <input type="text" v-model="categoryTag" placeholder="Category tag:" />
        <br />
        <button @click="postData">Submit</button>
      </div>
    </div>

    <DashFooter />
  </main>
</template>
