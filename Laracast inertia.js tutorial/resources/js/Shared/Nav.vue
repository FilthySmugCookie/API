<template>
    <nav>
        <ul class="flex space-x-6">
            <li>
                <NavLink href="/" :active="$page.component == 'Home'"
                    >Home</NavLink
                >
            </li>
            <li>
                <NavLink
                    href="/users"
                    :active="$page.component == 'Users/Index'"
                    >Users</NavLink
                >
            </li>
            <li>
                <NavLink
                    href="/settings"
                    :active="$page.component == 'Settings'"
                    >Settings</NavLink
                >
            </li>
            <li>
                <NavLink href="/logout" method="post">Log Out</NavLink>
            </li>
            <!-- Weird way to use a button -->
            <!-- <li>
                <Link
                    href="/logout"
                    class="text-blue-500 hover:underline"
                    method="post"
                    :data="{ foo: 'bar' }"
                    as="button"
                    >Log Out</Link
                >
            </li> -->
        </ul>
    </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
    components: { NavLink },
};
</script>
