<template>
  <div class="layout-wrapper">
    <mainNav />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import mainNav from "@/layout/mainNav.vue";
import { RouterView } from "vue-router";
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 60px;
  overflow-y: auto;
  background: rgba(225, 126, 126, 0.861);
}
</style>
