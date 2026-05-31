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
              name: <span class="string">"劉書菀"</span>,<br />
              englishName: <span class="string">"SHU-YUAN-LIU"</span>,<br />
              role: <span class="string">"Frontend Engineer"</span>,<br />
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
            我是書菀，視覺設計是我過往擅長的工作內容。在多年的設計實務中，我深刻體會到好的設計需要強大的開發技術來完整呈現。
          </p>
          <p>
            因為對前端網頁開發產生了濃厚的興趣，我下定決心跨域學習，並參加了專業的前端工程師養成課程進修。
          </p>
          <p>
            這段扎實的訓練讓我掌握了從網頁語意化排版到動態組件化開發的核心技能。憑藉我堅實的<strong>視覺設計背景</strong>與<strong>前端開發技術</strong>，我能夠在敏捷開發中擔任設計與工程之間的完美橋樑，創造出細緻流暢的互動體驗。
          </p>
          <p>
            在未來的職業生涯中，我將持續精進前端與新技術，用代碼與美感為使用者帶來令人驚艷的產品。
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
