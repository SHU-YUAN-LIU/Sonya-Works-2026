<template>
  <div class="nav-bar">
    <RouterLink to="/" class="nav-front">
      <span>Dashboard</span>
    </RouterLink>
    <div class="nav-end">
      <div class="circle"></div>
      <span>Sonya</span>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 3px solid #070c28;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  span {
    font-family: "Mantou Sans";
    color: #070c28;
    letter-spacing: 2px;
    font-size: 16px;
  }

  .nav-front {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .nav-end {
    display: flex;
    align-items: center;
    gap: 10px;

    .circle {
      width: 40px;
      height: 40px;
      background-image: linear-gradient(to bottom right, #ff7700, #30fbee);
      border-radius: 10px;
    }
  }
}
</style>
