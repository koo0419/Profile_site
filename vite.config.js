import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 주소가 https://koo0419.github.io/Profile_site/ 이므로 하위 경로를 지정합니다.
  base: '/Profile_site/',
})
