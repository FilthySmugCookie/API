<template>
    <h1>Hello, {{ name }}</h1>
    <p>In this series, we shall die and carry on</p>
    <Nav />
    <!-- <ul>
        <li
            v-bind:key="framework"
            v-for="framework of frameworks"
            v-text="framework"
        ></li>
    </ul> -->
</template>

<script>
import Nav from "../Shared/Nav";

export default {
    components: { Nav },
};
</script>
