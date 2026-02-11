<script>
	import heroBackground from '$lib/assets/images/hero-bg-services.webp';
	import Hero from '$lib/components/ui/Hero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Overview from '$lib/components/sections/services/Overview.svelte';
	import divider from '$lib/assets/images/divider.webp';
	import WorkScope from '$lib/components/sections/services/WorkScope.svelte';
	import Methodology from '$lib/components/sections/services/Methodology.svelte';
	import Gallery from '$lib/components/sections/services/Gallery.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import TrackRecords from '$lib/components/sections/services/TrackRecords.svelte';
	import Portfolio from '$lib/components/sections/services/Portfolio.svelte';
	import Projects from '$lib/components/sections/home/Projects.svelte';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';
</script>

<div>
	<Hero
		backgroundImage={heroBackground}
		class="aspect-9/16 bg-center lg:aspect-[2.77/1] lg:bg-top-left"
	>
		<div class="space-y-4 font-faculty-glyphic">
			<Animate variant="top">
				<Section>Our Services</Section>
			</Animate>
			<Animate variant="bottom">
				<h1 class="text-5xl leading-tight lg:text-[76px]">Land Clearing</h1>
			</Animate>
		</div>
	</Hero>
	<Overview />
	<img src={divider} alt="Divider" class="h-5 w-full object-cover" />
	<WorkScope />
	<Methodology />
	<Gallery />
	<Clients />
	<TrackRecords />
	<Portfolio />
	<Projects />
	<ContactUs />
</div>
