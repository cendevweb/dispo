<template>
    <section class="relative ml-20 p-4">
		<div>

			<h2 class="flex flex-grow text-white">Categories en recherches de partenaires :</h2>
			<div class="flex flex-wrap gap-14 mt-4">
				<div
          v-for="category in categories"
          v-bind:key="category.name"
          class="w-64 flex-none text-white border border-custom-cyan "
        >
					<img :src="category.image" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow uppercase">{{category.name}}</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">{{category.seeking}}</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

interface Category {
  name: string,
  image: string,
  seeking: number,

}

export default defineComponent({
  name: 'CategoriesList',
  props: {
  },
  data(): {
    categories: Category[],
  } {
    return {
      categories: [],
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
  created() {
    this.categories = [
      {
        name: 'chess',
        image: 'src/assets/chess_thumbnail.jpeg',
        seeking: 2485,
      },
      {
        name: 'league of legends',
        image: 'src/assets/lol_thumbnail.jpg',
        seeking: 417,
      },
      {
        name: 'rocket league',
        image: 'src/assets/rl_thumbnail.jpg',
        seeking: 99,
      },
      {
        name: 'chess',
        image: 'src/assets/chess_thumbnail.jpeg',
        seeking: 2485,
      },
      {
        name: 'league of legends',
        image: 'src/assets/lol_thumbnail.jpg',
        seeking: 417,
      },
      {
        name: 'rocket league',
        image: 'src/assets/rl_thumbnail.jpg',
        seeking: 99,
      },
    ]
  },
})
</script>
