<script setup lang="ts">
import logo from "~/assets/img/logo.png"
</script>

<template>
    <div class="min-h-[calc(100vh-150px)] flex items-center gap-10 max-w-6xl mx-auto py-6">
        <div class="flex flex-col items-center justify-center text-center gap-6">
            <p class="text-brand text-sm bg-gray-300 border rounded-full px-2">NOW IN PUBLIC BETA</p>
            <h1 class="uppercase font-extrabold text-3xl md:text-4xl lg:text-5xl">Build your empire, <span
                    class="text-brand ">one sale</span> at a time.</h1>
            <p class="text-center max-w-2xl">The modulal commerce engine designed for the next generation of merchants.
                Build, launch and scale
                your brand effortlessly.</p>
            <!-- <InputGroup class="w-full max-w-lg py-5 border border-gray-300 rounded-lg">
                <InputGroupInput  placeholder="Your email address" />
                <InputGroupAddon align="inline-end">
                    <InputGroupButton class="py-4 cursor-pointer bg-brand text-white hover:bg-brand-hover hover:text-white">
                        
                        Get Started
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup> -->
            <div class="flex gap-4">
                <Button class="bg-brand cursor-pointer text-white hover:bg-brand-hover">Get started for free</Button>
                <!-- <Button variant="ghost"
                    class="cursor-pointer border border-brand text-brand hover:text-brand">Learn
                    More</Button> -->
            </div>
        </div>

        <!-- <div class="w-full flex justify-center md:justify-end">
            <div
                class="w-full max-w-lg aspect-4/3 rounded-2xl border border-dashed border-gray-300 bg-white/60 flex items-center justify-center p-8">
                <img :src="logo" alt="Hero placeholder" class="max-h-full max-w-full object-contain" />
            </div>
        </div> -->
    </div>
</template>