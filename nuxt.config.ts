// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxtjs/supabase"],
  ui: {
    icons: ["carbon"],
  },
  routeRules: {
    "/auth": { redirect: "/auth/sign-in" },
  },
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts"],
  },
  supabase: {
    redirectOptions: {
      login: "/auth/sign-in",
      callback: "/auth/confirm",
      include: ["/dashboard(/*)?"],
      exclude: ["/"],
    },
  },
});
