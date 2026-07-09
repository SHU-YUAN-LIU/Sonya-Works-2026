import youthWantToEatParty from "@/assets/images/happyParty.jpg";
import energySaving from "@/assets/images/energySaving.jpg";
import MBMS from "@/assets/images/MBMS.jpg";
import sideProject from "@/assets/images/side-project.png";
import wolfer from "@/assets/images/wolfer.jpg";
import design from "@/assets/images/design.jpg";

// MBMS 輪播圖片
import mbmsBms from "@/assets/images/MBMS/mbms-BMS.png";
import mbmsDashboard from "@/assets/images/MBMS/mbms-dashboard.png";
import mbmsModule from "@/assets/images/MBMS/mbms-module.png";
import mbmsSchedule from "@/assets/images/MBMS/mbms-schedule.png";
import mbmsStatistic from "@/assets/images/MBMS/mbms-statistic.png";

// EM 輪播圖片
import emMultiMeter from "@/assets/images/EM/0.EM-multiMeter.png";
import emDashboard from "@/assets/images/EM/1.EM-dashboard.png";
import emDataoverview from "@/assets/images/EM/2.EM-dataoverview.png";
import emStatistic from "@/assets/images/EM/3.EM-statistic.png";
import emInitial from "@/assets/images/EM/4.EM-initial.png";
import emSettingDataoverview from "@/assets/images/EM/5.EM-setting-dataoverview.png";
import emSettingDevice from "@/assets/images/EM/6.EM-setting-device.png";
import emAlertDialog from "@/assets/images/EM/7-1.EM-alert-dialog.png";
import emAlert from "@/assets/images/EM/7-2.EM-alert.png";
import emPermission from "@/assets/images/EM/8.EM-permission.png";

//作品集連結
export const worksData = [
  {
    title: "節能系統",
    fileName: "energy-saving.vue",
    linkUrl: "https://energy-saving.synerg-data.net/login",
    imgUrl: energySaving,
    images: [
      emMultiMeter,
      emDashboard,
      emDataoverview,
      emStatistic,
      emInitial,
      emSettingDataoverview,
      emSettingDevice,
      emAlertDialog,
      emAlert,
      emPermission,
    ],
  },
  {
    title: "能源系統",
    fileName: "mbms-energy.vue",
    linkUrl: "https://mbms-qa.synerg-data.com/login",
    imgUrl: MBMS,
    images: [mbmsDashboard, mbmsBms, mbmsModule, mbmsSchedule, mbmsStatistic],
  },
  // {
  //   title: "AI寵物圖鑑",
  //   fileName: "side-project.vue",
  //   linkUrl: "https://sonya-nuxt-production.up.railway.app/login",
  //   imgUrl: sideProject,
  // },
  {
    title: "個人專題(緯育)",
    fileName: "personal-wolfer.html",
    linkUrl: "https://shu-yuan-liu.github.io/CHD104-v1/index.html#goToTop-a",
    imgUrl: wolfer,
  },
  {
    title: "團體專題(緯育)",
    fileName: "group-eat-party.vue",
    linkUrl: "https://tibamef2e.com/chd104/g2/",
    imgUrl: youthWantToEatParty,
  },
  {
    title: "設計作品",
    fileName: "design-works.scss",
    linkUrl: "https://www.behance.net/2bf44a20",
    imgUrl: design,
  },
];

