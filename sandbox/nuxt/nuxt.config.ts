// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  postcss: {
    plugins: { '@mfauzanap_pandacss/dev/postcss': {} },
  },
  css: ['~/assets/main.css'],
})
