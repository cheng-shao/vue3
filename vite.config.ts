import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // 扩展名, 值为空数组时会报错
    extensions: ['.ts'],
  },
})
