<script>
	let { backgroundImage, class: className = '', children } = $props();
</script>

<section
	class="relative bg-cover bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.6)_77.52%)] {className}"
	style="background-image: url({backgroundImage})"
>
	<div class="relative z-10 container mx-auto flex h-full items-end px-5 pb-14 lg:px-20 lg:pb-20">
		<div class="max-w-[353px] space-y-9 text-white lg:max-w-4xl">
			{@render children?.()}
		</div>
	</div>
</section>
