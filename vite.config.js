import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
       //server configuration in a Vite project.
  server:{
    port:'5001',
    strictPort:true,
    proxy:{
      '/png':'https://logoexpress.tubeguruji.com'
    }
  }
})
