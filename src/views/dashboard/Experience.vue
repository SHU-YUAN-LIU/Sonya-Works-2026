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
      class="grid grid-cols-1 lg:grid-cols-2 gap-6 [animation:slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
    >
      <!-- 左欄：教育背景 & 進修 -->
      <WorksCard title="education">
        <div class="exp-content w-full">
          <h2 class="section-title">🎓 教育背景 &amp; 進修</h2>
          <div class="timeline">
            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active">2025</span>
                <div class="timeline-header">
                  <h3 class="timeline-company">緯育 Tibame</h3>
                  <span class="timeline-role">前端工程師就業養成班</span>
                </div>
                <ul class="timeline-list">
                  <li>全面深入學習網頁前端核心技術與現代化框架開發</li>
                  <li>實作並掌握多個響應式系統與 Vue.js 交互式專案</li>
                  <li>學習與後端 API 串接、Git 版本控制協同工作流程</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active"
                  >2014 – 2018</span
                >
                <div class="timeline-header">
                  <h3 class="timeline-company">國立臺灣藝術大學</h3>
                  <span class="timeline-role">視覺傳達設計學系（學士）</span>
                </div>
                <ul class="timeline-list">
                  <li>系統化學習色彩學、版面編排、平面包裝與字體設計</li>
                  <li>培養深厚的視覺感知、美學素養與設計策略思考能力</li>
                  <li>畢業製作榮獲校內外設計競賽入圍肯定</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </WorksCard>

      <!-- 右欄：工作經歷 -->
      <WorksCard title="work-history">
        <div class="exp-content w-full">
          <h2 class="section-title">💼 工作經歷</h2>
          <div class="timeline">
            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active"
                  >2022 – 2024</span
                >
                <div class="timeline-header">
                  <h3 class="timeline-company">奧亞整合行銷</h3>
                  <span class="timeline-role">視覺設計師</span>
                </div>
                <ul class="timeline-list">
                  <li>主導品牌視覺規劃與線上活動主視覺設計</li>
                  <li>協同前端工程師進行網頁視覺版面優化與切版規格交付</li>
                  <li>設計多元化數位行銷素材，精確傳達品牌價值</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active"
                  >2020 – 2022</span
                >
                <div class="timeline-header">
                  <h3 class="timeline-company">平晨設計印刷</h3>
                  <span class="timeline-role">視覺設計師</span>
                </div>
                <ul class="timeline-list">
                  <li>負責各類印刷品、包裝設計與書籍視覺排版</li>
                  <li>
                    與客戶直接溝通，將抽象概念轉化為具市場競爭力的設計作品
                  </li>
                  <li>控管印前流程與色彩管理，確保成品高品質輸出</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active"
                  >2018 – 2020</span
                >
                <div class="timeline-header">
                  <h3 class="timeline-company">發明造物</h3>
                  <span class="timeline-role">視覺設計師</span>
                </div>
                <ul class="timeline-list">
                  <li>開發品牌周邊文創產品之視覺與造型設計</li>
                  <li>協同團隊進行展覽空間規劃與實體導覽視覺設計</li>
                </ul>
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
</script>

<style scoped lang="scss">
.exp-content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.section-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--foreground);
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--border);
  font-family: system-ui, sans-serif;
  margin-bottom: 16px;
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
  padding: 0 0 24px 20px;

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
  gap: 6px;
}

.timeline-date {
  font-size: 1rem;
  // font-weight: 600;
  color: #e05a36;
  font-family: ui-monospace, monospace;
  transition: all 0.3s ease;
}

.timeline-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 4px;
}

.timeline-company {
  font-size: 1rem;
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
  gap: 6px;
  font-size: 1rem;
  color: var(--muted-foreground);
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: system-ui, sans-serif;

  li::before {
    content: "–";
    color: var(--primary);
    margin-right: 6px;
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
    padding: 24px 28px !important;
    gap: 20px !important;
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
