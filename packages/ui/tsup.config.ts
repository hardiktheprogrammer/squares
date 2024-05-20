import { defineConfig } from 'tsup'

export default defineConfig({
    format: ['cjs', 'esm'], // Output formats for CommonJS and ESM modules
    minify: false, // Whether to minify output
    clean: true, // Clean the output directory before building
    outDir: 'lib', // Output directory
    dts: true, // Generate .d.ts file
    external: ['react', 'react-dom'],
    entry: [
        'src/components/alert',
        'src/components/avatar',
        'src/components/background',
        'src/components/button',
        'src/components/card',
        'src/components/carousel',
        'src/components/checkbox',
        'src/components/confetti',
        'src/components/cubik-table',
        'src/components/divider',
        'src/components/empty-state',
        'src/components/form-stepper',
        'src/components/helper-text',
        'src/components/input-container',
        'src/components/input-field',
        'src/components/input-label',
        'src/components/links',
        'src/components/logo',
        'src/components/menu-list',
        'src/components/modal',
        'src/components/ping-icon',
        'src/components/provider',
        'src/components/radio-group',
        'src/components/responsive-modal',
        'src/components/segment',
        'src/components/select',
        'src/components/spinner',
        'src/components/subhead',
        'src/components/tabs',
        'src/components/tag',
        'src/components/text',
        'src/components/toast',
        'src/components/toogle-switch',
        'src/components/tooltip',
        'src/config',
        'src/styles',
        'src/icons',
    ],
    treeshake: true,
    sourcemap: 'inline',
    splitting: false,
    injectStyle: false,
})
