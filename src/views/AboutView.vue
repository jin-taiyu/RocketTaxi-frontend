<template>
  <div class="container">
    <a-card hoverable class="card">
      <template #cover>
        <div class="gradient-background">
          <img src="/logo.png" style="width: 200px; margin: 0 auto" />
        </div>
      </template>
      <a-card-meta>
        <template #description>
          <div style="text-align: center">
            <a href="https://github.com/jin-taiyu/RocketTaxi.git">Rocket Taxi</a>
            <div>团队功能开发贡献者 / 蒲双畅 <icon-github /> / 金太宇 <icon-github /> </div>
          </div>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 560px;
}

.gradient-background {
  background: linear-gradient(to bottom, #87cfeb72, #f6ff0044);
  text-align: center;
  padding: 20px;
}
</style>
