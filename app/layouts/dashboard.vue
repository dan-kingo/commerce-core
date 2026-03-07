
<template>
    <SidebarProvider>
        <DashboardSidebar />

        <SidebarInset class="min-h-screen bg-gray-100 font-brand">
            <header class="sticky   top-0 z-10 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
                <SidebarTrigger class="cursor-pointer" />
            </header>

            <main class="p-4">
                <slot />
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>