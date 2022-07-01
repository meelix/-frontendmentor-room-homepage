const { resolve } = require('path')
import htmlImages from './vite-plugin-html-images/dist/index.js'
// import { createHtmlPlugin } from 'vite-plugin-html'

export default {
    root: "src",
    plugins: [
        htmlImages({
            tempDirname: '.tempimages',
        }),
        // createHtmlPlugin({
        //     minify: true,
        // }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
            }
        }
    },
}