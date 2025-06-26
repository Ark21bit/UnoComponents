import antfu from '@antfu/eslint-config'

export default antfu({
	unocss: true,
	vue: true,
	typescript: true,
	stylistic: {
		indent: 'tab',
	},
	rules: {
		'vue/block-order': ['error', {
			order: [
				'template',
				'script',
				'style',
			],
		}],
	},
})
