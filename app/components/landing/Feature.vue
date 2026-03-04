<template>
    <section>
        <div id="features" class="flex flex-col gap-4 md:px-16 px-2 my-12 bg-primary rounded-t-4xl py-8 text-gray-50">
            <h1 class="text-5xl md:text-6xl font-medium md:pt-24 md:pb-12 pb-6 pt-12">Smarter selling starts here
            </h1>
            
            <div class="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
                <div v-for="feature in featureCards" :key="feature.title">
                    <FeatureCard v-bind="feature" />
                </div>
            </div>

            <h3 class="text-xl md:text-2xl  italic text-gray-100  max-w-3xl md:py-12">
                "Every CommerceCore feature is designed to help you build, manage, and grow your online store with ease."
            </h3>
        </div>
    </section>
</template>