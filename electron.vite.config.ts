import { defineConfig, externalizeDepsPlugin, swcPlugin } from 'electron-vite';
import { resolve } from 'path';
// import { defineConfig, externalizeDepsPlugin, swcPlugin, loadEnv } from 'electron-vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [swcPlugin(), externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
      },
    },
    plugins: [react()],
  },
});

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // By default, only env variables prefixed with `MAIN_VITE_`,
//   // `PRELOAD_VITE_` and `RENDERER_VITE_` are loaded,
//   // unless the third parameter `prefixes` is changed.
//   const env = loadEnv(mode)

//   return {
//     main: {
//       plugins: [swcPlugin(), externalizeDepsPlugin()]
//     },
//     preload: {
//       plugins: [externalizeDepsPlugin()]
//     },
//     renderer: {
//       resolve: {
//         alias: {
//           '@renderer': resolve('src/renderer/src')
//         }
//       },
//       plugins: [react()]
//     }
//   }
// })
