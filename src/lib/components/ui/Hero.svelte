<script>
	let { backgroundImage, aspectRatio, children } = $props();
</script>

<section
	class="relative bg-black/40 bg-cover bg-no-repeat bg-blend-multiply {aspectRatio}"
	style="background-image: url({backgroundImage})"
>
	<div class="container mx-auto flex h-full items-end px-20 pb-20">
		<div class="max-w-4xl space-y-9 text-white">
			{@render children?.()}
		</div>
	</div>
</section>
