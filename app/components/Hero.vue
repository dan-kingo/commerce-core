<script setup lang="ts">
import dashboard from "~/assets/img/dashboard.jpg"
</script>

<template>
    <section class="relative overflow-hidden">
        
        <div
            class="absolute inset-0 bg-[linear-gradient(to_left,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size[80px_80px] opacity-30 pointer-events-none">
        </div>

        
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>

        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <!-- LEFT: Text content – aligned left -->
                <div class="text-left space-y-8">
                    <h1
                        class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-gray-900 leading-tight">
                        Launch • <span class="text-brand">Operate •</span>
                          Scale
                    </h1>

                    <p class="text-xl md:text-2xl text-gray-700 max-w-2xl">
                        Build your dream storefront fast. Manage everything in one powerful place. Grow smarter with
                        data-driven insights.
                    </p>

                   

                    <!-- Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 mt-10">
                        <Button class="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md cursor-pointer w-full sm:w-auto"
                            @click="$router.push('/signup')">View Demo</Button>
                        <Button variant="ghost" class="px-6 py-3 rounded-md border-2 border-brand text-brand cursor-pointer w-full sm:w-auto"
                            @click="$router.push('/learn-more')">Learn More</Button>
                    </div>
                </div>

               
                <div class="relative lg:order-last">
                    
                    <div
                        class="absolute -inset-4 lg:-inset-8 bg-linear-to-br from-indigo-600/20 to-transparent rounded-3xl -rotate-3">
                    </div>

                   
                    <img :src="dashboard"
                        alt="Modern e-commerce storefront dashboard"
                        class="relative rounded-2xl shadow-2xl object-top-left w-full h-auto lg:h-150 border border-gray-200" />
                </div>

            </div>
        </div>
    </section>
</template>