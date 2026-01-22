<script>
	import heroBackground from '$lib/assets/images/hero-bg-services.jpeg';
	import Section from '$lib/components/ui/Section.svelte';
</script>

<section
	class="relative aspect-3/1 bg-black/40 bg-cover bg-no-repeat bg-blend-multiply"
	style="background-image: url({heroBackground})"
>
	<div class="container mx-auto flex h-full items-end px-20 pb-20">
		<div class="max-w-4xl space-y-9 text-white">
			<div class="space-y-4 font-faculty-glyphic">
				<Section>Our Services</Section>
				<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">Land Clearing</h1>
			</div>
		</div>
	</div>
</section>
