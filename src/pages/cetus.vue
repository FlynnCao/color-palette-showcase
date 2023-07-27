<script setup lang="ts">
import type { Iro } from '~/types'
const colors = reactive<Iro>({
  primary: ['#074CC2', '#2F75ED', '#2F75ED'],
  accent: ['#A17210', '#FFC64D', '#EDB02F'],
  neutral: ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#6c757d', '#6c757d', '#6c757d', '#495057', '#343a40', '#212529'],
  semantic: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
  extended: ['#2AAFDE', '#3BF5DF', '#2ADE81', '#30FA41'],
})
const completeFullTitle = (no: number, category: string) => {
  return `${no} - ${category.charAt(0).toUpperCase() + category.slice(1)} Colors`
}
</script>

<template>
  <div class="index p-5 pt-0">
    <h2>{{ completeFullTitle(1, 'primary') }}</h2>
    <ColorChunk :data="colors.primary" />
    <h2>{{ completeFullTitle(2, 'accent') }}</h2>
    <ColorChunk :data="colors.accent" />
    <h2>{{ completeFullTitle(3, 'neutral') }}</h2>
    <ColorChunk :data="colors.neutral" />
    <h2>{{ completeFullTitle(4, 'semantic') }}</h2>
    <ColorChunk :data="colors.semantic" />
    <div v-if="colors.extended">
      <h2>{{ completeFullTitle(5, 'extended') }}</h2>
      <ColorChunk :data="colors?.extended" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style scoped>

</style>
