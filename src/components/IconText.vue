<script setup lang="ts">
defineProps<{
  className: string
  size?: string
  content: string
}>()
</script>

<template>
  <div class="flex items-center">
    <span :class="className" />
    <span>{{ content }}</span>
  </div>
</template>

<style>
</style>
