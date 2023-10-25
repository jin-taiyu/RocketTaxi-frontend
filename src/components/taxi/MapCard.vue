<template>
    <div class="map-card">
        <div :style="{ display: 'flex' }">
            <a-card :style="{ width: '100%' }">
                <baidu-map class="map" :zoom="15" :center="{lng: 118.6079, lat: 32.0626}" @ready="ready" >
                    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
                </baidu-map>
            </a-card>
        </div>
    </div>
</template>
  
  <script setup>
  const ready = ({BMap,map})=>{
    //  对地图进行自定义操作
  };
  </script>
  
  <style>
  /* 地图容器必须设置宽和高属性 */
  .map {
    width: 100%;
    height: 600px;
  }
  </style>