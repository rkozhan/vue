const App = {
    data() {
        return {
            title: 'My notes',
            myPlaceholder: 'add your note',
            inputValue: ''
        }
    }, 
    methods: {
        //custom name
        inputChange1Handler(event) {
            this.inputValue = event.target.value            
        }
    }
}

Vue.createApp(App).mount('#app')
