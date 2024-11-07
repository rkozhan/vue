const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'this is from template'
        }
    },
/*     template: `
        <div class="card center">
            <h1>{{ title }}</h1>

            <button class="btn primary" @click="title = 'changed'">Change</button>
        </div>
    ` */
    // how Vue renders Virtual DOM elements
    render() {
        return h('div', {
            class: 'card center'
        }, 
        [
            h('h1', {}, this.title),
            h('button', {
                class: 'btn primary',
                onClick: () => {
                    this.title = "changed"
                }
            }, 'Change')
        ])
    }
})

app.mount('#app')
