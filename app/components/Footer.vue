<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="px-4 py-6">
        <div
            class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-600 md:flex-row">
            <p>&copy; {{ currentYear }} CommerceCore. All rights reserved.</p>

            <nav class="flex items-center gap-5">
                <NuxtLink to="/privacy" class="hover:text-gray-900 transition-colors">Privacy Policy</NuxtLink>
                <NuxtLink to="/terms" class="hover:text-gray-900 transition-colors">Terms & Conditions</NuxtLink>
                <NuxtLink to="#pricing" class="hover:text-gray-900 transition-colors">Pricing</NuxtLink>
            </nav>
        </div>
    </footer>
</template>