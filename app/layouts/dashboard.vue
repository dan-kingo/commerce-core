<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

const { user,logout } = useAuth();
</script>

<template>
    <SidebarProvider>
        <DashboardSidebar />

        <SidebarInset class="min-h-screen bg-gray-100 font-brand">
            <header class="sticky   top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur justify-between">
                <SidebarTrigger class="cursor-pointer" />

                <div class="flex gap-4 items-center">
                    <p>{{ user?.full_name }}</p>
                    <Badge class="bg-brand/15 text-brand/70" variant="outline">{{ user?.role }}</Badge>
                    <Button @click.prevent="logout" variant="outline" size="icon" class="cursor-pointer">
                        <Icon name="lucide:log-out"/>
                    </Button>
                </div>
            </header>

            <main class="p-4">
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>