<template>
    <home-cta/>
    <categories-list/>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CategoriesList from './components/CategoriesList.vue'
import HomeCta from './components/HomeCta.vue'

export default defineComponent({
  name: 'Home',
  components: {
      HomeCta,
    CategoriesList,
  },
  props: {
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>
