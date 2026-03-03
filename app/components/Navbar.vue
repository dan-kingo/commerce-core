<script setup lang="ts">
import logo from '~/assets/img/logo.png'
import Button from './ui/button/Button.vue';
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
        <div class="flex items-center">
            <ul class="flex space-x-8">
                <li v-for="link in navLinks" :key="link.name">
                    <NuxtLink :to="link.path" class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200">
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- right side -->

        <div class="flex flex-1 justify-end">
            <div class="flex gap-2 items-center">
                <NuxtLink to="/login" class="text-gray-600 hover:text-indigo-500 transition-colors duration-200 px-3 py-1.5 rounded-md hover:bg-gray-200">Login</NuxtLink>
                <Button class="bg-indigo-600 hover:bg-indigo-700 text-white mr-2 cursor-pointer" @click="$router.push('/signup')">Start Free Trial</Button>
            </div>
        </div>
    </nav>
</template>