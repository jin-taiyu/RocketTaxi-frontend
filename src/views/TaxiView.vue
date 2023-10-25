<script setup lang="ts">
import MapCard from '@/components/taxi/MapCard.vue'
import SearchCard from '@/components/taxi/SearchCard.vue'
</script>

<template>
    <div class="taxi-view">
        <div style="flex-direction: column" class="column">
            <MapCard/>
        </div>

        <div style="flex-direction: column" class="column">
            <SearchCard/>
        </div>
    </div>
  </template>