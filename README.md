# vueCompilerOptions in nuxt.config.ts

Currently, the `defineNuxtConfig`'s `typescript.tsConfig.vueCompilerOptions` property is not officially supported in Nuxt.
However, it is still possible to use it to enable language features.

Enhancing the `tsConfig` interface to include the `vueCompilerOptions` property is a possible solution (the `VueCompilerOptions` type is currently available and exported from vue's languageModule), but an official solution would be much appreciated.

You can find this reproduction [on stackblitz](https://stackblitz.com/edit/github-58xcrx?file=README.md)

### Prerequisites

- A minimal Nuxt app started with `npx nuxi@latest init`
- `vue-tsc` and `typescript` installed as dev dependencies (see [Nuxt's TypeScript documentation](https://nuxt.com/docs/guide/concepts/typescript#type-checking))
- A `nuxt.config.ts` file with the `vueCompilerOptions` property added to the `tsConfig` property. To observe the behavior, the easiest way is to add the `strictTemplates` property to the `vueCompilerOptions` object.

### Steps to reproduce

1. Create a component and define a prop in the component using the `defineProps` macro and passing it the `Props` type argument
2. Use your new component in a page and pass it the prop you defined (this is not really necessary, but it's a good way to observe the behavior)
3. Pass your component a prop that is not defined in the component's `props`, (e.g. `:nonExistentProp="true"`)
4. Save and run `npx nuxi typecheck`. You l'll get one error from the `nuxt.config.ts` file, saying that the `vueCompilerOptions` property is not allowed, and one from the page where you used the component, saying that `non-existent-prop` is not defined in the component's `Props` type.
