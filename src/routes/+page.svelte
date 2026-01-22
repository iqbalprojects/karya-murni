<script>
	import heroBackground from '$lib/assets/images/hero-bg-home.jpeg';

	import Services from '$lib/components/sections/home/Services.svelte';
	import AboutUs from '$lib/components/sections/home/AboutUs.svelte';
	import divider from '$lib/assets/images/divider.png';
	import Projects from '$lib/components/sections/home/Projects.svelte';
	import TrackRecords from '$lib/components/sections/home/TrackRecords.svelte';
	import News from '$lib/components/sections/home/News.svelte';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<div>
	<Hero aspectRatio="aspect-video" backgroundImage={heroBackground}>
		<div class="space-y-4 font-faculty-glyphic">
			<Section>KARYA MURNI GROUP</Section>
			<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">
				Leading Palm Estate Contractor Since 1981
			</h1>
		</div>
		<div class="flex flex-wrap gap-3">
			<Button variant="secondary">Our Services</Button>
			<Button class="bg-white/20">View Projects</Button>
		</div>
	</Hero>
	<div class="container mx-auto">
		<Services />
		<AboutUs />
	</div>
	<img src={divider} alt="Divider" />
	<Projects />
	<TrackRecords />
	<News />
	<ContactUs />
</div>
