import { defineConfig } from 'vite'
// NOTE the -swc here:
import react from '@vitejs/plugin-react-swc' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/myappv2/',
})