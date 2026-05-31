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
        >|</span
      >
    </h1>

    <div
      class="grid grid-cols-1 gap-6 [animation:slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
    >
      <!-- 前端技術 -->
      <div class="skill-card">
        <div class="card-header font-mono">
          <div class="controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title-bar">&gt; frontend.ts</div>
        </div>
        <div class="card-body">
          <div class="skill-title-row">
            <div class="skill-icon skill-icon--orange">&lt;/&gt;</div>
            <div>
              <h3 class="skill-name">前端技術</h3>
              <p class="skill-sub">Frontend Development</p>
            </div>
          </div>
          <div class="tag-group">
            <span class="tag tag--orange">HTML5 / CSS3</span>
            <span class="tag tag--orange">JavaScript (ES6+) / Sass</span>
            <span class="tag tag--orange">Vue.js 3 (Composition API)</span>
            <span class="tag tag--orange">Pinia</span>
            <span class="tag tag--orange">Vue Router</span>
            <span class="tag tag--orange">Element Plus</span>
            <span class="tag tag--orange">UnoCSS / TailwindCSS</span>
            <span class="tag tag--orange">ECharts (資料視覺化)</span>
            <span class="tag tag--orange">Axios</span>
            <span class="tag tag--orange">VueUse</span>
            <span class="tag tag--orange">Bootstrap / jQuery</span>
          </div>
        </div>
      </div>

      <!-- 後端技術 -->
      <div class="skill-card">
        <div class="card-header font-mono">
          <div class="controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title-bar">&gt; backend.sql</div>
        </div>
        <div class="card-body">
          <div class="skill-title-row">
            <div class="skill-icon skill-icon--amber">DB</div>
            <div>
              <h3 class="skill-name">後端與通訊技術</h3>
              <p class="skill-sub">Backend &amp; Communication</p>
            </div>
          </div>
          <div class="tag-group">
            <span class="tag tag--amber">PHP / MySQL</span>
            <span class="tag tag--amber">MQTT (物聯網通訊協定)</span>
          </div>
        </div>
      </div>

      <!-- UI/UX 設計 -->
      <div class="skill-card">
        <div class="card-header font-mono">
          <div class="controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title-bar">&gt; design.fig</div>
        </div>
        <div class="card-body">
          <div class="skill-title-row">
            <div class="skill-icon skill-icon--green">UI</div>
            <div>
              <h3 class="skill-name">UI/UX 與視覺設計</h3>
              <p class="skill-sub">UI/UX &amp; Visual Design</p>
            </div>
          </div>
          <div class="tag-group">
            <span class="tag tag--green">Figma</span>
            <span class="tag tag--green">Adobe Illustrator</span>
            <span class="tag tag--green">Adobe Photoshop</span>
            <span class="tag tag--green">視覺傳達設計</span>
          </div>
        </div>
      </div>

      <!-- 版本控制與工具 -->
      <div class="skill-card">
        <div class="card-header font-mono">
          <div class="controls">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <div class="title-bar">&gt; tools.sh</div>
        </div>
        <div class="card-body">
          <div class="skill-title-row">
            <div class="skill-icon skill-icon--muted">GIT</div>
            <div>
              <h3 class="skill-name">開發工具與工程建置</h3>
              <p class="skill-sub">Build Tools &amp; Testing</p>
            </div>
          </div>
          <div class="tag-group">
            <span class="tag tag--muted">Git / GitHub</span>
            <span class="tag tag--muted">Vite / npm</span>
            <span class="tag tag--muted">Vitest (單元測試)</span>
            <span class="tag tag--muted">ESLint / Prettier</span>
            <span class="tag tag--muted">Responsive Web Design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 專業技能展示組件
</script>

<style scoped lang="scss">
/* ── 技能卡片外框（與 worksCard 一致）── */
.skill-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: var(--card-hover-shadow);

    .card-header {
      background: var(--muted);
      border-bottom-color: var(--primary);
    }
  }
}

/* ── MacOS 標題列 ── */
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

  .title-bar {
    font-size: 12px;
    font-weight: 600;
    color: var(--muted-foreground);
    letter-spacing: 0.5px;
  }
}

/* ── 內容區 ── */
.card-body {
  padding: 24px 28px;
  flex: 1;
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
  font-size: 1rem;
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
</style>
