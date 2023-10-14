<script setup lang="ts">
import WelcomeCard from '@/components/home/WelcomeCard.vue'
</script>

<template>
  <div class="home-view">
    <a-row class="grid" :gutter="20">
      <a-col :span="12">
        <div style="flex-direction: column" class="column">
          <div style="width: 100%; height: 300px; margin-bottom: 10px" class="home-cards">
            <WelcomeCard />
          </div>
          <div style="width: 100%; height: 290px" class="home-cards">
            <NoticeCard />
          </div>
        </div>
      </a-col>

      <a-col :span="12">
        <div class="column">
          <div style="width: 100%; height: 600px" class="home-cards">
            <UserRankCard />
          </div>
        </div>
      </a-col>
    </a-row>

    <a-row class="grid" :gutter="20">
      <a-col :span="12">
        <div class="column">
          <div style="width: 100%; height: 400px" class="home-cards">
            <StatisticsCard />
          </div>
        </div>
      </a-col>

      <a-col :span="12">
        <div class="column">
          <div style="width: 100%; height: 400px" class="home-cards">
            <NewProblemCard />
          </div>
        </div>
      </a-col>
    </a-row>
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
