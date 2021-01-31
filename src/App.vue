<template>
    <header
      v-if="isLoggedIn"
    />
    <vertical-nav
      v-if="isLoggedIn"
    />
    <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import VerticalNav from './components/VerticalNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    VerticalNav
  },
  computed: {
    isLoggedin() {
      return !!localStorage.getItem('jwt')
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
