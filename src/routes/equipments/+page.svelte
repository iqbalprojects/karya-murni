<script>
	import Hero from '$lib/components/ui/Hero.svelte';
	import heroBackground from '$lib/assets/images/hero-bg-equipments.webp';
	import Categories from '$lib/components/sections/equipments/Categories.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import TrackRecords from '$lib/components/sections/home/TrackRecords.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';
</script>

<div>
	<Hero
		backgroundImage={heroBackground}
		class="aspect-9/16 bg-center lg:aspect-[2.77/1] lg:bg-bottom"
	>
		<Animate variant="bottom">
			<h1 class="font-faculty-glyphic text-5xl leading-tight lg:max-w-full lg:text-[76px]">
				Equipments & Assets
			</h1>
		</Animate>
	</Hero>
	<Categories />
	<Clients />
	<TrackRecords />
</div>
