<template>
    <head title="Vue - Users" />
    <div class="flex justify-center mb-6">
        <div class="flex items-center mr-10">
            <h1 class="font-bold text-3xl flex justify-center">Users</h1>
            <Link href="/users/create" class="text-green-500 text-sm ml-2">
                New User</Link
            >
        </div>

        <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="border-2 rounded-lg"
        />
    </div>
    <!-- component -->
    <div class="flex justify-center">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow rounded-lg overflow-hidden">
                    <table class="min-w-full divide-y leading-normal center">
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="user in users.data" :key="user.id">
                                <td
                                    class="px-5 py-5 border-b whitespace-nowrap"
                                >
                                    <div class="flex items-center">
                                        <div class="pr-64">
                                            <div
                                                class="text-gray-900 text-sm font-medium"
                                            >
                                                {{ user.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 whitespace-nowrap text-right text-sm font-bold"
                                >
                                    <a
                                        href="'/users/${user.id}/edit'"
                                        class="text-indigo-600 hover:text-indigo-900"
                                        >Edit</a
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Paginator -->
    <Pagination :links="users.links" class="mt-6" />

    <div style="margin-top: 400px">
        <p>The current time is {{ time }}.</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>
<script setup>
import Pagination from "../../Shared/Pagination.vue";
import { ref, watch } from "vue"; // watch helps keeping track of the search
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";

let props = defineProps({
    time: String,
    users: Object,
    filters: Object,
});

let search = ref(props.filters.search);

watch(
    search,
    debounce(function (value) {
        console.log("triggered");
        Inertia.get(
            "/users",
            { search: value },
            {
                preserveState: true,
                replace: true, // replaces each search in users search bar :D
            }
        );
    }, 300)
);
</script>
