<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Today News {{ now }}</h2>
      <span>Opened: {{ openRate }}</span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @open-news="openNews"
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
      news: [
        {
          title: 'Bitphone 32 is presented today',
          id: 1,
          isOpen: false
        },
        {
          title: 'Icoin reaches 100B$',
          id: 2,
          isOpen: false
        },
        {
          title: 'Cesna model S is available now',
          id: 3,
          isOpen: false
        }
      ]
    }
  },
  methods: {
    openNews () {
      this.openRate++
    }
  },
  components: {
    AppNews
  }
}
</script>

<style lang="scss">

</style>
