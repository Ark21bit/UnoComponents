// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	components: {
		dirs: [
			{
				path: '~/components/atoms',
				pathPrefix: false,
			},
			'~/components',
		],
	},
	future: {
		compatibilityVersion: 4,
	},
	css: ['assets/css/main.css'],
	experimental: {
		typedPages: true,
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxt/image',
		'@nuxt/eslint',
		'@nuxt/icon',
		'@nuxt/scripts',
		'@formkit/nuxt',
		'@nuxt/fonts',
	],
	eslint: {
		config: {
			stylistic: true,
		},
	},
})
