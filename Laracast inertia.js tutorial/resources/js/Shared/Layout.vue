<template>
    <head>
        <title>Project Failure</title>
        <meta
            type="description"
            content="information about my app"
            head-key="description"
        />
    </head>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">Wordle ze slave</h1>
                <p class="text-lg ml-4">Welcome back , {{ username }}!</p>
            </div>
            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="justify-items-center">
            <iframe
                class="mb-6"
                width="100%"
                frameborder="no"
                scrolling="no"
                seamless
                src="https://player.simplecast.com/fd0bd2ba-c553-466c-a060-b144797ce369?dark=false"
            ></iframe>
            <slot />
        </div>
    </section>
</template>

<script>
import Nav from "./Nav.vue";
import { Head } from "@inertiajs/inertia-vue3";

export default {
    components: { Nav, Head },
    computed: {
        username() {
            return this.$page.props.auth.user.username;
        },
    },
};
</script>
