<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="modal-overlay" @click.self="close">
      <div class="modal-container font-mono">
        <!-- Header -->
        <div class="modal-header">
          <div class="controls">
            <span class="dot red" @click="close"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title-bar">&gt; view_screenshots("{{ title }}")</div>
          <button class="close-btn" @click="close">&times;</button>
        </div>
        <!-- Body / Carousel Area -->
        <div class="modal-body">
          <button v-if="images.length > 1" class="nav-btn prev" @click="prevImage" aria-label="Previous image">
            &lt;
          </button>

          <div class="image-wrapper">
            <Transition name="fade">
              <img :key="currentIndex" :src="images[currentIndex]" :alt="`${title} screenshot ${currentIndex + 1}`" class="carousel-image" />
            </Transition>
          </div>

          <button v-if="images.length > 1" class="nav-btn next" @click="nextImage" aria-label="Next image">
            &gt;
          </button>
        </div>

        <!-- Footer / Indicators -->
        <div class="modal-footer" v-if="images.length > 1">
          <div class="indicators">
            <span
              v-for="(img, idx) in images"
              :key="idx"
              class="indicator-dot"
              :class="{ active: idx === currentIndex }"
              @click="setIndex(idx)"
            ></span>
          </div>
          <div class="index-display">{{ currentIndex + 1 }} / {{ images.length }}</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  images: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close"]);

const currentIndex = ref(0);

const close = () => {
  emit("close");
};

const nextImage = () => {
  if (props.images.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }
};

const prevImage = () => {
  if (props.images.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  }
};

const setIndex = (index) => {
  currentIndex.value = index;
};

const preloadImages = () => {
  if (props.images && props.images.length > 0) {
    props.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
};

// Reset index when modal opens
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      currentIndex.value = 0;
      window.addEventListener("keydown", handleKeyDown);
      preloadImages();
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }
);

const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    close();
  } else if (e.key === "ArrowRight") {
    nextImage();
  } else if (e.key === "ArrowLeft") {
    prevImage();
  }
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 12, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-container {
  background: var(--card-bg, #1e1e24);
  border: 1px solid var(--border, #333);
  border-radius: var(--radius, 12px);
  width: 90%;
  max-width: 1200px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  background: var(--muted, #141416);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border, #333);

  .controls {
    display: flex;
    gap: 6px;

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.2s ease;

      &.red { background: #ff5f56; }
      &.yellow { background: #ffbd2e; }
      &.green { background: #27c93f; }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .title-bar {
    font-size: 13px;
    font-weight: 600;
    color: var(--muted-foreground, #888);
  }

  .close-btn {
    background: transparent;
    border: none;
    color: var(--muted-foreground, #888);
    font-size: 20px;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s ease;

    &:hover {
      color: var(--primary, #646cff);
    }
  }
}

.modal-body {
  position: relative;
  padding: 16px;
  background: #0d0d11;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  max-height: 85vh;

  .image-wrapper {
    width: 100%;
    height: 70vh;
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
  }

  .carousel-image {
    grid-area: 1 / 1 / 2 / 2;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    z-index: 10;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      background: var(--primary, #646cff);
      border-color: var(--primary, #646cff);
      box-shadow: 0 0 15px var(--primary, rgba(100, 108, 255, 0.5));
      transform: translateY(-50%) scale(1.1);
    }

    &.prev {
      left: 20px;
    }

    &.next {
      right: 20px;
    }
  }
}

.modal-footer {
  background: var(--muted, #141416);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border, #333);
  font-size: 12px;
  color: var(--muted-foreground, #888);

  .indicators {
    display: flex;
    gap: 8px;

    .indicator-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        background: var(--primary, #646cff);
        transform: scale(1.25);
        box-shadow: 0 0 8px var(--primary, rgba(100, 108, 255, 0.5));
      }

      &:hover:not(.active) {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
}

/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
  
  .modal-container {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(0.95) translateY(10px);
  }
}

/* Image Crossfade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
