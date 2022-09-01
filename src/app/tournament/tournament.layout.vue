<script setup>
import { RouterView } from 'vue-router'
import Aside from './tournament.aside.vue'
</script>

<template>
  <main class="container">
    <div class="grid">
      <Aside />
      <section>
        <RouterView />
      </section>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 992px) {
  .grid {
    grid-column-gap: 3rem;
    grid-template-columns: 20% auto;
  }
}
</style>