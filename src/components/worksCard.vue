<template>
  <div class="works-card">
    <div class="card-header">
      <div class="controls">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <div class="title">{{ title }}</div>
    </div>
    <div class="card-body">
      <div class="image-container">
        <slot>
          <div class="placeholder">
            <img :src="imgUrl" alt="" />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  imgUrl: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.works-card {
  background: #ffffff;
  border: 1px solid #a9b7c6;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-family: "Inter", sans-serif;
  width: 100%;
  max-width: 400px; /* Optional: limit oversized cards on large screens */
  margin: 0 auto;
  height: 320px; /* Fixed height for the entire card */
  display: flex;
  flex-direction: column;

  .card-header {
    background: #f3f3f3;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    flex-shrink: 0;

    .controls {
      display: flex;
      gap: 6px;
      margin-right: 20px;

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &.red {
          background: #ff5f56;
        }
        &.yellow {
          background: #ffbd2e;
        }
        &.green {
          background: #27c93f;
        }
      }
    }

    .title {
      font-size: 14px;
      color: #666;
      font-family: monospace;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .card-body {
    padding: 20px;
    background: #ffffff;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .image-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      .placeholder {
        width: 100%;
        height: 100%;
        border: 2px dashed #eee;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        font-size: 1.2rem;

        img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      }

      :deep(img) {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
      }
    }
  }
}
</style>
