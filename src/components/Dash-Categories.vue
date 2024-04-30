<script setup lang="ts">
import { categoryFetcher } from '@/main'
import { CategoryDto } from '@/programs/dto/category'

let categoryDtos: CategoryDto[] = await categoryFetcher.fetchGet()
</script>

<!-- Categories component.
Display all categories, show details of all categories.
Each category can be deleted individually. -->
<template>
  <div v-for="dto in categoryDtos" class="generalCard" :key="dto.id">
    <h3>{{ dto.categoryName }}</h3>
    <p>{{ dto.id }}</p>
    <p>Category of type {{ dto.categorySort }}.</p>
    <p>Sync Date: {{ dto.syncDt }}</p>
    <br />
    <p>
      <i>{{ dto.tag }}</i>
    </p>
    <div>
      <button class="generalButton" @click="categoryFetcher.fetchDelete(dto.id)">Delete</button>
    </div>
  </div>
</template>
