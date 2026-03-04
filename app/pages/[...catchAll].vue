<script setup lang="ts">
    definePageMeta({
        layout: false
    })
</script>

<template>
    <div class="flex items-center justify-center h-screen bg-gray-200">
        <div class="text-center gap-1 flex flex-col items-center">
            <h2 class="text-7xl font-bold mb-4">404 </h2>
            <p class="text-lg mb-6 py-2">Sorry, the page you are looking for does not exist.</p>
            <Button class="bg-brand hover:bg-brand-hover text-white cursor-pointer" @click="$router.push('/')"> <Icon name="lucide:arrow-left" class="mr-2" />Go Home</Button>
        </div>
    </div>
</template>