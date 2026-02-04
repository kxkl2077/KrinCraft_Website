import type { EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Underline } from '@theojs/lumen'
import '@theojs/lumen/style'
import './var.css'

export default { 
  ...DefaultTheme,
  enhanceApp: ({ app }: EnhanceAppContext) => {
    app.component('Home', Underline)
  } 
}