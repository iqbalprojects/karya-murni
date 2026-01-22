<script>
	import Hero from '$lib/components/ui/Hero.svelte';
	import heroBackground from '$lib/assets/images/hero-bg-services.jpeg';
	import Categories from '$lib/components/sections/equipments/Categories.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
</script>

<div>
	<Hero backgroundImage={heroBackground} aspectRatio="aspect-3/1">
		<div class="space-y-4 font-faculty-glyphic">
			<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">Equipments & Assets</h1>
		</div>
	</Hero>
	<div class="container mx-auto">
		<Categories />
	</div>
	<Clients />
</div>
