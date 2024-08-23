import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh',
  title: 'Markdown 教程',
  description: 'LXJ tEam Markdown 教程',
  //logo: '/logo.svg',
  base: '/', // 如果部署在子目录，改为 '/your-subdirectory/'

  themeConfig: {
    nav: [
      { text: '联系方式', link: '/联系方式' },
      // ... 其他导航项
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: '准备环境', link: '/准备环境' },
          { text: '介绍 Markdown', link: '/介绍 Markdown' },
          { text: 'Markdown 标题', link: '/Markdown 标题' },
          //{ text: '', link: '/' },
          // ... 其他侧边栏项
        ],
      },
    ],
  },

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/assetsfile\/(.*)$/,
          replacement: '/src/docs/assetsfile/$1'
        }
      ]
    }
  }
});