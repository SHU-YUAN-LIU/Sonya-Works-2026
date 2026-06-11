<template>
  <div class="w-full flex flex-col items-center">
    <!-- 極客風介紹標題區塊 -->
    <div
      class="w-full max-w-[1200px] mb-10 text-left [animation:fadeIn_0.8s_cubic-bezier(0.16,1,0.3,1)] font-mono"
    >
      <h1
        class="text-[2rem] font-bold text-[var(--foreground)] mb-4 leading-[1.5]"
      >
        <span class="text-[var(--primary)]">&gt;</span> Works
        <span class="text-[var(--accent)]">(2026)</span>
        <span class="text-[var(--primary)] [animation:blink_1.2s_infinite]">
          |
        </span>
      </h1>

      <div
        class="bg-[var(--code-bg)] border border-dashed border-[var(--border)] rounded-[var(--radius)] p-4 px-5 text-[0.875rem] leading-[1.6] text-[var(--muted-foreground)] shadow-sm"
      >
        <p class="m-0 whitespace-pre-wrap">/**</p>
        <p class="m-0 whitespace-pre-wrap">
          * @description 彙整年度精選開發作品與系統展示
        </p>
        <p class="m-0 whitespace-pre-wrap">&nbsp;* @status active</p>
        <p class="m-0 whitespace-pre-wrap">
          * @stack Vue3 + TailwindCSS + ElementPlus
        </p>
        <p class="m-0 whitespace-pre-wrap">*/</p>
      </div>
    </div>

    <div
      class="w-full max-w-[1200px] grid justify-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 py-2 px-0 [animation:slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
    >
      <WorksCard
        v-for="(item, index) in worksData"
        :key="index"
        :title="item.title"
        :imgUrl="item.imgUrl"
        :images="item.images"
        :linkUrl="item.linkUrl"
        @viewScreenshots="showScreenshots"
      />
    </div>

    <!-- Screenshots Carousel Modal -->
    <ScreenshotModal
      :isOpen="isModalOpen"
      :title="modalTitle"
      :images="modalImages"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { WorksCard, ScreenshotModal } from "@/components";
import { worksData } from "@/data/profolioData";

const isModalOpen = ref(false);
const modalTitle = ref("");
const modalImages = ref([]);

const showScreenshots = (data) => {
  modalTitle.value = data.title;
  modalImages.value = data.images;
  isModalOpen.value = true;
};
</script>
