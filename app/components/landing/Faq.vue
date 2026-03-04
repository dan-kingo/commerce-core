<template>
    <section id="faq" class="px-4 py-16 md:py-20 mb-12 bg-primary rounded-t-4xl">
        <div class="mx-auto max-w-4xl">
            <h2 class="mt-2 text-center text-4xl md:text-5xl font-semibold tracking-tight text-gray-100">
                Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible
                class="mt-10 w-full rounded-2xl   px-4 md:px-6">
                <AccordionItem v-for="(item, index) in faqs" :key="item.question" :value="`item-${index}`"
                    class="border-b border-gray-200 last:border-b-0">
                    <AccordionTrigger class="py-5 text-left text-lg md:text-2xl font-medium text-gray-50 cursor-pointer">
                        {{ item.question }}
                    </AccordionTrigger>
                    <AccordionContent class="pb-5 text-base md:text-lg leading-relaxed text-gray-300">
                        {{ item.answer }}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </section>
</template>