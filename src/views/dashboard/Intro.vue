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
        >|</span
      >
    </h1>

    <!-- 採用 WorksCard 元件，傳入標題，並將原本的程式碼與自介內容透過 slot 塞入 -->
    <WorksCard title="sonya_profile">
      <div class="intro-content w-full flex flex-col gap-3">
        <!-- 程式碼物件區 -->
        <div
          class="code-block font-mono text-[1rem] leading-[1.6] text-[var(--muted-foreground)]"
        >
          <span class="keyword">const</span> developer = {
          <div class="pl-6">
            name: <span class="string">"劉書菀"</span>,<br />
            role: <span class="string">"Frontend Engineer"</span>
          </div>
          };
        </div>

        <!-- 分隔線 -->
        <div class="card-details-divider"></div>

        <!-- 自我介紹內容區 -->
        <div class="intro-sections-container">
          <div class="intro-section">
            <h3>【個人簡介】</h3>
            <p>
              您好，我是劉書菀，畢業於台灣藝術大學工藝設計系。<br />
              我擁有五年以上設計經驗及近兩年前端開發經驗。自轉職前端後，持續參與企業專案開發與維護，累積功能開發、需求分析及跨部門協作經驗，並將設計背景作為輔助，在開發過程中兼顧使用者體驗與介面品質。
            </p>
          </div>
          <div class="intro-section">
            <h3>【工作經歷與成長】</h3>
            <p>
              在任職期間，我參與多項 Web
              應用系統的開發與維護工作，從需求分析、介面設計到前端實作皆有實際參與經驗，並與後端工程師協作完成產品功能開發。<br />
              透過專案實務歷練，我逐步建立對產品需求、開發流程及系統架構的理解，並培養獨立分析問題與提出解決方案的能力。同時也持續優化開發流程與元件管理方式，以提升團隊協作效率及產品品質。
            </p>
          </div>

          <div class="intro-section">
            <h3>【個人優勢】</h3>
            <p>
              我最大的優勢在於同時具備設計與前端開發背景，能從使用者體驗、介面設計與技術實作等不同角度思考需求，協助將想法有效落實為產品功能。<br />
              此外，我也積極將 AI
              工具應用於開發流程中，運用於技術研究、問題排查、程式碼優化及文件整理，提升開發效率與學習速度，並持續關注新技術與開發趨勢。
            </p>
          </div>

          <div class="intro-section">
            <h3>【未來規劃】</h3>
            <p>
              未來希望持續精進前端技術能力，累積大型專案經驗，並提升架構設計與系統規劃能力。<br />
              同時，我也會持續關注 AI
              與新技術的應用，透過優化開發流程與工具運用，提升開發效率與產品品質。
            </p>
          </div>
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
  text-align: left;

  .keyword {
    color: var(--primary);
    font-weight: 600;
  }
  .string {
    color: var(--primary);
  }

  .card-details-divider {
    border-top: 1px dashed var(--border);
    width: 100%;
    margin: 2px 0;
  }

  .intro-sections-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
  }

  .intro-section {
    h3 {
      color: var(--primary);
      font-size: 1rem;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 0;
      text-align: justify;
      line-height: 1.8;
      color: var(--foreground);
    }
  }
}

/* 覆寫 WorksCard 內部在 Intro 頁面下的寬度與 Hover 限制 */
:deep(.works-card) {
  max-width: 100% !important;
  cursor: default !important;

  &:hover {
    transform: none !important;
  }

  .card-body {
    padding: 14px 20px !important;
    gap: 8px !important;
  }

  .image-container {
    display: none !important;
  }

  .card-details {
    display: none !important;
  }
}
</style>
