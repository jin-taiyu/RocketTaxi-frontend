<script setup lang="ts">
import { ref } from 'vue'

const notices = ref([
  {
    title: '乘RocketTaxi赢代金券，最高100元！',
    content: '在本月内使用我们的服务，就有机会获得免费的RocketTaxi代金券，最高可达100元!'
  },
  {
    title: '用某银行信用卡乘RocketTaxi，享受超低折扣！',
    content: '如果您是某银行的信用卡用户，您可以享受每月10次5折乘车的优惠!'
  },
  {
    title: 'RocketTaxi校园专属福利，免费接送!',
    content: '您可以在校园内免费乘坐RocketTaxi！'
  }
])
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

      <div v-for="(notice, index) in notices" :key="index">
        <h3>{{ notice.title }}</h3>
        <p>{{ notice.content }}</p>
      </div>
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
