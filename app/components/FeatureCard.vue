<script setup lang="ts">
interface FeatureCardProps {
    iconName: string
    imageAlt?: string
    heading: string
    title: string
    description: string
}

withDefaults(defineProps<FeatureCardProps>(), {
    imageAlt: 'Feature image'
})
</script>

<template>
    <article class="rounded-2xl bg-[#141A1A] text-gray-100 p-6 shadow-sm border border-gray-800">
        <div class="py-4 px-6 rounded-md  bg-brand/20 w-fit">
            <Icon :name="iconName" size="32px" class="text-brand " />
        </div>

        <div class="mt-5 space-y-2">
            <p class="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {{ heading }}
            </p>
            <h3 class="text-xl md:text-2xl font-bold leading-tight text-white">
                {{ title }}
            </h3>
            <p class="text-sm md:text-base text-gray-300 leading-relaxed">
                {{ description }}
            </p>
        </div>
    </article>
</template>