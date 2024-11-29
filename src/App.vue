<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Today News {{ now }}</h2>
      <span>Open: <strong>{{ openRate }}</strong> | Read: <strong>{{ readRate }}</strong></span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews.vue'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: 'Bitphone 32 is presented today',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Icoin reaches 100B$',
          id: 2,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Cesna model S is available now',
          id: 3,
          isOpen: false,
          wasRead: false
        }
      ]
    }
  },
  methods: {
    openNews () {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    },
    unreadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    AppNews
  }
}
</script>

<style lang="scss">

</style>
