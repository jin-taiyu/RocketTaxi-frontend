<script lang="ts" setup>
import GlobalHeader from '@/layouts/GlobalHeader.vue'
</script>

<template>
  <div id="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <global-header />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>
#basic-layout .header {
  border-bottom: 1px solid var(--color-border);
}

#basic-layout .content {
  display: flex;
  flex-direction: column;
  background-color: var(--color-fill-1);
  padding: 5px 5px;
}
</style>
