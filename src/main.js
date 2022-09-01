import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './app/app.router'
import index from './app/app.index.vue'
import '@picocss/pico'

const app = createApp(index)

app.use(createPinia())
app.use(router)
app.mount('#app')
