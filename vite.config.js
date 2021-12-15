import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import path from 'path'

const pluginsFile = process.env.NODE_ENV === "production" ?
    './src/manifest.development.json' : './src/manifest.development.json'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        copy({
            targets: [
                { src: pluginsFile, dest: 'dist', rename : '/manifest.json' }, // 执行拷贝
                { src: './public/img', dest: 'dist'}
            ]
        })
    ],
    resolve: {
        alias: { // 設置路徑別名
            '@': path.resolve(__dirname, './src')
        }
    },
    // 設定index.html文件所在的位置
    root: 'src/',
    build: {
        outDir: path.join(__dirname, 'dist'),
        rollupOptions: {
            input: {
                options: path.resolve(__dirname, 'src/options.html'),
                popup: path.resolve(__dirname, 'src/popup.html')
            }
        }
    }
})
