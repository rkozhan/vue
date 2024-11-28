<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">{{ isNewsOpen ? 'close' : 'open'}}</button>
      <button class="btn danger" v-if="wasRead" @click="unmark">Mark as unread</button>
      <div v-if="isNewsOpen">
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque ipsa accusamus et eius sapiente?</p>
        <button class="btn primary" @click="mark" v-if="!wasRead">Read news</button>
      </div>
    </div>
</template>

<script>
export default {
  // props: ['title'],
  // emits: ['open-news'], // to point custom outgoing events
  // Validate Emits
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('No id parameter for emit read-news')
      return false
    },
    unmark: null
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
    },
    wasRead: Boolean
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
    },
    mark () {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    unmark () {
      this.$emit('unmark', this.id)
    }
  }
}
</script>
