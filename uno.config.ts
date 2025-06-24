import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	theme: {
		breakpoints: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
			'3xl': '1920px',
		},
	},
	rules: [
		[/^leading-([.\d]+)$/, ([_, num]) => ({ 'line-height': `${num}` })],
	],
})
