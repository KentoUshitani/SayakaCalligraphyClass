/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                kinari: '#FAF8F3',  // 生成り - slightly darker cream/beige
                sumi: '#2A2A2A',    // 墨色 - deeper ink black
                kaede: '#C84843',   // 楓色 - deeper maple red
                'kinari-dark': '#F5F2E9', // Darker shade for contrast
            },
            fontFamily: {
                serif: ['"Noto Serif JP"', 'serif'],
                sans: ['"Noto Sans JP"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
