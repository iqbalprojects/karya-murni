<script>
	import Projects from '$lib/components/sections/home/Projects.svelte';
	import heroBackground from '$lib/assets/images/terracing.webp';
	import Hero from '$lib/components/ui/Hero.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
	title="Projects" 
	description="Explore our portfolio of successful projects across Indonesia, showcasing our expertise in plantation development and earthworks."
/>

<div>
	<Hero backgroundImage={heroBackground} class="aspect-9/16 bg-center lg:aspect-[2.77/1]">
		<Animate variant="bottom">
			<h1 class="font-faculty-glyphic text-5xl leading-tight lg:text-[76px]">Projects</h1>
		</Animate>
	</Hero>
	<Projects />
</div>
