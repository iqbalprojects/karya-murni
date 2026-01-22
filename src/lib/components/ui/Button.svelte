<script>
	let { variant = 'default', class: className = '', children, ...restProps } = $props();
</script>

<a
	class="cursor-pointer rounded-md px-[18px] py-2.5 font-medium backdrop-blur-[10px] {className} {variant ===
	'primary'
		? 'bg-[#213A5C] text-white'
		: variant === 'secondary'
			? 'bg-white text-black'
			: ''}"
	{...restProps}
>
	{@render children?.()}
</a>
