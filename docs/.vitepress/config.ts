import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh',
  title: '视频音频展示',
  description: '',
  //logo: '/logo.svg',
  base: '/', // 如果部署在子目录，改为 '/your-subdirectory/'

  themeConfig: {
    nav: [
      //{ text: '', link: '/' },
      // ... 其他导航项
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'LXJ tEam News', link: '/LtN.md' },
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