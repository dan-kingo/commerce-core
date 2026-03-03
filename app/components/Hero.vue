<script setup lang="ts">
import logo from "~/assets/img/logo.png"
</script>

<template>
    <div class="min-h-[calc(100vh-150px)] grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto py-6">
        <div class="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <p class="text-indigo-600 text-sm bg-gray-300 border rounded-full px-2">NOW IN PUBLIC BETA</p>
            <h1 class="uppercase font-extrabold text-3xl md:text-4xl lg:text-5xl">Build your empire, <span
                    class="text-indigo-600 ">one sale</span> at a time.</h1>
            <p class="text-center max-w-2xl">The modulal commerce engine designed for the next generation of merchants. Build, launch and scale
                your brand effortlessly.</p>
            <InputGroup class="w-full max-w-lg py-5 border border-gray-300 rounded-lg">
                <InputGroupInput  placeholder="Your email address" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton class="py-4 cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700 hover:text-white">
                        
                        Get Started
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <div class="flex gap-4">
                <Button class="bg-indigo-600 cursor-pointer text-white hover:bg-indigo-700">View Demo</Button>
                <Button variant="ghost"
                    class="cursor-pointer border border-indigo-600 text-indigo-600 hover:text-indigo-600">Learn
                    More</Button>
            </div>
        </div>

        <div class="w-full flex justify-center md:justify-end">
            <div
                class="w-full max-w-lg aspect-4/3 rounded-2xl border border-dashed border-gray-300 bg-white/60 flex items-center justify-center p-8">
                <img :src="logo" alt="Hero placeholder" class="max-h-full max-w-full object-contain" />
            </div>
        </div>
    </div>
</template>