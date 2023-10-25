import { createApp } from 'vue'
import App from '@/App.vue'

import '@/common/access'

// vue router
import router from '@/router'

// Arco Design
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

// Mavon Editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// Pinia
import { createPinia } from 'pinia'

// Baidu Map
import BaiduMap from 'vue-baidu-map-3x';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(mavonEditor)
app.use(BaiduMap, {
    ak: 'c2ZpqW8QzoMG0zHtijgvF3TyACfBT6eG',
  });

app.mount('#app')
