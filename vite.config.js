import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://xsjy.whu.edu.cn',
        ws: true,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/doc': {
        target: 'https://docs.qq.com',
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/doc/, ''),
        headers: {
          Referer:
            'https://docs.qq.com/resource/sheet/public-worker.0ffd8f13ed8dfcb8ae84.js?lng=zh-CN',
          Host: 'https://docs.qq.com/sheet/DWmtpVWRlWEVXakpX?tab=BB08J2',
          Accept: 'application/json',
        },
      },
      '/wx': {
        target: 'https://qyapi.weixin.qq.com',
        ws: true,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/doc/, ''),
      },
    },
  },
})
