<template>
	<component :is="as" :class="buttonClass">
		<slot name="prefix">
			<Icon v-if="prefixIcon" :name="prefixIcon" :class="iconClass" />
		</slot>
		<slot />
		<slot name="suffix">
			<Icon v-if="suffixIconName" :name="suffixIconName" :class="iconClass" />
		</slot>
	</component>
</template>

<script setup lang="ts">
const { as = 'button', prefixIcon, suffixIcon, loading, color = 'primary', variant = 'solid', size = 'md', ui, loadingIcon = 'eos-icons:loading' } = defineProps<{
	as?: string | Component
	prefixIcon?: string
	suffixIcon?: string
	loading?: boolean
	loadingIcon?: string
	color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
	variant?: 'link' | 'solid' | 'outline' | 'soft' | 'subtle' | 'ghost'
	size?: 'md' | 'xs' | 'sm' | 'lg' | 'xl'
	ui?: {
		root?: Partial<Record<'base' | 'font' | 'padding' | 'gap' | 'other' | 'text' | 'color' | 'rounded', string>>
		icon?: Partial<Record<'size' | 'other', string>>
	}
}>()

const suffixIconName = computed(() => {
	if (loading) return loadingIcon
	return suffixIcon
})

const UI = {
	root: {
		base: 'inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors cursor-pointer',
		rounded: 'rounded-md',
		font: 'font-medium',
		other: '',
		size: {
			xs: {
				padding: 'px-2 py-1',
				text: 'text-xs',
				gap: 'gap-1',
			},
			sm: {
				padding: 'px-2.5 py-1.5',
				text: 'text-xs',
				gap: 'gap-1.5',
			},
			md: {
				padding: 'px-2.5 py-1.5',
				text: 'text-sm',
				gap: 'gap-1.5',
			},
			lg: {
				padding: 'px-3 py-2',
				text: 'text-sm',
				gap: 'gap-2',
			},
			xl: {
				padding: 'px-3 py-2',
				text: 'text-base',
				gap: 'gap-2',
			},
		},
		color: {
			primary: {
				solid: 'text-white bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
				outline: 'ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
				soft: 'text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10',
				ghost: 'text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
				subtle: 'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
			},
			error: {
				solid: 'text-white bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error',
				outline: 'ring ring-inset ring-error/50 text-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-error',
				soft: 'text-error bg-error/10 hover:bg-error/15 active:bg-error/15 focus:outline-none focus-visible:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10',
				ghost: 'text-error hover:bg-error/10 active:bg-error/10 focus:outline-none focus-visible:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-error hover:text-error/75 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
				subtle: 'text-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-error',
			},
			secondary: {
				solid: 'text-white bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
				outline: 'ring ring-inset ring-secondary/50 text-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
				soft: 'text-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 focus:outline-none focus-visible:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10',
				ghost: 'text-secondary hover:bg-secondary/10 active:bg-secondary/10 focus:outline-none focus-visible:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-secondary hover:text-secondary/75 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary',
				subtle: 'text-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary',
			},
			success: {
				solid: 'text-white bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success',
				outline: 'ring ring-inset ring-success/50 text-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-success',
				soft: 'text-success bg-success/10 hover:bg-success/15 active:bg-success/15 focus:outline-none focus-visible:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10',
				ghost: 'text-success hover:bg-success/10 active:bg-success/10 focus:outline-none focus-visible:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-success hover:text-success/75 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success',
				subtle: 'text-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-success',
			},
			info: {
				solid: 'text-white bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info',
				outline: 'ring ring-inset ring-info/50 text-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
				soft: 'text-info bg-info/10 hover:bg-info/15 active:bg-info/15 focus:outline-none focus-visible:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10',
				ghost: 'text-info hover:bg-info/10 active:bg-info/10 focus:outline-none focus-visible:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-info hover:text-info/75 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info',
				subtle: 'text-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-info',
			},
			warning: {
				solid: 'text-white bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning',
				outline: 'ring ring-inset ring-warning/50 text-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-warning',
				soft: 'text-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 focus:outline-none focus-visible:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10',
				ghost: 'text-warning hover:bg-warning/10 active:bg-warning/10 focus:outline-none focus-visible:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-warning hover:text-warning/75 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning',
				subtle: 'text-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-warning',
			},
			neutral: {
				solid: 'text-white bg-neutral hover:bg-neutral/75 active:bg-neutral/75 disabled:bg-neutral aria-disabled:bg-neutral focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral',
				outline: 'ring ring-inset ring-neutral/50 text-neutral hover:bg-neutral/10 active:bg-neutral/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral',
				soft: 'text-neutral bg-neutral/10 hover:bg-neutral/15 active:bg-neutral/15 focus:outline-none focus-visible:bg-neutral/15 disabled:bg-neutral/10 aria-disabled:bg-neutral/10',
				ghost: 'text-neutral hover:bg-neutral/10 active:bg-neutral/10 focus:outline-none focus-visible:bg-neutral/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
				link: 'text-neutral hover:text-neutral/75 active:text-neutral/75 disabled:text-neutral aria-disabled:text-neutral focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral',
				subtle: 'text-neutral ring ring-inset ring-neutral/25 bg-neutral/10 hover:bg-neutral/15 active:bg-neutral/15 disabled:bg-neutral/10 aria-disabled:bg-neutral/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral',
			},
		},
	},
	icon: {
		size: {
			xs: 'size-4',
			sm: 'size-4',
			md: 'size-5',
			lg: 'size-5',
			xl: 'size-6',
		},
	},
}

const iconClass = computed(() => {
	let _class = ''
	_class = `${_class + (ui?.icon?.size ?? UI.icon.size[size])} `
	_class = _class + ui?.icon?.other
	return _class
})

const buttonClass = computed(() => {
	let _class = ''
	_class = `${_class + (ui?.root?.base ?? UI.root.base)} `
	_class = `${_class + (ui?.root?.font ?? UI.root.font)} `
	_class = `${_class + (ui?.root?.rounded ?? UI.root.rounded)} `
	_class = `${_class + (ui?.root?.padding ?? UI.root.size[size].padding)} `
	_class = `${_class + (ui?.root?.text ?? UI.root.size[size].text)} `
	_class = `${_class + (ui?.root?.gap ?? UI.root.size[size].gap)} `
	_class = `${_class + (ui?.root?.color ?? UI.root.color[color][variant])} `
	_class = `${_class + (loading || suffixIcon || prefixIcon ? 'justify-between' : 'justify-center')} `
	_class = _class + ui?.root?.other
	return _class
})
</script>
