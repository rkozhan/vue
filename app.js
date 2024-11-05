const App = {
    data() {
        return {
            title: 'My notes',
            myPlaceholder: 'add your note',
            inputValue: '',
            notes: ['note 1', 'note 2', 'note 3']
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
