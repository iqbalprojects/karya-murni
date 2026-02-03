<script>
	let { backgroundImage, class: className = '', children } = $props();
</script>

<section
	class="relative bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.6)_77.52%)] {className}"
	style="background-image: url({backgroundImage})"
>
	<div class="relative z-10 container mx-auto flex h-full items-end px-20 pb-20">
		<div class="max-w-4xl space-y-9 text-white">
			{@render children?.()}
		</div>
	</div>
</section>
