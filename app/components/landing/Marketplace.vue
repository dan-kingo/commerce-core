<template>
    <section id="marketplace" class="px-4 py-16 md:py-20">
        <div class="mx-auto max-w-5xl text-center">
            <h2 class="text-4xl md:text-6xl font-medium tracking-tight text-black">
                Join millions growing with our <span class="text-brand">Marketplace</span>
            </h2>

            <form
                class="mx-auto mt-8 flex w-full md:max-w-3xl items-center rounded-full border border-gray-300 bg-white p-1 gap-1"
                @submit.prevent>
                <input type="email" placeholder="Enter your email address"
                    class="h-10 min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-900 placeholder:text-gray-600 focus:outline-none md:h-12 md:px-5 md:text-lg" />
                <button type="submit"
                    class="h-10 shrink-0 whitespace-nowrap rounded-full bg-brand hover:bg-brand-hover px-4 text-sm font-semibold text-white transition-colors cursor-pointer md:h-12 md:px-8 md:text-lg">
                    Start free trial
                </button>
            </form>

            <p class="mt-5 text-2xl text-gray-600 md:text-base">
                You agree to receive our marketing emails.
            </p>
        </div>
    </section>

    <section class=" rounded-t-4xl bg-white px-4 py-16 md:py-20">
        <div class="mx-auto max-w-6xl">
            <h2 class="max-w-xl text-4xl font-medium leading-tight tracking-tight text-black md:text-6xl">
                The global platform for commerce
            </h2>

            <div class="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
                <article class="rounded-2xl bg-gray-100 p-7 md:p-10">
                    <h3 class="text-4xl font-medium tracking-tight text-black md:text-5xl">27+</h3>
                    <p class="mt-3 text-xl text-gray-600 md:text-3xl">Total active users</p>
                </article>

                <article class="rounded-2xl bg-gray-100 p-7 md:p-10">
                    <h3 class="text-4xl font-medium tracking-tight text-black md:text-5xl">193+</h3>
                    <p class="mt-3 text-xl text-gray-600 md:text-3xl">Total storefronts opened</p>
                </article>
            </div>
        </div>
    </section>
</template>
