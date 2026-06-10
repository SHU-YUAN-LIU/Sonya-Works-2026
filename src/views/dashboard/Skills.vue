<template>
  <div
    class="w-full max-w-[1200px] mb-10 text-left [animation:fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)]"
  >
    <h1
      class="text-[2rem] font-bold text-[var(--foreground)] mb-4 flex items-center gap-2 font-mono"
    >
      <span class="text-[var(--primary)]">&gt;</span> Skills()
      <span
        class="text-[var(--primary)] [animation:blink_1.2s_infinite_steps(1)]"
      >
        |
      </span>
    </h1>

    <div
      class="grid grid-cols-1 gap-6 [animation:slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
    >
      <WorksCard
        v-for="skill in skillsData"
        :key="skill.key"
        :title="skill.key"
      >
        <div class="skill-card-body w-full">
          <div class="skill-title-row">
            <div class="skill-icon" :class="'skill-icon--' + skill.type">
              {{ skill.icon }}
            </div>
            <div>
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-sub">{{ skill.sub }}</p>
            </div>
          </div>
          <div class="tag-group">
            <span
              v-for="(tag, index) in skill.tags"
              :key="index"
              class="tag"
              :class="'tag--' + skill.type"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </WorksCard>
    </div>
  </div>
</template>

<script setup>
import { WorksCard } from "@/components";
import { skillsData } from "@/data/skillsData";
</script>

<style scoped lang="scss">
.skill-card-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ── 標題列：icon + 名稱 ── */
.skill-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skill-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: ui-monospace, monospace;
  flex-shrink: 0;
  letter-spacing: 0.02em;

  &--orange {
    background: rgba(224, 90, 54, 0.1);
    color: #e05a36;
  }
  &--amber {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
  }
  &--green {
    background: rgba(39, 201, 63, 0.1);
    color: #27c93f;
  }
  &--muted {
    background: rgba(91, 99, 112, 0.1);
    color: var(--muted-foreground);
  }
}

.skill-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--foreground);
  font-family: system-ui, sans-serif;
  line-height: 1.3;
}

.skill-sub {
  font-size: 0.9rem;
  color: var(--muted-foreground);
  font-family: ui-monospace, monospace;
  margin-top: 2px;
}

/* ── 技能標籤群組 ── */
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--code-bg);
  font-size: 1rem;
  font-family: system-ui, sans-serif;
  color: var(--foreground);
  cursor: default;
  transition:
    border-color 0.2s,
    color 0.2s,
    background 0.2s;

  &--orange:hover {
    border-color: #e05a36;
    color: #e05a36;
    background: rgba(224, 90, 54, 0.06);
  }
  &--amber:hover {
    border-color: #f59e0b;
    color: #f59e0b;
    background: rgba(245, 158, 11, 0.06);
  }
  &--green:hover {
    border-color: #27c93f;
    color: #27c93f;
    background: rgba(39, 201, 63, 0.06);
  }
  &--muted:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: rgba(204, 122, 96, 0.06);
  }
}

/* 覆寫 WorksCard 內部在 Skills 頁面下的寬度與 Hover 限制 */
:deep(.works-card) {
  max-width: 100% !important;
  cursor: default !important;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;

  &:hover {
    transform: none !important;
    border-color: var(--primary);
    box-shadow: var(--card-hover-shadow);

    .card-header {
      background: var(--muted);
      border-bottom-color: var(--primary);
    }
  }

  /* 調整內距 */
  .card-body {
    padding: 24px 28px !important;
    gap: 20px !important;
  }

  /* 隱藏 WorksCard 預設的 image container */
  .image-container {
    display: none !important;
  }

  /* 隱藏 WorksCard 預設的 code-line 渲染 */
  .card-details {
    display: none !important;
  }
}
</style>
