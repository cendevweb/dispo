<template>
    <div class="ml-20 mt-12">
        <div class="border border-custom-cyan w-80 rounded-md py-3 px-5 flex">
            <div class="rounded-full h-16 w-16 bg-white">
                <svg class="flex-none fill-current text-custom-blue-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex-grow text-white place-content-center">
                <p>Julien</p>
                <p>League fan</p>
            </div>
            <div class="flex flex-grow gap-3">
                <svg class="fill-current text-white w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="fill-current text-white w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                </svg>
                <svg class="fill-current text-white w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import CategoriesList from './components/CategoriesList.vue'
import HomeCta from './components/HomeCta.vue'

export default defineComponent({
    name: 'Friends',
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
