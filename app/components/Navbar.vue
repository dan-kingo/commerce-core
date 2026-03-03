<script setup lang="ts">
import logo from '~/assets/img/logo.png'

const isOpen = ref(false)
const toogleMenu = () => {
    isOpen.value = !isOpen.value
}
const route = useRoute()

watch(() => route.path, () => {
    isOpen.value = false
})
</script>

<template>
    <nav class="flex justify-between px-2  py-3 rounded-xl bg-gray-100 mb-12">

        <!-- left side  -->
        <div class="flex flex-1 justify-start">
            <NuxtLink to="/" class="flex items-center">
                <img :src="logo" class="w-fit h-8"/>
                <span class="text-xl font-bold ">COMMERCECORE</span>
            </NuxtLink>
        </div>

        <!-- middle one -->
        <div class=" hidden md:flex items-center">
            <ul class="flex space-x-8">
                <li v-for="link in navLinks" :key="link.name">
                    <NuxtLink :to="link.path" class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200"
                        :class="{
                            'text-indigo-500 bg-gray-200': $route.path === link.path
                        }">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- right side -->

        <div class="hidden md:flex flex-1 justify-end">
            <div class="flex gap-2 items-center">
                <NuxtLink to="/login" class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200">Login</NuxtLink>
                <Button class="bg-indigo-600 hover:bg-indigo-700 text-white mr-2 cursor-pointer" @click="$router.push('/signup')">Start Free Trial</Button>
            </div>
        </div>

        <!-- menu button  -->
        <Button variant="outline" @click="toogleMenu"  class="cursor-pointer md:hidden block">
            <Icon name="lucide:menu" />
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
                    <Button variant="ghost" @click="isOpen = false" aria-label="Close menu">
                        <Icon name="lucide:x" />
                    </Button>
                </div>

                <!-- Mobile nav links -->
                <div class="flex flex-col px-5 py-8 gap-2">
                    <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
                        class="py-3 px-5 text-lg text-gray-700 hover:text-indigo-500 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        :class="{
                            'text-indigo-500 bg-gray-100 font-medium': route.path === link.path
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
                        <Button class="cursor-pointer bg-indigo-600 hover:bg-indigo-700" size="lg" block
                            @click="$router.push('/signup'); isOpen = false">
                            Start Free Trial
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
                
    </nav>
</template>