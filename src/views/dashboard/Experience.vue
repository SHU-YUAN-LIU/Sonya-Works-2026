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
      <!-- 左欄：教育背景 & 進修 -->
      <WorksCard title="education" class="w-full">
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
              </div>
            </div>
          </div>
        </div>
      </WorksCard>

      <!-- 右欄：工作經歷 -->
      <WorksCard title="work-history" class="w-full">
        <div class="exp-content w-full">
          <h2 class="section-title">💼 工作經歷</h2>
          <div class="timeline">
            <div class="timeline-item timeline-item--active">
              <div class="timeline-dot timeline-dot--active"></div>
              <div class="timeline-content">
                <span class="timeline-date timeline-date--active">2024/7 – 仍在職</span>
                <div class="timeline-header flex flex-col items-start gap-1 mb-2">
                  <div class="flex items-baseline gap-2">
                    <h3 class="timeline-company">百慧科技股份有限公司</h3>
                    <span class="timeline-role">軟體工程師</span>
                  </div>
                  <span class="text-[0.85rem] text-[var(--muted-foreground)]">電腦系統整合服務業 | 新北市三重區</span>
                </div>
                
                <div class="mt-5 leading-[1.8]">
                  <!-- 工作內容區塊 -->
                  <div class="mb-8">
                    <h4 class="text-[1.15rem] font-[800] text-[var(--primary)] tracking-wide mb-4 flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                      工作內容
                    </h4>
                    <ul class="timeline-list">
                      <li>
                        <strong class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0">專案架構與前端建置：</strong>
                        <span class="text-[0.95rem] text-[var(--muted-foreground)]">從零建構節能管理系統前端架構，採用 Vue 3 (Composition API) 與 Vite 為核心框架；導入 Pinia 進行全域狀態管理，並整合 Vue I18n 實現多國語系。</span>
                      </li>
                      <li>
                        <strong class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0">即時通訊與後端協作：</strong>
                        <span class="text-[0.95rem] text-[var(--muted-foreground)]">封裝 MQTT (mqtt.js) 核心通訊模組，實現設備即時數據訂閱、發送與自動重連機制；基於 Axios 透過 Interceptors 統一處理 JWT 認證、分頁與 API 攔截。</span>
                      </li>
                      <li>
                        <strong class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0">數據視覺化與 UI 開發：</strong>
                        <span class="text-[0.95rem] text-[var(--muted-foreground)]">以 Element Plus 為基礎，搭配 UnoCSS 與 SCSS 進行切版，並整合 ECharts 開發能源監控資料視覺化圖表。</span>
                      </li>
                      <li>
                        <strong class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0">共用模組與前端工程化：</strong>
                        <span class="text-[0.95rem] text-[var(--muted-foreground)]">開發共用 Composables 與元件，封裝圖片壓縮與拖曳排序等功能模組，提升程式碼重用性並降低維護成本。</span>
                      </li>
                      <li>
                        <strong class="text-[1rem] text-[var(--foreground)] whitespace-nowrap shrink-0">系統防呆與異常處理：</strong>
                        <span class="text-[0.95rem] text-[var(--muted-foreground)]">實作前端驗證與錯誤處理機制 (JWT Auth)，透過 Axios Interceptors 與 Vue 全域錯誤處理統一攔截 API 與系統異常。</span>
                      </li>
                    </ul>
                  </div>

                  <!-- 採用技術區塊 -->
                  <div>
                    <h4 class="text-[1.15rem] font-[800] text-[var(--primary)] tracking-wide mb-4 flex items-center gap-2">
                      <span class="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                      採用技術
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 pl-1">
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">核心框架</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">Vue 3 (Composition API)、Vite、Vue Router</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">狀態管理</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">Pinia、pinia-plugin-persistedstate</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">UI 與樣式</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">Element Plus、UnoCSS、SCSS / Sass</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">資料通訊</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">Axios (RESTful API)、MQTT (即時通訊)</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">資料視覺化</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">ECharts</span>
                      </div>
                      <div class="flex flex-col gap-0.5">
                        <span class="text-[0.75rem] text-[var(--muted-foreground)] uppercase tracking-widest font-bold">常用工具</span>
                        <span class="text-[0.95rem] font-bold text-[var(--foreground)]">Vue I18n、VueUse、vuedraggable、jwt-decode</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
  // font-weight: 600;
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
