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
  // emits: ['open-news'], // to point custom outgoing events
  // Validate Emits
  emits: {
    // 'open-news': null // no validation
    'open-news' (num) {
      if (num) {
        return true
      }
      console.warn('No data in open-news emit')
      return false
    }
  },
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
        this.$emit('open-news', 42) // valid
        // this.$emit('open-news') // invalid, num parameter is required
      }
    }
  }
}
</script>
