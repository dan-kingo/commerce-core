<template>
  <section id="pricing" class="px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2
        class="mt-2 text-center text-4xl md:text-5xl font-semibold tracking-tight text-gray-900"
      >
        Scale Your Story.
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article
          v-for="plan in plans"
          :key="plan.name"
          class="rounded-xl border bg-white p-4 md:p-5"
          :class="
            plan.highlighted ? 'border-brand shadow-sm' : 'border-gray-300'
          "
        >
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-2xl font-semibold text-gray-900">
              {{ plan.name }}
            </h3>
            <span
              v-if="plan.badge"
              class="rounded-full bg-brand/20 text-brand px-3 py-1 text-xs font-semibold tracking-wide"
            >
              {{ plan.badge }}
            </span>
          </div>

          <div class="mt-4 flex items-baseline gap-2 flex-wrap">
            <p class="text-3xl font-bold tracking-tight text-gray-900">
              {{ plan.price }}
            </p>
            <p v-if="plan.subtitle" class="text-xl text-gray-600">
              {{ plan.subtitle }}
            </p>
          </div>

          <ul class="mt-6 space-y-2">
            <li
              v-for="item in plan.features"
              :key="item"
              class="flex items-start gap-2 text-gray-700 text-lg"
            >
              <span
                class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white"
              >
                <Icon name="lucide:check" />
              </span>
              <span>{{ item }}</span>
            </li>
          </ul>

          <button
            type="button"
            class="mt-6 w-full rounded-lg border py-2.5 text-xl font-medium transition-colors cursor-pointer"
            :class="
              plan.highlighted
                ? 'border-brand bg-brand text-white hover:bg-brand-hover'
                : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-100'
            "
          >
            {{ plan.cta }}
          </button>
        </article>
      </div>
    </div>
  </section>
</template>
