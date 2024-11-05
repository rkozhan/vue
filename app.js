Vue.createApp({
    data: () => ({
        myHtml: '<h1>My Vue 3 App</h1>',
        title: 'My items',
        person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 27
        },
        items: [1, 2, 3, 4, 5, 6]
    })
}).mount('#app')
