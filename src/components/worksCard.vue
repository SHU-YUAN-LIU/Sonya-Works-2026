<template>
  <div
    class="works-card"
    :class="{ 'is-link': linkUrl }"
    @click="handleOpenUrl"
  >
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
            <img v-if="imgUrl" :src="imgUrl" alt="" />
            <span v-else> No Image </span>
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
  linkUrl: {
    type: String,
    default: "",
  },
});

const handleOpenUrl = () => {
  if (props.linkUrl) {
    window.open(props.linkUrl, "_blank");
  }
};
</script>

<style scoped lang="scss">
.works-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    sans-serif;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  &.is-link {
    cursor: pointer;
    &:hover {
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      .action-btn {
        background: #3b82f6;
        color: white;
      }
    }
  }

  .card-header {
    background: #f8fafc;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    flex-shrink: 0;

    .controls {
      display: flex;
      gap: 6px;
      margin-right: 16px;

      .dot {
        width: 10px;
        height: 10px;
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
      font-size: 13px;
      font-weight: 600;
      color: #64748b;
      font-family: "Fira Code", monospace;
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
      border: 1px solid rgb(241, 241, 241);
      border-radius: 8px;
      // box-shadow: 0 0 8px 8px rgba(211, 211, 211, 0.2);
      .placeholder {
        width: 100%;
        min-height: 200px;
        background: #f1f5f9;

        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #94aeac;
        font-weight: 500;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }
      }
    }
  }
}
</style>
