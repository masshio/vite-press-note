import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "文档管理",
  description: "A VitePress Site",
  base: '/vite-press-note/',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Note', link: '/note/本项目开发及部署过程' },
      { text: 'Examples', link: '/examples/markdown-examples' },
    ],
    sidebar: {
      '/examples/': [
        {
          text: '示例',
          collapsed: false,
          items: [
            { text: 'Markdown Examples', link: '/examples/markdown-examples' },
            { text: 'Runtime API Examples', link: '/examples/api-examples' },
          ]
        },
      ],
      '/note/': [
        {
          text: '部署',
          items: [
            { text: '本项目开发及部署过程', link: '/note/本项目开发及部署过程' },
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local',
    }
  }
})
