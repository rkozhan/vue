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
        inputChange1Handler(event) {
            this.inputValue = event.target.value            
        },
        addNewNote() {
            if (this.inputValue) {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(str) {
            return str.toUpperCase()
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    }
}

Vue.createApp(App).mount('#app')
