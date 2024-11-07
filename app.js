const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'this is from template'
        }
    },
     template: `
        <div class="card center">
            <h1>{{ title }}</h1>

            <button class="btn primary" @click="title = 'changed'">Change</button>
        </div>
    ` ,
    
})

app.mount('#app')


//2nd app
Vue.createApp({
    data() {
        return {
            title: 'this is second application'
        }
    },
}).mount('#app2')