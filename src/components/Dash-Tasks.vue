<script setup lang="ts">
import { tasksFetcher } from '@/main'
import type { TaskDto } from '@/programs/dto/task'

const taskDtos: TaskDto[] = await tasksFetcher.fetchGet()
</script>

<!-- Priorities component.
Display all priorities, and their attributes.
Delete priorities individually. -->
<template>
  <div v-for="dto in taskDtos" class="generalCard" :key="dto.id">
    <h3>{{ dto.taskName }}</h3>
    <p>Completed? {{ dto.isCompleted ? 'true' : 'false' }}</p>
    <p>Archived? {{ dto.isArchived ? 'true' : 'false' }}</p>
    <p>{{ dto.id }}</p>
    <p>unused: categoryid {{ dto.todoCategoryId }}</p>
    <p>unused: priorityid {{ dto.todoPriorityId }}</p>
    <p>Task of type {{ dto.taskSort }}.</p>
    <p>Sync Date: {{ dto.syncDt }}</p>
    <p>Created Date: {{ dto.createdDt }}</p>
    <p>Due Date: {{ dto.dueDt }}</p>
    <br />

    <div>
      <button class="generalButton" @click="tasksFetcher.fetchDelete(dto.id)">Delete</button>
    </div>
  </div>
</template>
