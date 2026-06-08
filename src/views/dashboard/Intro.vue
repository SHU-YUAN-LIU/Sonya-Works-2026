<template>
  <div
    class="w-full max-w-[1200px] mb-10 text-left font-mono [animation:fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)]"
  >
    <h1
      class="text-[2rem] font-bold text-[var(--foreground)] mb-4 flex items-center gap-2"
    >
      <span class="text-[var(--primary)]">&gt;</span> Introduce()
      <span
        class="text-[var(--primary)] [animation:blink_1.2s_infinite_steps(1)]"
      >|</span>
    </h1>

    <!-- 採用 WorksCard 元件，傳入標題，並將原本的程式碼與自介內容透過 slot 塞入 -->
    <WorksCard title="sonya_profile">
      <div class="intro-content w-full">
        <!-- 程式碼物件區 -->
        <div class="code-block font-mono">
          <div
            class="mb-4 text-[1rem] leading-[1.8] text-[var(--muted-foreground)]"
          >
            <span class="keyword">const</span> developer = {
            <div class="pl-6">
              Name: <span class="string">"劉書菀"</span>,<br />
              EnglishName: <span class="string">"SHU-YUAN-LIU"</span>,<br />
              Role: <span class="string">"Frontend Engineer"</span>,<br />
            </div>
            };
          </div>
        </div>

        <!-- 分隔線 -->
        <div class="card-details-divider"></div>

        <!-- 自我介紹文字 -->
        <div
          class="intro-text text-[var(--foreground)] leading-[1.8] text-justify space-y-3 font-sans text-[1rem] pt-4"
        >
          <p>
           Hi ! 我是書菀，一名<strong>前端工程師</strong>
          </p>
          <p>
           主要使用<strong> Vue3 </strong>進行前端開發，曾參與企業節能管理系統建置，從前期的專案初始化與架構設計，到中後期的 <strong>API 整合</strong>、<strong>MQTT 即時數據監控</strong>，以及設備管理、權限控制等功能模組的開發與維護。
          </p>
          <p>
            結合過往的視覺設計背景，我能在開發中融入 UI/UX 思考，兼顧系統架構的擴充性與使用者體驗。期待持續深化技術，參與更多產品與系統的開發。
          </p>
        </div>
      </div>
    </WorksCard>
  </div>
</template>

<script setup>
import { WorksCard } from "@/components";
</script>

<style scoped lang="scss">
.intro-content {
  display: flex;
  flex-direction: column;
  text-align: left;

  .keyword {
    color: var(--primary);
    font-weight: 600;
  }
  .string {
    color: var(--accent);
  }
  .boolean {
    color: #9fcaf8;
  }

  .card-details-divider {
    border-top: 1px dashed var(--border);
    width: 100%;
    margin-top: 8px;
  }

  .intro-text {
    strong {
      color: var(--primary);
      font-weight: 600;
    }
  }
}

/* 覆寫 WorksCard 內部在 Intro 頁面下的寬度與 Hover 限制，讓它像原本一樣是 100% 寬度且無 translateY 偏移 */
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

  /* 隱藏原本 card-body 預設的 image container（因為簡介不需要秀專案縮圖） */
  .image-container {
    display: none !important;
  }
  
  /* 隱藏 WorksCard 預設的 code-line 渲染（因為簡介的程式碼自定義結構更複雜，我們在 slot 裡面寫） */
  .card-details {
    display: none !important;
  }
}
</style>
