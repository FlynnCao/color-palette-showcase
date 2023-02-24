<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <ul class="rounded-sm bg-transparent p-3 flex w-auto border-dotted border-1">
    <li v-for="(item, index) in data" :key="index" :style="{ 'background-color': item }" class="w-5rem h-5rem m-1 rounded" />
  </ul>
</template>

