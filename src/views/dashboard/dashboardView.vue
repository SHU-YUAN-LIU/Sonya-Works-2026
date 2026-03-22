<template>
  <div class="chart-container">
    <div class="card-wrapper">
      <WorksCard
        v-for="(item, index) in worksData"
        :key="index"
        :title="item.title"
        :imgUrl="item.imgUrl"
        :linkUrl="item.linkUrl"
      />
    </div>
  </div>
</template>

<script setup>
import { WorksCard } from "@/components";
import { worksData } from "@/data/testData";
</script>
<style scoped lang="scss">
.chart-container {
  min-height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-image: url("@/assets/icons/square.svg");
  background-repeat: repeat;
}
.card-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem 0;
}
</style>
