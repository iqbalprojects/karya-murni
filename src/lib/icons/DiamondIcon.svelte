<script>
	let { size = 6, class: className = '', ...restProps } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 6 6"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
	{...restProps}
>
	<rect x="3" width="4" height="4" rx="1" transform="rotate(45 3 0)" fill="currentColor" />
</svg>
