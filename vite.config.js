import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://nx-academy.github.io/Creez-des-pipelines-CI-CD-avec-les-GitHub-Actions/',
  plugins: [react()],
  root: './src',
  test: {
    environment: 'happy-dom'
  }
})

