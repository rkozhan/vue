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
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        //if event as param with another params,
        //in html it should be named $event (+ order of params)
        removeNote(i, e) { 
            //console.log(i);
            //console.log(e); 
            this.notes.splice(i, 1)
        }
    }
}

Vue.createApp(App).mount('#app')
