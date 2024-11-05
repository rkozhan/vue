const App = {
    data() {
        return {
            counter: 0 //initial value
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')