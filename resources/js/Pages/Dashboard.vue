<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, router } from "@inertiajs/vue3";

const sendNotification = () => {
    router.post(route("notify"));
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="p-6 overflow-hidden text-center bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg"
                >
                    <button
                        @click="sendNotification"
                        class="p-4 text-center uppercase bg-green-600 rounded shadow hover:bg-green-700 hover:text-white hover:shadow-md"
                    >
                        Send notification
                    </button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
