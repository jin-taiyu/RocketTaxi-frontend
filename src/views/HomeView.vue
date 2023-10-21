<script setup lang="ts">
import WelcomeCard from '@/components/home/WelcomeCard.vue'
import NoticeCard from '@/components/home/NoticeCard.vue'
</script>

<template>
  <div class="home-view">
      <div style="flex-direction: column" class="column">
        <div style="width: 100%; height: 300px; margin-bottom: 10px" class="home-cards">
          <WelcomeCard />
        </div>
      </div>

      <div style="flex-direction: column" class="column">
        <div style="width: 100%; height: 300px; margin-bottom: 10px" class="home-cards">
          <NoticeCard />
        </div>
      </div>
    
  </div>
</template>

<style scoped>
.home-view {
  margin: 5px 5px;
}

.grid .arco-col {
  margin-bottom: 10px;
  text-align: center;
}

.column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-cards {
  width: 100%;
  max-width: 1000px;
}
</style>
