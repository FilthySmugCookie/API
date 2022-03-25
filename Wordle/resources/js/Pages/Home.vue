<template>
    <layout>
        <h1 class="text-4xl font-bold">Hello, {{ name }}</h1>
        <p>In this series, we shall die and carry on</p>
    </layout>
    <!-- <ul>
        <li
            v-bind:key="framework"
            v-for="framework of frameworks"
            v-text="framework"
        ></li>
    </ul> -->
</template>

<script>
import Layout from "../Shared/Layout";

export default {
    components: { Layout },
};
</script>
