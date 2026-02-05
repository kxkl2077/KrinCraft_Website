---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/kxkl2077.png',
    name: 'kxkl2024',
    title: '主要贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/kxkl2077' }
    ]
  },
  {
    avatar: 'https://github.com/aruvelut-123.png',
    name: 'Baymaxawa',
    title: '贡献者',
    links: [
      { icon: 'github', link: 'https://github.com/arvelut-123' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于
    </template>
    <template #lead>
      本食用文档主要由kxkl2024编写，其还有的Baymaxawa帮忙
      这个文档的目的只是为了玩家能够在Minecraft KrinCraft服务器中熟悉
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>