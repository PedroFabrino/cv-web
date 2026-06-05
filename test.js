import { createApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './src/App.vue'
import { createI18n } from 'vue-i18n'
import en from './src/locales/en.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: { en }
})

const app = createApp(App)
app.use(i18n)

renderToString(app).then(html => {
  console.log("RENDER SUCCESS!")
  console.log(html.substring(0, 500))
}).catch(err => {
  console.error("RENDER ERROR:", err)
})
