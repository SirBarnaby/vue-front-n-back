<script setup lang="ts">
import { prioritiesFetcher } from '@/main'
import { PriorityDto } from '@/programs/dto/priority'

const priorityDtos: PriorityDto[] = await prioritiesFetcher.fetchGet()
</script>

<!-- Priorities component.
Display all priorities, and their attributes.
Delete priorities individually. -->
<template>
  <div v-for="dto in priorityDtos" class="generalCard" :key="dto.id">
    <h3>{{ dto.priorityName }}</h3>
    <p>{{ dto.id }}</p>
    <p>appuser: {{ dto.appUserId }}</p>
    <p>Priority of type {{ dto.prioritySort }}.</p>
    <p>Sync Date: {{ dto.syncDt }}</p>
    <br />
    <p>
      <i>{{ dto.tag }}</i>
    </p>

    <div>
      <button className="generalButton" @click="prioritiesFetcher.fetchDelete(dto.id)">
        Delete
      </button>
    </div>
  </div>
</template>
