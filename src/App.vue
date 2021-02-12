<template>
    <sticky-header
    />
    <vertical-nav
    />
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StickyHeader from './components/Header.vue'
import VerticalNav from './components/VerticalNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    StickyHeader,
    VerticalNav
  },
  computed: {
    isLoggedin() {
      return !!localStorage.getItem('jwt ')
    },
  },
})
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
</style>
