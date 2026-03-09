<script setup lang="ts">
import { UserCircle2 } from 'lucide-vue-next';
import logo from '~/assets/img/logo.png'
import {useAuth} from "~/composables/useAuth";
const route = useRoute()
const isActive = (to: string) =>
    route.path === to || route.path.startsWith(`${to}/`)

    const { user } = useAuth()
</script>

<template>
    <Sidebar collapsible="icon" variant="sidebar" class="border-r">
        <SidebarHeader class="border-b">
            <div class="flex items-center gap-2 px-2 py-1.5">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/20 text-primary-foreground font-semibold">
                    <img :src="logo" alt="">
                </div>
                <div class="group-data-[collapsible=icon]:hidden">
                    <p class="text-sm font-semibold">COMMERCECORE</p>
                    <p class="text-xs text-muted-foreground">Dashboard</p>
                </div>
            </div>
        </SidebarHeader>

        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in menuItems" :key="item.title">
                            <SidebarMenuButton as-child :is-active="isActive(item.to)" :tooltip="item.title" class="hover:bg-brand/20 hover:text-brand/70   router-link-active:bg-brand/20
         router-link-active:text-brand">
                                <NuxtLink :to="item.to">
                                    <component :is="item.icon" class="size-4  " />
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
                       <img v-if="user?.avatar_url" :src="user?.avatar_url" alt="user image" class="size-8 rounded-full bg-muted" />
                       <div v-else class="size-8 rounded-full bg-brand/30 text-brand/70 flex items-center justify-center font-medium">
                       {{user?.full_name?.[0]?.toUpperCase() || 'U'}}
                       </div>
                        <div class="group-data-[collapsible=icon]:hidden text-left">
                            <p class="text-sm font-medium leading-none">{{ user?.full_name }}</p>
                            <p class="text-xs text-muted-foreground">{{ user?.email }}</p>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />
    </Sidebar>
</template>