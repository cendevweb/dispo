<template>
    <div class="flex flex-col w-full place-content-center items-center  mt-16 gap-2">
        <p class="font-body text-custom-cyan font-semibold text-3xl w-1/2">Choose a login method</p>
        <button class="uppercase h-12 mt-6 text-white w-1/2 rounded bg-blue-800 hover:bg-blue-900">
            <fa :icon="['fab', 'facebook']"></fa>
            Facebook
        </button>
        <button
            class="uppercase h-12 mt-3 w-1/2 text-white rounded bg-red-800 hover:bg-red-900"
            @click="googleLogin"
        >
            <fa :icon="['fab', 'google']"></fa>
            Google
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Login',
    components: {},
    props: {},
    setup: () => {
        return
    },
    methods: {
        async googleLogin() {
            // @ts-ignore
            const googleUser = await this.$gAuth.signIn()
            const profile = googleUser.getBasicProfile()
            localStorage.setItem('user', JSON.stringify({
                name: profile.getName(),
                email: profile.getEmail(),
                image: profile.getImageUrl(),
                id_token: googleUser.getAuthResponse().id_token
            }))
            this.$router.push("/")
        }
    }
})
</script>
