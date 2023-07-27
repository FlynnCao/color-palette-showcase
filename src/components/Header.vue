<script lang="ts" setup>
import { pageRoutes } from '~/composables/page'
</script>

<template>
  <nav class="w-full h-20 flex items-center justify-center">
    <RouterLink v-for="(item, i) in pageRoutes" :key="i" icon-btn :to="item.path" :title="item.name">
      <span>{{ String(item.name).toUpperCase() }}<span v-if="i !== pageRoutes.length - 1" class="mx-2">|</span></span>
    </RouterLink>
  </nav>
</template>
