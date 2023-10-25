<script setup lang="ts">
const options = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      {
        value: 'chaoyang',
        label: '朝阳',
        children: [
          {
            value: 'datunli',
            label: '大屯里',
          },
        ],
      },
      {
        value: 'haidian',
        label: '海淀',
      },
      {
        value: 'dongcheng',
        label: '东城',
      },
      {
        value: 'xicheng',
        label: '西城',
        children: [
          {
            value: 'jinrongjie',
            label: '金融街',
          },
          {
            value: 'tianqiao',
            label: '天桥',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'huangpu',
        label: '黄浦',
      },
    ],
  },
];
</script>

<template>
    <div class="ticket-search-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }" >
                <a-cascader class="search-box" :options="options" :style="{width:'30%'}" placeholder="请选择起点" />
                <a-cascader class="search-box" :options="options" :style="{width:'30%'}" placeholder="请选择终点" />
                <a-date-picker class="search-box" style="width: 40%;" />
            </a-card>
        </div>
    </div>
</template>

<style>
.search-box {
    border: 1px solid gray;
}
</style>