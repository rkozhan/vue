const App = {
    data() {
        return {
            counter: 0, //initial value
            title: 'Counter'
        }
    }
}

Vue.createApp(App).mount('#app')
