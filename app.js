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
        inputChangeHandler(event) {
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
    },
    computed: {
        calcAllNotesComputed() {
            return this.notes.length
        }
    },
    watch: { 
        //watch var changing: someVarName -> in watch someVarName(var)
        inputValue(value) { 
            if (value.length > 10) this.inputValue = ''  //some validation
            console.log('input value changed', value);
            
        }
    }
}

Vue.createApp(App).mount('#app')
