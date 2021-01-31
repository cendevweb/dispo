<template>
    LOGIN
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import CategoriesList from './components/CategoriesList.vue'
import HomeCta from './components/HomeCta.vue'

export default defineComponent({
    name: 'Login',
    components: {},
    props: {},
    setup: () => {
        const count = ref(0)
        return { count }
    }
})
</script>
