<script setup lang="ts">
</script>

<template>
  <section class="hero relative overflow-hidden bg-white min-h-screen flex items-center py-12">

    <!-- ── Soft background shapes ────────────────────────────────── -->
    <div class="blob blob-a"></div>
    <div class="blob blob-b"></div>
    <div class="blob blob-c"></div>

    <!-- ── Dot grid ──────────────────────────────────────────────── -->
    <div class="absolute inset-0 dot-grid pointer-events-none"></div>

    <!-- ── Main content ──────────────────────────────────────────── -->
    <div class="relative max-w-6xl mx-auto px-6 lg:px-10  pb-20 w-full text-center">

      <!-- Eyebrow badge -->
      <div
        class="eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-semibold mb-8">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        Now in public beta — free to start
      </div>

      <!-- Headline -->
      <h1
        class="headline text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.03] text-gray-950 mb-6">
        Your commerce.<br />
        <span class="gradient-word">Supercharged.</span>
      </h1>

      <!-- Sub-copy -->
      <p class="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
        One workspace to launch storefronts, run operations, and unlock growth — built for modern merchants who move
        fast.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button
          class="btn-primary group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-base shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all duration-200 cursor-pointer md:w-auto w-full"
          @click="$router.push('/signup')">
          Get started free
          <Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
        <button
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 md:w-auto w-full cursor-pointer transition-all duration-200 text-base"
          @click="$router.push('/demo')">
          <Icon name="lucide:play-circle" class="w-4 h-4" />
          Watch demo
        </button>
      </div>

      <!-- ── Visual: Animated metric cards ─────────────────────── -->
      <div class="cards-grid grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
        <div class="metric-card">
          <div class="metric-icon bg-indigo-50 text-indigo-500">
            <Icon name="lucide:shopping-bag" class="w-5 h-5" />
          </div>
          <p class="metric-value">14,310</p>
          <p class="metric-label">Orders today</p>
          <span class="metric-badge">+14.3%</span>
        </div>
        <div class="metric-card">
          <div class="metric-icon bg-emerald-50 text-emerald-500">
            <Icon name="lucide:trending-up" class="w-5 h-5" />
          </div>
          <p class="metric-value">$2.4M</p>
          <p class="metric-label">Revenue</p>
          <span class="metric-badge emerald">+8.1%</span>
        </div>
        <div class="metric-card">
          <div class="metric-icon bg-violet-50 text-violet-500">
            <Icon name="lucide:users" class="w-5 h-5" />
          </div>
          <p class="metric-value">8,205</p>
          <p class="metric-label">Customers</p>
          <span class="metric-badge violet">+5.2%</span>
        </div>
        <div class="metric-card">
          <div class="metric-icon bg-amber-50 text-amber-500">
            <Icon name="lucide:store" class="w-5 h-5" />
          </div>
          <p class="metric-value">412</p>
          <p class="metric-label">Active sellers</p>
          <span class="metric-badge amber">+22</span>
        </div>
      </div>

      <!-- ── Feature chips ─────────────────────────────────────── -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-16">
        <div v-for="f in features" :key="f.label"
          class="feature-chip inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium shadow-sm hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 cursor-pointer">
          <Icon :name="f.icon" class="w-4 h-4" />
          {{ f.label }}
        </div>
      </div>

      <!-- ── Divider + partner logos ───────────────────────────── -->
      <div class="text-center">
        <p class="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-5">Integrates seamlessly with</p>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <span v-for="logo in logos" :key="logo"
            class="logo-pill px-4 py-1.5 rounded-lg border border-gray-200 cursor-pointer text-gray-400 text-sm font-semibold bg-white hover:text-indigo-500 hover:border-indigo-200 transition-all duration-200">
            {{ logo }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── Blobs ──────────────────────────────────────────────────────── */
.blob {
  position: absolute;
  border-radius: 9999px;
  pointer-events: none;
  filter: blur(100px);
  animation: blob-drift 20s ease-in-out infinite alternate;
}

.blob-a {
  width: 700px;
  height: 700px;
  top: -200px;
  left: -180px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
  animation-delay: 0s;
}

.blob-b {
  width: 500px;
  height: 500px;
  bottom: -100px;
  right: -120px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  animation-delay: -7s;
}

.blob-c {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 55%;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
  animation-delay: -14s;
}

@keyframes blob-drift {
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(30px, -25px) scale(1.05);
  }

  100% {
    transform: translate(-20px, 15px) scale(0.97);
  }
}

/* ── Dot grid ───────────────────────────────────────────────────── */
.dot-grid {
  background-image: radial-gradient(circle, rgba(99, 102, 241, 0.12) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
}

/* ── Gradient headline word ─────────────────────────────────────── */
.gradient-word {
  background: linear-gradient(120deg, #6366f1 0%, #8b5cf6 50%, #4f46e5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Primary button ─────────────────────────────────────────────── */
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #4f46e5);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #818cf8, #6366f1);
  transform: translateY(-1px);
}

/* ── Metric cards ───────────────────────────────────────────────── */
.metric-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.07);
  background: #fff;
  box-shadow: 0 2px 16px rgba(99, 102, 241, 0.06);
  text-align: left;
  transition: transform 0.25s, box-shadow 0.25s;
  animation: card-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.12);
}

.metric-card:nth-child(1) {
  animation-delay: 0.05s;
}

.metric-card:nth-child(2) {
  animation-delay: 0.12s;
}

.metric-card:nth-child(3) {
  animation-delay: 0.19s;
}

.metric-card:nth-child(4) {
  animation-delay: 0.26s;
}

.metric-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111827;
  line-height: 1;
}

.metric-label {
  font-size: 0.75rem;
  color: #9ca3af;
  font-weight: 500;
}

.metric-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 999px;
  background: #ede9fe;
  color: #6366f1;
}

.metric-badge.emerald {
  background: #d1fae5;
  color: #059669;
}

.metric-badge.violet {
  background: #ede9fe;
  color: #7c3aed;
}

.metric-badge.amber {
  background: #fef3c7;
  color: #d97706;
}

@keyframes card-rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Feature chips ──────────────────────────────────────────────── */
.feature-chip {
  animation: fade-in 0.6s ease both;
}

/* ── Logo pills ─────────────────────────────────────────────────── */
.logo-pill {
  cursor: default;
}

/* ── Eye-brow + headline entrance ──────────────────────────────── */
.eyebrow {
  animation: fade-up 0.6s 0.05s ease both;
}

.headline {
  animation: fade-up 0.7s 0.12s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>