import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'cn',
  title: '电子展示柜',
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
          { text: '明天会更好', link: '/hthgh' },
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
          find: /^.*\/assetsfiles\/(.*)$/,
          replacement: '/src/docs/assetsfiles/$1'
        }
      ]
    }
  }
});