<template>
    <header class="relative z-10 flex-none py-3 pl-9 pr-3 ml-7 sm:pr-4 md:pr-3.5 lg:px-6 flex items-center space-x-4">
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
    </header>
    <div class="absolute inset-y-0 left-0 flex flex-col z-10 flex-none w-12 py-4 bg-customblue-100 items-center space-y-4">
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
		</svg>
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
		</svg>
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
		</svg>
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
		</svg>
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
		</svg>
        <svg class="w-6 fill-current text-custom-cyan" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
		</svg>
    </div>
    <section class="relative ml-12 p-4">
        <h1 class="font-body text-custom-cyan font-normal text-5xl text-center">Que voulez vous faire ?</h1>
		<div class="relative place-content-center text-center  mx-48 mt-10">
			<button class="rounded bg-custom-bordeau px-4 py-2 mr-4 text-white font-light text-sm">Rechercher des partenaires</button>
			<button class="rounded bg-custom-bordeau px-4 py-2 text-white ml-4 font-light text-sm">Se rendre Dispo !</button>
		</div>
    </section>
    <section class="relative ml-20 p-4">
		<div>

			<h2 class="flex flex-grow text-white">Categories en recherches de partenaires :</h2>
			<div class="flex flex-wrap gap-14 mt-4">
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/chess_thumbnail.jpeg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">CHESS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">2365</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/league-of-legends_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">LEAGUE OF LEGENDS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">842</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/rl_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">ROCKET LEAGUE</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">91</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/chess_thumbnail.jpeg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">CHESS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">2365</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/league-of-legends_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">LEAGUE OF LEGENDS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">842</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/rl_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">ROCKET LEAGUE</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">91</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/chess_thumbnail.jpeg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">CHESS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">2365</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/league-of-legends_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">LEAGUE OF LEGENDS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">842</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/rl_thumbnail.jpg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">ROCKET LEAGUE</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">91</p>
							<svg class="align-middle fill-current text-white w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>
					</div>
				</div>
				<div class="w-1/6 flex-none text-white border border-custom-cyan">
					<img src="../assets/chess_thumbnail.jpeg" class="h-40 w-full"/>
					<div class="bg-custom-bordeau h-6 flex px-2">
						<p class="flex-grow">CHESS</p>
						<div class="flex items-center justify-end flex-grow-0 w-16">
							<p class="mr-1">2365</p>
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

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
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
