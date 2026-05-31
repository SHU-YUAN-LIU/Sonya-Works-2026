<template>
  <div class="layout-wrapper">
    <div class="grid-bg"></div>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: var(--background);
}

.grid-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background-image: 
    linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-size: 32px 32px;
}

.main-content {
  flex: 1;
  padding-top: 0;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  background: transparent;
}
</style>
