<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="isOpen = !isOpen">Open</button>
      <p v-if="isOpen">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque ipsa accusamus et eius sapiente?</p>
    </div>
</template>

<script>
export default {
  // props: ['title'],
  // Validate Props
  props: {
    title: String,
    id: Number,
    isOpen: Boolean
  },
  data () {
    return {
      // isOpen: false
    }
  }
}
</script>
