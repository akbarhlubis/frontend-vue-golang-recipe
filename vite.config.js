import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginVueDevTools,
    // VitePWA({ 
    //   registerType: 'autoUpdate',
    //   devOptions: {
    //     enabled: true
    //   },
    //   manifest: {
    //     name: 'My Awesome App',
    //     short_name: 'MyApp',
    //     description: 'My Awesome App description',
    //     theme_color: '#ffffff',
    //     icons:[
    //       {
    //         src:"/icons/icon-512x512.png/",
    //         sizes:"512x512",
    //         type:"image/png",
    //         purpose:"any maskable"
    //       }
    //     ]
    //   }
    // })
  ],
})
