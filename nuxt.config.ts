// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,

    tsConfig: {
      // The vueCompilerOptions key is not supported in the defineNuxtConfig's tsConfig yet.
      // However, its features still work as expected, as you can see in MyBtn.vue
      vueCompilerOptions: {
        /**
         * `strictTemplates` is here to show that the `vueCompilerOptions` are still working as expected.
         *
         * The `strictTemplates` option from vue-language-tools
         * @link https://github.com/vuejs/language-tools/blob/master/CHANGELOG.md#0384-2022711
         *
         * When enabled, it only allows using props that are defined
         * in the component's props option, thus preventing fallthrough
         * attributes from being passed in the template.
         *
         */
        strictTemplates: true,
      },
    },
  },
});
