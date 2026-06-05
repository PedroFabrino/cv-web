import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createI18n } from 'vue-i18n'
import App from './src/App.vue'
import en from './src/locales/en.json'
import pt from './src/locales/pt.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: { en, pt }
})

const app = createSSRApp(App)
app.use(i18n)

renderToString(app).then(html => {
  console.log("RENDER SUCCESS!")
  if (!html.includes('class="hero"')) {
    console.log("HERO IS MISSING FROM RENDERED HTML!")
  } else {
    console.log("HERO IS PRESENT!")
  }
}).catch(err => {
  console.error("RENDER ERROR:", err)
})
