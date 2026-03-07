<script setup lang="ts">
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '~/components/ui/sidebar'
</script>

<template>
    <SidebarProvider>
        <Sidebar />

        <SidebarInset class="min-h-screen bg-gray-100 font-brand">
            <header class="sticky   top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
                <SidebarTrigger />
                <span class="text-sm font-medium">COMMERCECORE</span>
            </header>

            <main class="p-4">
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>