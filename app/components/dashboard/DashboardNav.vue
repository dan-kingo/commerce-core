<script setup lang="ts">
import logo from '~/assets/img/logo.png'
import { useAuth } from '@/composables/useAuth'
const isScrolled = ref(false)
const handleScroll = () => {
    isScrolled.value = window.scrollY > 12
}
onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
const { user, logout } = useAuth()
</script>
<template>
    <nav class="sticky top-0 z-40 flex justify-between py-3 mb-6 transition-colors duration-300 bg-white  px-4 "
        :class="isScrolled ? 'bg-gray-100' : 'bg-transparent'">
        <div class="">
            <NuxtLink to="/" class="flex items-center">
                <img :src="logo" class="w-fit h-8" />
                <span class="text-xl font-bold ">COMMERCECORE</span>
            </NuxtLink>
        </div>
        <div class="flex gap-4 items-center">
            <p class="hidden md:block">{{ user?.full_name || user?.email || 'Guest' }}</p>
            <Badge class="hidden md:block text-brand/70 bg-brand/20" variant="outline">{{ user?.role || 'user' }}
            </Badge>
            <Button class="cursor-pointer" variant="outline" size="sm" @click="logout">
                <Icon name="lucide:log-out" />
            </Button>
        </div>
    </nav>
</template>