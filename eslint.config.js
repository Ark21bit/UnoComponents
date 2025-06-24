import antfu from '@antfu/eslint-config'

export default antfu({
	unocss: true,
	vue: true,
	stylistic: {
		indent: 'tab',
	},
	rules: {
		'vue/block-order': ['error', {
			order: [['script', 'template'], 'style'],
		}],
	},
})
