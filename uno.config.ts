import presetWind4 from '@unocss/preset-wind4'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
	presets: [
		presetWind4(),
	],
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
	],
	theme: {
		colors: {
			primary: {
				50: '#f0fdf4',
				100: '#dcfce7',
				200: '#b9f8cf',
				300: '#7bf1a7',
				400: '#06df72',
				500: '#00c950',
				600: '#00a63e',
				700: '#008235',
				800: '#026630',
				900: '#0d542b',
				950: '#032e15',
				DEFAULT: '#06df72',
			},
			secondary: {
				50: 'oklch(0.97 0.014 254.604)',
				100: 'oklch(0.932 0.032 255.585)',
				200: 'oklch(0.882 0.059 254.128)',
				300: 'oklch(0.809 0.105 251.813)',
				400: 'oklch(0.707 0.165 254.624)',
				500: 'oklch(0.623 0.214 259.815)',
				600: 'oklch(0.546 0.245 262.881)',
				700: 'oklch(0.488 0.243 264.376)',
				800: 'oklch(0.424 0.199 265.638)',
				900: 'oklch(0.379 0.146 265.522)',
				950: 'oklch(0.282 0.091 267.935)',
				DEFAULT: 'oklch(0.707 0.165 254.624)',
			},
			info: {
				DEFAULT: 'oklch(0.707 0.165 254.624)',
			},
			success: {
				DEFAULT: 'oklch(0.792 0.209 151.711)',
			},
			warning: {
				DEFAULT: 'oklch(0.852 0.199 91.936)',
			},
			error: {
				DEFAULT: 'oklch(0.704 0.191 22.216)',
			},
			neutral: {
				DEFAULT: 'oklch(0.704 0.04 256.788)',
			},
		},
	},
	rules: [
		[/^leading-([.\d]+)$/, ([_, num]) => ({ 'line-height': `${num}` })],
	],
})
