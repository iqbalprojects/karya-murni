<script>
	import Projects from '$lib/components/sections/home/Projects.svelte';
	import heroBackground from '$lib/assets/images/terracing.jpeg';
	import Hero from '$lib/components/ui/Hero.svelte';
</script>

<div>
	<Hero backgroundImage={heroBackground} class="aspect-[2.77/1] bg-center">
		<div class="space-y-4 font-faculty-glyphic">
			<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">Projects</h1>
		</div>
	</Hero>
	<Projects />
</div>
