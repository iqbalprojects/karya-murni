<script>
	import DiamondIcon from '$lib/icons/DiamondIcon.svelte';

	let { variant = '', children } = $props();
</script>

<div
	class="flex items-center gap-x-1.5 {variant === 'primary'
		? 'font-semibold text-[#2D5EA2]'
		: 'text-white lg:font-semibold'}"
>
	<DiamondIcon />
	<h3 class="text-sm lg:text-base">
		{@render children?.()}
	</h3>
	<DiamondIcon />
</div>
