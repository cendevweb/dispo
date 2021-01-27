
<template>
    <section class="relative ml-12 p-4 mt-16">
        <h1 class="font-body text-custom-cyan font-normal text-5xl text-center">Que voulez vous faire ?</h1>
		<div class="relative place-content-center text-center  mx-32 mt-10">
			<button class="rounded bg-custom-bordeau px-4 py-2 mr-4 text-white text-sm">Rechercher des partenaires</button>
			<router-link :to="{name: 'Dispo'}" class="rounded bg-custom-bordeau px-4 py-2 text-white ml-4 text-sm">Se rendre Dispo !</router-link>
		</div>
    </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeCta',
  props: {
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
