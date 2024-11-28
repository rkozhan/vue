import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

import MainHeader from './MainHeader.vue'

// createApp(App).mount('#app')

const app = createApp(App)

// register a component global
app.component('main-header', MainHeader)

app.mount('#app')
