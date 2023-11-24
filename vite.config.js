import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        plugins: [
            vue(),
            Components({
                resolvers: [
                    PrimeVueResolver()
                ],
                extensions: ['vue'],
                deep: true,
                include: [/\.vue$/],
                dts: 'src/components.d.ts'
            }),
            AutoImport({ 
                include: [
                /\.[tj]s?$/, // .ts, .js
                /\.vue$/, /\.vue\?vue/, // .vue
                ],
                imports: [
                "vue",
                "vue-router",
                "pinia"
                ],
                dts: "src/auto-imports.d.ts",
                dirs: [ // Folder auto imports to create global variables
                "src/composable/**",
                "src/config/**",
                "src/stores/**"
                ],
                vueTemplate: true,
            }),
        ],
        resolve: {
            alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        server: {
            port: env.VITE_APP_PORT,
            watch: {
                usePolling: true
            }
        }
    })
}


