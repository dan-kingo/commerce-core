<script setup lang="ts">
import {
    LayoutDashboard,
    FileText,
    Hospital,
    Boxes,
    ShoppingCart,
    MessageSquare,
    UserCircle2,
} from 'lucide-vue-next'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '~/components/ui/sidebar'

const route = useRoute()

const menuItems = [
    { title: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
    { title: 'Content', to: '/dashboard/content', icon: FileText },
    { title: 'Hospital', to: '/dashboard/hospital', icon: Hospital },
    { title: 'Manage Products', to: '/dashboard/manage-products', icon: Boxes },
    { title: 'Manage Order', to: '/dashboard/manage-order', icon: ShoppingCart },
    { title: 'Messages', to: '/dashboard/messages', icon: MessageSquare },
]

const isActive = (to: string) =>
    route.path === to || route.path.startsWith(`${to}/`)
</script>

<template>
    <Sidebar collapsible="icon" variant="sidebar" class="border-r">
        <SidebarHeader class="border-b">
            <div class="flex items-center gap-2 px-2 py-1.5">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold">
                    D
                </div>
                <div class="group-data-[collapsible=icon]:hidden">
                    <p class="text-sm font-semibold">Dashboard</p>
                    <p class="text-xs text-muted-foreground">Admin Panel</p>
                </div>
            </div>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in menuItems" :key="item.title">
                            <SidebarMenuButton as-child :is-active="isActive(item.to)" :tooltip="item.title">
                                <NuxtLink :to="item.to">
                                    <component :is="item.icon" class="size-4" />
                                    <span>{{ item.title }}</span>
                                </NuxtLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter class="border-t">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <UserCircle2 class="size-4" />
                        <div class="group-data-[collapsible=icon]:hidden text-left">
                            <p class="text-sm font-medium leading-none">Dan</p>
                            <p class="text-xs text-muted-foreground">dan@example.com</p>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
    </Sidebar>
</template>