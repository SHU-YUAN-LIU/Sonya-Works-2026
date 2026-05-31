<template>
  <div class="flex flex-col lg:flex-row min-h-screen w-full">
    <!-- 左側欄：履歷側邊欄 -->
    <aside class="aside-panel">
      <div
        class="h-[240px] bg-gradient-to-br from-[#e05a36] to-[var(--primary)] text-white flex items-center justify-center text-[5rem] font-[800] tracking-[2px]"
      >
        <span class="opacity-40">hi!</span>
      </div>

      <!-- 半重疊圓形頭像 -->
      <div class="relative -mt-[65px] flex justify-center mb-5">
        <img
          :src="avatarImg"
          alt="Sonya Liu"
          class="w-[125px] h-[125px] rounded-full border-4 border-[var(--card-bg)] shadow-lg object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <!-- 姓名與職稱 -->
      <div class="text-center mb-5">
        <h2 class="text-[1.65rem] font-[500] text-[#e05a36] mb-2">劉書菀</h2>
        <p
          class="text-[0.825rem] text-[var(--muted-foreground)] tracking-[2px] font-mono"
        >
          SHU-YUAN-LIU
        </p>
      </div>

      <!-- 聯絡資訊 -->
      <div
        class="flex flex-col gap-3 py-5 px-10 border-t border-solid border-b border-dashed border-[var(--border)] font-mono"
      >
        <div
          class="flex items-center gap-3 text-[var(--foreground)] text-[0.85rem]"
        >
          <!-- 行內電話圖示 -->
          <IconPhone class="w-4 h-auto text-[#e05a36] shrink-0" />
          <span>0972599113</span>
        </div>
        <div
          class="flex items-center gap-3 text-[var(--foreground)] text-[0.85rem]"
        >
          <!-- 行內信箱圖示 -->
          <IconEmail class="w-4 h-auto text-[#e05a36] shrink-0" />
          <span class="truncate">v2525v2525v2525@gmail.com</span>
        </div>
      </div>

      <!-- 左側導覽區 -->
      <nav class="flex-1 py-5 px-4 flex flex-col">
        <!-- 按鈕列表 -->
        <div class="flex flex-col gap-1.5 pl-4 mt-2 mb-2">
          <button
            v-for="(item, index) in menuItems"
            :key="item.id"
            @click="activeTab = item.id"
            :class="['nav-btn', activeTab === item.id ? 'nav-btn--active' : '']"
          >
            <!-- 左側 active 指示線 -->
            <span class="nav-btn__bar"></span>
            <!-- 行號 -->
            <span class="nav-btn__lineno">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <!-- 終端機提示符號 -->
            <span class="nav-btn__prompt">
              {{ activeTab === item.id ? "▶" : "·" }}
            </span>
            <!-- 標籤文字 -->
            <span class="nav-btn__label">{{ item.label }}</span>
            <!-- 右側標識 (active 時顯示) -->
            <span v-if="activeTab === item.id" class="nav-btn__tag">
              active
            </span>
          </button>
        </div>

        <!-- JSDoc 風格裝飾備註 -->
        <div class="jsdoc-block">
          <div>/**</div>
          <div>&nbsp;* @author SHU-YUAN-LIU</div>
          <div>&nbsp;* @version 2026</div>
          <div>&nbsp;*/</div>
        </div>
      </nav>
    </aside>

    <!-- 右側欄：動態切換主要內容 -->
    <main
      class="flex-1 py-10 px-6 flex flex-col items-center lg:h-screen lg:overflow-y-auto lg:py-14 lg:px-12"
    >
      <!-- 使用 key 強制在 tab 切換時重載動畫 -->
      <div :key="activeTab" class="w-full flex flex-col items-center">
        <Works v-if="activeTab === 'works'" />
        <Intro v-else-if="activeTab === 'intro'" />
        <Skills v-else-if="activeTab === 'skills'" />
        <Experience v-else-if="activeTab === 'experience'" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import avatarImg from "@/assets/images/profile.jpg";
import IconPhone from "@/icons/Group.svg";
import IconEmail from "@/icons/Vector.svg";

// 引入拆分後的模組化子組件
import Intro from "./Intro.vue";
import Experience from "./Experience.vue";
import Skills from "./Skills.vue";
import Works from "./Works.vue";

const activeTab = ref("works"); // 預設為作品集

const menuItems = [
  { id: "intro", label: "簡介" },
  { id: "experience", label: "學經歷" },
  { id: "skills", label: "專業技能" },
  { id: "works", label: "作品集" },
];
</script>

<style scoped>
/* ── 左側欄面板（右側漸層陰影作為分隔界線）── */
.aside-panel {
  width: 100%;
  background: var(--card-bg);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  z-index: 10;
  border-bottom: 1px solid var(--border);
  transition: all 0.3s;
  /* 右側漸層陰影：比單一線條更有深度感 */
  box-shadow:
    4px 0 6px -2px rgba(0, 0, 0, 0.06),
    8px 0 20px -4px rgba(0, 0, 0, 0.08);
}

@media (min-width: 1024px) {
  .aside-panel {
    width: 400px;
    height: 100vh;
    overflow-y: auto;
    position: sticky;
    top: 0;
    border-bottom: none;
  }
}

/* ── 終端機標題列 ── */
.term-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  background: color-mix(in srgb, var(--border) 15%, transparent);
  border-radius: 0.45rem;
  border: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
}
.term-dots {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}
.term-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.85;
}
.term-filename {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--muted-foreground);
  letter-spacing: 0.04em;
  opacity: 0.8;
}

/* ── 程式碼裝飾文字 ── */
.code-comment {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--muted-foreground);
  opacity: 0.45;
  padding: 0 0.25rem;
  margin-bottom: 0.15rem;
  letter-spacing: 0.02em;
}
.code-fn {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.76rem;
  padding: 0 0.25rem;
  color: var(--muted-foreground);
  opacity: 0.55;
  letter-spacing: 0.02em;
}
.code-kw {
  color: #cc7a60;
  opacity: 1;
}
.code-name {
  color: #e0a060;
  opacity: 1;
}
.code-param {
  color: #9fcaf8;
  opacity: 1;
}
.code-arrow {
  color: var(--muted-foreground);
}

/* ── JSDoc 區塊 ── */
.jsdoc-block {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.68rem;
  color: var(--muted-foreground);
  opacity: 0.35;
  margin-top: auto;
  padding: 0.5rem 0.25rem 0;
  line-height: 1.7;
  letter-spacing: 0.02em;
}

/* ── 導覽按鈕基底 ── */
.nav-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  width: 100%;
  padding: 0.7rem 1rem 0.7rem 1.1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background: transparent;
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--muted-foreground);
  cursor: pointer;
  text-align: left;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    border-color 0.22s ease,
    transform 0.15s ease;
  overflow: hidden;
}

.nav-btn:hover {
  background: color-mix(in srgb, #e05a36 8%, transparent);
  color: #e05a36;
  border-color: color-mix(in srgb, #e05a36 25%, transparent);
  transform: translateX(3px);
}

/* ── Active 狀態 ── */
.nav-btn--active {
  background: color-mix(in srgb, #e05a36 12%, transparent);
  color: #e05a36;
  border-color: color-mix(in srgb, #e05a36 35%, transparent);
  font-weight: 700;
}
.nav-btn--active:hover {
  transform: translateX(2px);
}

/* ── 左側指示線 ── */
.nav-btn__bar {
  position: absolute;
  left: 0;
  top: 20%;
  bottom: 20%;
  width: 3px;
  border-radius: 0 2px 2px 0;
  background: transparent;
  transition:
    background 0.22s ease,
    top 0.22s ease,
    bottom 0.22s ease;
}
.nav-btn--active .nav-btn__bar {
  background: linear-gradient(to bottom, #e05a36, #cc7a60);
  top: 10%;
  bottom: 10%;
}
.nav-btn:hover:not(.nav-btn--active) .nav-btn__bar {
  background: color-mix(in srgb, #e05a36 50%, transparent);
}

/* ── 行號 ── */
.nav-btn__lineno {
  font-size: 0.65rem;
  width: 1.4rem;
  flex-shrink: 0;
  color: var(--muted-foreground);
  opacity: 0.35;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0;
  transition: opacity 0.22s;
}
.nav-btn--active .nav-btn__lineno {
  opacity: 0.6;
  color: #cc7a60;
}

/* ── 終端機提示符號 ── */
.nav-btn__prompt {
  font-size: 0.6rem;
  width: 1rem;
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity 0.22s;
}
.nav-btn--active .nav-btn__prompt {
  opacity: 1;
}

/* ── 標籤文字 ── */
.nav-btn__label {
  flex: 1;
  letter-spacing: 0.04em;
}
</style>
