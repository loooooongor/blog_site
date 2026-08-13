import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "祥師兄的易學筆記",
  subTitle: "分享六爻占卜與八字命理的基礎概念與實戰案例",
  brandTitle: "易學筆記",

  description: "分享六爻占卜與八字命理的基礎概念、實戰案例與學習心得。",

  site: "https://longcfu.com",

  locale: "zh-HK",

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_services,
      href: "/services",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
  ],

  username: "祥師兄",
  sign: "易學無涯，行者常至。",
  avatarUrl: "/images/writer-icon.webp",
  socialLinks: [
    {
      icon: "simple-icons:instagram",
      link: "https://www.instagram.com/loongcfu/",
    },
    {
      icon: "simple-icons:threads",
      link: "https://www.threads.net/@loongcfu/",
    },
    {
      icon: "simple-icons:whatsapp",
      link: "https://wa.me/85291332674",
    },
  ],
  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/images/purple-blog-banner.webp",
  ],

  slugMode: "HASH",

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  bannerStyle: "STATIC",
};

export default YukinaConfig;