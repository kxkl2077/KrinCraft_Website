import { defineConfig } from 'vitepress'
import dayjs from 'dayjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh_CN',
  title: "Stalir 玩家文档",
  description: "Stalir 服务器玩家使用指南",
  head: [
    [
      'link',
      { rel: 'icon',
        type: 'image/png',
        href: '/favicon.ico'
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '玩家文档', link: '/getting-started/' },
      { text: '论坛', link: 'https://forum.kxkl2024.cn' },
      { text: '关于', link: '/team/' }
    ],
    sidebar: [
      {
        text: '玩家指南',
        collapsed: false,
        items: [
          { text: '😄 Stalir 服务器介绍', link: '/getting-started/' },
          { text: '🗨️ 常用指令', link: '/commands/' },
          { text: '💰 货币与商店', link: '/money/' },
          { text: '🎮 街机指南', link: '/bnes/' },
          { text: '🐧 账号绑定与群内查询', link: '/qq_group/' },
          { text: '😊 服务器特殊配方', link: '/customrecipe/' },
          {
            text: '🧰新模组服',
            collapsed: false,
            items: [
              { text: '领地系统使用说明', link: '/new-mod/' },
              { text: '领地物品配方与功能', link: '/new-mod/goml-recipes' }
            ]
          },
          { text: '📦旧模组服介绍', link: '/mod/' }

        ]
      },
      {
        text: '其它',
        collapsed: false,
        items: [
          { text: '关于', link: '/team/' }
        ]
      }
    ],
    docFooter: { // 自定义上下页名
      prev: '上一篇', next: '下一篇'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aruvelut-123/Stalir_Docs' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/2012569194' },
      { icon: 'qq',link: 'https://qm.qq.com/q/rcC29iyJk' }
    ],
    footer: { // 页脚
      message: '基于 MIT 协议发表。',
      copyright: `Copyright © ${dayjs().format("YYYY")} Kxkl2077`
    },
    lastUpdatedText: '上次更新', // 上次更新显示文本
    returnToTopLabel: '返回顶部', // 更改手机端菜单文字显示
    outline: { // 大纲显示 1-6 级标题
      level: [1, 6],
      label: '目录'
    },
    search: {
      provider: 'local',
    },
  },
})
