<script>
	import Hero from '$lib/components/ui/Hero.svelte';
	import heroBackground from '$lib/assets/images/hero-bg-about.jpeg';
	import CompanyHistory from '$lib/components/sections/about/CompanyHistory.svelte';
	import VisionMission from '$lib/components/sections/about/VisionMission.svelte';
	import TrackRecords from '$lib/components/sections/home/TrackRecords.svelte';
	import StandardCompliance from '$lib/components/sections/about/StandardCompliance.svelte';
	import MilestoneTimeline from '$lib/components/sections/about/MilestoneTimeline.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';
</script>

<div>
	<Hero
		backgroundImage={heroBackground}
		class="aspect-9/16 [background-position-x:-10rem] lg:aspect-[2.77/1] lg:bg-bottom"
	>
		<div class="space-y-4 font-faculty-glyphic">
			<h1 class="text-4xl leading-tight md:text-6xl lg:text-[76px]">About Us</h1>
		</div>
	</Hero>
	<CompanyHistory />
	<VisionMission />
	<TrackRecords />
	<StandardCompliance />
	<MilestoneTimeline />
	<Clients />
	<ContactUs />
</div>
