<script setup lang="ts">
import { ref } from 'vue'

const images = ref(['/pic/rt_pic01.jpg', '/pic/rt_pic02.jpg'])
</script>

<template>
  <div class="welcome-card">
    <a-carousel style="width: 100%; height: 100%" :default-current="2" :auto-play="true">
      <a-carousel-item
        v-for="(image, key) in images"
        :key="key"
        style="display: flex; justify-content: center; align-items: center"
      >
        <img :src="image" class="display-image" />
      </a-carousel-item>
    </a-carousel>

    <h1 style="color: rgb(44, 166, 247)">欢迎来到Rocket Taxi</h1>
  </div>
</template>

<style scoped>
.welcome-card {
  width: 100%;
  height: calc(100% - 20px);

  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 10px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.display-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
