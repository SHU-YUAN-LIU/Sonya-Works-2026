<template>
  <div
    class="works-card"
    :class="{ 'is-link': linkUrl }"
    @click="handleOpenUrl"
  >
    <!-- MacOS terminal top bar -->
    <div class="card-header font-mono">
      <div class="controls">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
      </div>
      <div class="title-bar">&gt; {{ formattedFileName }}</div>
    </div>

    <!-- Content container -->
    <div class="card-body">
      <slot>
        <div class="image-container">
          <div class="placeholder">
            <img v-if="imgUrl" :src="imgUrl" alt="" class="card-image" />
            <div v-else class="no-img-fallback">
              <span class="icon">&lt;/&gt;</span>
              <span>No Image Available</span>
            </div>
          </div>
        </div>
      </slot>

      <!-- Interactive developer code details block -->
      <div class="card-details font-mono">
        <div class="code-line">
          <span class="keyword">const</span> name =
          <span class="string">"{{ title }}"</span>;
        </div>
        <div class="code-line">
          <span class="keyword">const</span> status =
          <span class="string">"online"</span>;
        </div>

        <!-- Hover action hint -->
        <div class="action-hint" v-if="linkUrl">
          <span class="prompt-sym">&gt;</span>
          <span class="action-text">visit_app()</span>
          <span class="arrow font-sans">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

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

// Dynamic terminal file name formatting
const formattedFileName = computed(() => {
  const titleMap = {
    節能系統: "energy-saving.vue",
    能源系統: "mbms-energy.tsx",
    "個人專題(緯育)": "personal-wolfer.html",
    "團體專題(緯育)": "group-eat-party.conf",
  };
  return (
    titleMap[props.title] ||
    `${props.title.toLowerCase().replace(/[^a-z0-9]/g, "-") || "project"}.tsx`
  );
});

const handleOpenUrl = () => {
  if (props.linkUrl) {
    window.open(props.linkUrl, "_blank");
  }
};
</script>

<style scoped lang="scss">
.works-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;

  &.is-link {
    cursor: pointer;

    &:hover {
      transform: translateY(-6px);
      border-color: var(--primary);
      box-shadow: var(--card-hover-shadow);

      .card-header {
        background: var(--muted);
        border-bottom-color: var(--primary);
      }

      .card-image {
        transform: scale(1.05);
      }

      .action-hint {
        color: var(--primary);
        .action-text {
          text-decoration: underline;
        }
        .arrow {
          transform: translateX(4px);
        }
      }
    }
  }

  .card-header {
    background: var(--muted);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;

    .controls {
      display: flex;
      gap: 6px;
      margin-right: 14px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transition: transform 0.2s ease;

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

    &:hover .controls .dot {
      transform: scale(1.1);
    }

    .title-bar {
      font-size: 12px;
      font-weight: 600;
      color: var(--muted-foreground);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 0.5px;
    }
  }

  .card-body {
    padding: 16px;
    background: transparent;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
    overflow: hidden;

    .image-container {
      width: 100%;
      height: 200px;
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: calc(var(--radius) - 2px);
      position: relative;
      background: var(--code-bg);

      .placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .no-img-fallback {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--muted-foreground);
          font-size: 0.875rem;

          .icon {
            font-size: 2rem;
            color: var(--primary);
            opacity: 0.7;
          }
        }
      }
    }

    .card-details {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 0.8rem;
      color: var(--foreground);
      border-top: 1px dashed var(--border);
      padding-top: 12px;
      margin-top: auto;

      .code-line {
        line-height: 1.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .keyword {
          color: var(--primary);
          font-weight: 600;
        }

        .string {
          color: var(--accent);
        }
      }

      .action-hint {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        color: var(--muted-foreground);
        font-weight: 600;
        font-size: 0.825rem;
        transition: color 0.3s ease;

        .prompt-sym {
          color: var(--primary);
        }

        .arrow {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      }
    }
  }
}
</style>
