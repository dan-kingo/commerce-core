<script setup lang="ts">
import logo from '~/assets/img/logo.png'

const isOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 12
}

const toogleMenu = () => {
    isOpen.value = !isOpen.value
}
const route = useRoute()

const isSectionLink = (path: string) => !path.startsWith('/')
const normalizeHash = (path: string) => (path.startsWith('#') ? path : `#${path}`)

const resolveLink = (path: string) => {
    if (isSectionLink(path)) {
        return {
            path: route.path,
            hash: normalizeHash(path)
        }
    }

    return path
}

const isActiveLink = (path: string) => {
    if (isSectionLink(path)) {
        return route.hash === normalizeHash(path)
    }

    return route.path === path
}

onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
    isOpen.value = false
})
</script>

<template>
    <nav class="sticky top-0 z-40 flex justify-between py-3 mb-6 transition-colors duration-300   px-2 md:px-12"
        :class="isScrolled ? 'bg-gray-100' : 'bg-transparent'">

        <!-- left side  -->
        <div class="flex flex-1 justify-start">
            <NuxtLink to="/" class="flex items-center">
                <img :src="logo" class="w-fit h-8" />
                <span class="text-xl font-bold ">COMMERCECORE</span>
            </NuxtLink>
        </div>

        <!-- middle one -->
        <div class=" hidden md:flex items-center">
            <ul class="flex space-x-8">
                <li v-for="link in navLinks" :key="link.name">
                    <NuxtLink :to="resolveLink(link.path)"
                        class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200"
                        :class="{
                            'text-brand bg-gray-200 font-semibold': isActiveLink(link.path)
                        }">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- right side -->

        <div class="hidden md:flex flex-1 justify-end">
            <div class="flex gap-2 items-center">
                <NuxtLink to="/login"
                    class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200">
                    Login</NuxtLink>
                <Button class="bg-brand hover:bg-brand-hover text-white mr-2 cursor-pointer"
                    @click="$router.push('/signup')">Start Free Trial</Button>
            </div>
        </div>

        <!-- menu button  -->
        <Button variant="outline" @click="toogleMenu" class="cursor-pointer md:hidden block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.633h16.5M3.75 12h16.5m-16.5 5.367h16.5" />
            </svg>
        </Button>

        <div v-if="isOpen" class="md:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300"
            @click="isOpen = false">
            <div class="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out"
                :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }" @click.stop>
                <!-- Header inside drawer -->
                <div class="flex items-center justify-between p-5 border-b gap-2">
                    <div class="flex items-center gap-2 mr-2">
                        <img :src="logo" class="h-8 w-fit" alt="Logo" />
                        <span class="text-lg font-bold">COMMERCECORE</span>
                    </div>
                    <Button class="cursor-pointer" variant="ghost" @click="isOpen = false" aria-label="Close menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>

                <!-- Mobile nav links -->
                <div class="flex flex-col px-5 py-8 gap-2">
                    <NuxtLink v-for="link in navLinks" :key="link.path" :to="resolveLink(link.path)"
                        class="py-3 px-5 text-lg text-gray-700 hover:text-indigo-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        :class="{
                            'text-brand bg-gray-100 font-semibold': isActiveLink(link.path)
                        }" @click="isOpen = false">
                        {{ link.name }}
                    </NuxtLink>

                    <!-- Auth buttons in mobile menu -->
                    <div class="mt-10 flex flex-col gap-4 px-5">
                        <NuxtLink to="/login"
                            class="text-center py-1.5 px-3 text-gray-700 hover:text-indigo-500 hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-300"
                            @click="isOpen = false">
                            Login
                        </NuxtLink>
                        <Button class="cursor-pointer bg-brand hover:bg-brand-hover" size="lg" block
                            @click="$router.push('/signup'); isOpen = false">
                            Start Free Trial
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>