<script>
	import heroBackground from '$lib/assets/images/hero-bg-home.webp';

	import Services from '$lib/components/sections/home/Services.svelte';
	import AboutUs from '$lib/components/sections/home/AboutUs.svelte';
	import divider from '$lib/assets/images/divider.webp';
	import Projects from '$lib/components/sections/home/Projects.svelte';
	import TrackRecords from '$lib/components/sections/home/TrackRecords.svelte';
	import News from '$lib/components/sections/home/News.svelte';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO 
	title="Home"
	description="Leading Palm Estate Contractor Since 1981. We provide premium heavy equipment and expert land clearing services."
	keywords="palm estate, contractor, heavy equipment, land clearing, karya murni, indonesia"
/>

<div>
	<Hero backgroundImage={heroBackground} class="aspect-[9/19.5] bg-center lg:aspect-video">
		<div class="space-y-4 font-faculty-glyphic">
			<Animate variant="top">
				<Section>KARYA MURNI GROUP</Section>
			</Animate>
			<Animate variant="left">
				<h1 class="text-5xl leading-tight lg:text-[76px]">
					Leading Palm Estate Contractor Since 1981
				</h1>
			</Animate>
		</div>
		<Animate variant="bottom">
			<div class="flex flex-wrap gap-3">
				<Button href="/services/land-clearing" variant="secondary">Our Services</Button>
				<Button href="/projects" class="bg-white/20">View Projects</Button>
			</div>
		</Animate>
	</Hero>
	<Services />
	<AboutUs />
	<img src={divider} alt="Divider" class="h-5 w-full object-cover" />
	<Projects />
	<Clients />
	<TrackRecords />
	<News />
	<ContactUs />
</div>
