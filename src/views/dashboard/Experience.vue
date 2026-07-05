<template>
  <div
    class="w-full max-w-[1200px] mb-10 text-left [animation:fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)]"
  >
    <h1
      class="text-[2rem] font-bold text-[var(--foreground)] mb-4 flex items-center gap-2 font-mono"
    >
      <span class="text-[var(--primary)]">&gt;</span> Experience()
      <span
        class="text-[var(--primary)] [animation:blink_1.2s_infinite_steps(1)]"
        >|</span
      >
    </h1>

    <div
      class="flex flex-col gap-6 [animation:slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both] w-full"
    >
      <!-- 教育背景 & 進修 -->
      <WorksCard title="education" class="w-full">
        <div class="exp-content w-full">
          <h2 class="section-title">
            <el-icon class="mr-2 align-middle"><School /></el-icon>
            <span class="align-middle">教育背景 &amp; 進修</span>
          </h2>
          <div class="timeline">
            <div
              v-for="(edu, index) in educationData"
              :key="index"
              class="timeline-item timeline-item--active"
            >
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active">{{
                  edu.date
                }}</span>
                <div class="timeline-header flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <h3 class="timeline-company">{{ edu.company }}</h3>
                  <span class="timeline-role">{{ edu.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WorksCard>

      <!-- 工作經歷 -->
      <WorksCard title="work-history" class="w-full">
        <div class="exp-content w-full">
          <h2 class="section-title">
            <el-icon class="mr-2 align-middle"><Briefcase /></el-icon>
            <span class="align-middle">工作經歷</span>
          </h2>
          <div class="timeline">
            <div
              v-for="(work, index) in workData"
              :key="index"
              class="timeline-item timeline-item--active"
            >
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active">
                  {{ work.date }}
                </span>
                <div
                  class="timeline-header flex flex-col items-start gap-1 mb-2"
                >
                  <div class="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                     <h3 class="timeline-company">{{ work.company }}</h3>
                    <span class="timeline-role">{{ work.role }}</span>
                  </div>
                  <span
                    v-if="work.info"
                    class="text-[0.85rem] text-[var(--muted-foreground)]"
                  >
                    {{ work.info }}
                  </span>
                </div>

                <div
                  v-if="work.hasDetails || work.list"
                  class="mt-2 leading-[1.8]"
                >
                  <!-- 工作內容區塊 -->
                  <div v-if="work.jobContent" class="mb-8">
                    <ul class="timeline-list">
                      <li v-for="(item, i) in work.jobContent" :key="i" class="flex flex-wrap md:flex-nowrap items-baseline">
                        <strong
                          class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0"
                        >
                          {{ item.title }}
                        </strong>
                        <span
                          class="text-[0.95rem] text-[var(--muted-foreground)] w-full md:w-auto md:ml-2 pl-4 md:pl-0 break-words"
                        >
                          {{ item.desc }}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <!-- 一般清單列表 (如視覺設計師工作內容) -->
                  <ul v-if="work.list" class="timeline-list">
                    <li v-for="(desc, i) in work.list" :key="i">
                      {{ desc }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WorksCard>
    </div>
  </div>
</template>

<script setup>
import { WorksCard } from "@/components";
import { educationData, workData } from "@/data/experienceData";
import { ElIcon } from "element-plus";
import { School, Briefcase } from "@element-plus/icons-vue";
</script>

<style scoped lang="scss">
.exp-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--foreground);
  padding-bottom: 12px;
  border-bottom: 1px dashed var(--border);
  font-family: system-ui, sans-serif;
  margin-bottom: 24px;
}

/* ── 時間軸 ── */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  padding-left: 20px;
  border-left: 2px solid var(--border);
}

.timeline-item {
  position: relative;
  padding: 0 0 32px 24px;

  &:last-child {
    padding-bottom: 0;
  }
}

/* 圓點 */
.timeline-dot {
  position: absolute;
  left: -27px;
  top: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--muted-foreground);
  border: 2px solid var(--card-bg);
  transition: background 0.3s;

  &--active {
    background: #e05a36;
    box-shadow: 0 0 8px rgba(224, 90, 54, 0.4);
  }
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.timeline-date {
  font-size: 1rem;
  color: #e05a36;
  font-family: ui-monospace, monospace;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.timeline-company {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--foreground);
  font-family: system-ui, sans-serif;
}

.timeline-role {
  font-size: 0.95rem;
  color: var(--muted-foreground);
  font-family: system-ui, sans-serif;
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1rem;
  line-height: 1.8;
  color: var(--muted-foreground);
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: system-ui, sans-serif;

  li {
    display: flex;
  }

  li::before {
    content: "–";
    color: var(--primary);
    margin-right: 8px;
    font-weight: 700;
  }
}

/* 覆寫 WorksCard 內部在 Experience 頁面下的寬度與 Hover 限制，讓它像原本一樣是 100% 寬度且無 translateY 偏移 */
:deep(.works-card) {
  max-width: 100% !important;
  cursor: default !important;

  /* 移除上浮動畫 */
  &:hover {
    transform: none !important;
  }

  /* 調整內距與整體舒適間距 */
  .card-body {
    padding: 32px 36px !important;
    gap: 24px !important;
  }

  /* 隱藏原本 card-body 預設的 image container（因為學經歷不需要秀專案縮圖） */
  .image-container {
    display: none !important;
  }

  /* 隱藏 WorksCard 預設的 code-line 渲染 */
  .card-details {
    display: none !important;
  }
}
</style>
