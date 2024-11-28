<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">{{ isNewsOpen ? 'close' : 'open'}}</button>
      <p v-if="isNewsOpen">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque ipsa accusamus et eius sapiente?</p>
    </div>
</template>

<script>
export default {
  // props: ['title'],
  // Validate Props
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator (value) {
        return value === true || value === false
      }
    }
  },
  data () {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open () {
      this.isNewsOpen = !this.isNewsOpen

      // tell parent that some event happened
      if (this.isNewsOpen) {
        // this.$emit('open-news')
        // additional params to parent el
        this.$emit('open-news', 'param2', 123)
      }
    }
  }
}
</script>
