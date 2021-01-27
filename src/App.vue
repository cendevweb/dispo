<template>
    <header/>
    <vertical-nav/>
    <home/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import VerticalNav from './components/VerticalNav.vue'
import Home from './Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Home,
    VerticalNav
  }
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
