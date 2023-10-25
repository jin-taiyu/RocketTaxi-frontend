<script setup lang="ts">
const options = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'chaoyang',
        label: 'ChaoYang',
        children: [
          {
            value: 'datunli',
            label: 'Datunli',
          },
        ],
      },
      {
        value: 'haidian',
        label: 'Haidian',
      },
      {
        value: 'dongcheng',
        label: 'Dongcheng',
      },
      {
        value: 'xicheng',
        label: 'Xicheng',
        children: [
          {
            value: 'jinrongjie',
            label: 'Jinrongjie',
          },
          {
            value: 'tianqiao',
            label: 'Tianqiao',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'huangpu',
        label: 'Huangpu',
      },
    ],
  },
];
</script>

<template>
    <div class="ticket-search-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }" >
                <a-cascader :options="options" :style="{width:'30%'}" placeholder="请选择起点" />
                <a-cascader :options="options" :style="{width:'30%'}" placeholder="请选择终点" />
                <a-date-picker style="width: 40%;" />
            </a-card>
        </div>
    </div>
</template>