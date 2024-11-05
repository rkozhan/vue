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
        },
        calcAllNotes() {
            console.log('calcAllNotes') //callable at every symbol entered in input, to avoid use computed
            return this.notes.length
        }
    },
    computed: {
        calcAllNotesComputed() {
            console.log('calcAllNotesComputed') ////callable at changing of used variable
            return this.notes.length
        }
    }
}

Vue.createApp(App).mount('#app')
