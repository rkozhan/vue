<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="isOpen = !isOpen">Open</button>
      <p v-if="isOpen">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque ipsa accusamus et eius sapiente?</p>
    </div>
</template>

<script>
export default {
  // PROPS: vue get from props arr to merge with data()
  props: [
    'title'
  ],
  data () {
    return {
      item: 'Item string',
      isOpen: false
    }
  }
}
</script>
