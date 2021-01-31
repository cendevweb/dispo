<template>
    <div class="fixed w-full z-10 flex-none py-3 pl-16 sm:pr-4 md:pr-3.5 top-0 flex items-center space-x-4 bg-customblue-200">
        <div class="flex-auto flex items-center min-w-0 space-x-5 ml-4">
            <svg width="171" height="21" fill="none" class="flex-none text-black dark:text-white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.414.441c-4.377 0-7.113 2.189-8.207 6.566 1.642-2.188 3.556-3.01 5.745-2.462 1.249.312 2.141 1.218 3.13 2.22 1.608 1.634 3.471 3.525 7.54 3.525 4.376 0 7.112-2.189 8.206-6.566-1.641 2.189-3.556 3.01-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22C22.345 2.332 20.482.44 16.414.44zM8.207 10.29c-4.377 0-7.113 2.189-8.207 6.566 1.641-2.189 3.556-3.01 5.745-2.463 1.249.313 2.141 1.218 3.13 2.221 1.608 1.634 3.471 3.524 7.54 3.524 4.376 0 7.112-2.188 8.206-6.565-1.641 2.188-3.556 3.009-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22-1.61-1.634-3.472-3.525-7.54-3.525z" fill="#16BDCA"></path>
            </svg>
        </div>
        <div class="flex items-center space-x-3 lg:space-x-5">
            <div class="hidden md:flex items-center space-x-1 lg:space-x-3.5">
				<button type="button" class="group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-700 dark:text-white">
					<span class="sr-only">Switch to vertical split layout</span>
					<svg class="stroke-current text-custom-cyan" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
					</svg>
				</button>
				<button type="button" class="group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400">
					<span class="sr-only">Switch to horizontal split layout</span>
					<svg class="stroke-current text-custom-cyan" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
					</svg>
				</button>
				<button type="button" class="group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400">
					<span class="sr-only">Switch to preview-only layout</span>
					<svg class="stroke-current text-custom-cyan" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
				</button>
            </div>
            <div class="hidden md:block w-px h-8 bg-custom-cyan dark:bg-custom-cyan"></div>
            <button type="button" class="group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400"><img src="../assets/2021-01-22_21h54_27.png" class="w-12"><span class="dark:hidden sr-only">Switch to dark theme</span></button>
        </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
  },
  setup: () => {
    console.log("ytoto")
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
