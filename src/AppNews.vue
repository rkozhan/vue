<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div class="card">
      <h3>{{ title }}</h3>
      <!-- <button class="btn" @click="open">{{ isNewsOpen ? 'close' : 'open'}}</button> -->
      <app-button @action="open">{{ isNewsOpen ? 'close' : 'open' }}</app-button>
      <!-- <button class="btn danger" v-if="wasRead" @click="$emit('unmark', id)">Mark as unread</button> -->
      <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">Mark as unread</app-button>
      <div v-if="isNewsOpen">
        <hr/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus atque ipsa accusamus et eius sapiente?</p>
        <!-- <button class="btn primary" @click="mark" v-if="!wasRead">Read news</button> -->
        <app-button color="primary" @action="mark" v-if="!wasRead">Read news</app-button>
      </div>
    </div>
</template>

<script>
import AppButton from './AppButton'

export default {
  emits: {
    'open-news': null,
    'read-news': null,
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
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark () {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
  },
  components: { AppButton }
}
</script>
