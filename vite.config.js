import { defineConfig } from 'vite'
import { resolve } from 'path'
import vitePluginPugI18n from 'vite-plugin-pug-i18n'

export default defineConfig({
    resolve: {
        alias: {
            '~': resolve(__dirname, './node_modules')
        }
    },
    preview: {
        port: 8080
    },
    plugins: [
        vitePluginPugI18n({
            pages: {
                baseDir: resolve(__dirname, 'src/pages')
            },
            langs: {
                baseDir: resolve(__dirname, 'src/languages')
            },
            locals: {
                viteLogo: '/vite.svg'
            },
            options: { pretty: true }
        })
    ],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/index-[hash][extname]',
                entryFileNames: 'assets/index-[hash].js'
            }
        }
    }
})
