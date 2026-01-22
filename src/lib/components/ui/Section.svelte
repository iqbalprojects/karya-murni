<script>
	import DiamondIcon from '$lib/icons/DiamondIcon.svelte';

	let { variant = '', children } = $props();
</script>

<div class="flex items-center gap-x-1.5 {variant === 'primary' ? 'text-[#2D5EA2]' : 'text-white'}">
	<DiamondIcon />
	<h3 class="font-semibold">
		{@render children?.()}
	</h3>
	<DiamondIcon />
</div>
