<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Today News {{ now }}</h2>
    </div>

    <app-news></app-news>
    <AppNews></AppNews>
  </div>
</template>

<script>
import AppNews from './AppNews.vue'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
        'Bitphone 32 is presented today',
        'Icoin reaches 100B$',
        'Cesna model S is available now'
      ]
    }
  },
  // register component locally
  components: {
    // 'app-news': AppNews

    // also in CebabCase => <app-news></app-news>
    // 'AppNews': AppNews

    // or
    // AppNews: AppNews

    // or
    AppNews
  }
}
</script>

<style lang="scss">

</style>
