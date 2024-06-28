import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档管理",
  description: "A VitePress Site",
  base: '/vite-press-note/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: '部署',
        items: [
          { text: '本项目开发及部署过程', link: '/部署过程/本项目开发及部署过程' },
        ]
      },
      {
        text: '示例',
        items: [
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },

    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
