<template>
    <div class="search-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }">
                <a-input-search :style="{width:'50%'}" placeholder="请输入起点" allow-clear button-text="搜索" search-button />
                <a-input-search :style="{width:'50%'}" placeholder="请输入终点" allow-clear button-text="搜索" search-button />
            </a-card>
        </div>
    </div>
</template>
  
<script setup>

</script>
