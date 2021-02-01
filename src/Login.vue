<template>
   <button class="w-96 bg-white text-blue-500" @click="googleLogin">CLICK TO GOOGLE LOGIN</button>
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
