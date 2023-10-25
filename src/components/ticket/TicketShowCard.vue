<script setup lang="ts">
import { reactive } from 'vue';

const columns = [
  {
    title: '起点',
    dataIndex: 'start',
  },
  {
    title: '终点',
    dataIndex: 'end',
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
];
const data = reactive([
  { key: '1', start: '北京', end: '上海', price: '¥300', time: '08:00 - 12:00' },
  { key: '2', start: '南京', end: '杭州', price: '¥200', time: '10:00 - 11:30' },
  { key: '3', start: '上海', end: '广州', price: '¥350', time: '09:30 - 13:45' },
  { key: '4', start: '深圳', end: '武汉', price: '¥280', time: '11:15 - 14:30' },
  { key: '5', start: '成都', end: '重庆', price: '¥150', time: '13:20 - 15:10' },
  { key: '6', start: '杭州', end: '苏州', price: '¥180', time: '14:45 - 16:30' },
  { key: '7', start: '广州', end: '厦门', price: '¥250', time: '16:10 - 18:20' },
  { key: '8', start: '武汉', end: '长沙', price: '¥120', time: '17:30 - 19:15' },
  { key: '9', start: '长春', end: '哈尔滨', price: '¥170', time: '18:40 - 20:25' },
  { key: '10', start: '西安', end: '兰州', price: '¥220', time: '19:55 - 22:10' },
  { key: '1', start: '北京', end: '上海', price: '¥300', time: '08:00 - 12:00' },
  { key: '2', start: '南京', end: '杭州', price: '¥200', time: '10:00 - 11:30' },
  { key: '3', start: '上海', end: '广州', price: '¥350', time: '09:30 - 13:45' },
  { key: '4', start: '深圳', end: '武汉', price: '¥280', time: '11:15 - 14:30' },
  { key: '5', start: '成都', end: '重庆', price: '¥150', time: '13:20 - 15:10' },
  { key: '6', start: '杭州', end: '苏州', price: '¥180', time: '14:45 - 16:30' },
  { key: '7', start: '广州', end: '厦门', price: '¥250', time: '16:10 - 18:20' },
  { key: '8', start: '武汉', end: '长沙', price: '¥120', time: '17:30 - 19:15' },
  { key: '9', start: '长春', end: '哈尔滨', price: '¥170', time: '18:40 - 20:25' },
  { key: '10', start: '西安', end: '兰州', price: '¥220', time: '19:55 - 22:10' },
  // 更多车票数据...
]);
</script>


<template>
    <div class="ticket-search-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }" >
                <a-table :columns="columns" :data="data" />
            </a-card>
        </div>
    </div>
</template>


