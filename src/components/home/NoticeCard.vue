<script setup lang="ts">
import { ref } from 'vue'

const notice = ref({
  title: 'test notice title',
  content: 'test notice content'
})
</script>

<template>
  <div class="notice-card">
    <a-card
      style="width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0)"
      title="公告"
      :bordered="false"
    >
      <template #extra>
        <a-link>查看全部</a-link>
      </template>

      {{ notice.content }}
    </a-card>
  </div>
</template>

<style scoped>
.notice-card {
  width: 100%;
  height: calc(100% - 20px);

  padding: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>