<script>
	import Hero from '$lib/components/ui/Hero.svelte';
	import heroBackground from '$lib/assets/images/hero-bg-equipments.jpeg';
	import Categories from '$lib/components/sections/equipments/Categories.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import TrackRecords from '$lib/components/sections/home/TrackRecords.svelte';
</script>

<div>
	<Hero backgroundImage={heroBackground} class="aspect-[2.77/1] bg-bottom">
		<div class="space-y-4 font-faculty-glyphic">
			<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">Equipments & Assets</h1>
		</div>
	</Hero>
	<Categories />
	<Clients />
	<TrackRecords />
</div>
