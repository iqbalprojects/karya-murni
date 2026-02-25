<script>
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Animate from '$lib/components/ui/Animate.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import LocationIcon from '$lib/icons/LocationIcon.svelte';
	import heroBackground from '$lib/assets/images/terracing.webp';
	import Button from '$lib/components/ui/Button.svelte';
	import underbushing from '$lib/assets/images/underbushing.webp';
	import felling from '$lib/assets/images/felling.webp';
	import stacking from '$lib/assets/images/stacking.webp';
	import terracing from '$lib/assets/images/terracing.webp';
	import fieldDrain from '$lib/assets/images/field-drain.webp';
	import boundaryDrain from '$lib/assets/images/boundary-drain.webp';
	import makingBridge from '$lib/assets/images/making-bridge.webp';
	import makingRoad from '$lib/assets/images/making-road.webp';
	import { page } from '$app/state';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';

	const informations = [
		{ title: 'Location', desc: 'Central Kalimantan, Indonesia' },
		{ title: 'Area covered', desc: '85 Ha' },
		{ title: 'Project duration', desc: '4 months' },
		{ title: 'Year', desc: '2024 – current' },
		{
			title: 'Services',
			tag: ['Land clearing', 'Replanting', 'Terracing', 'Drainage', 'Temporary infrastructure']
		}
	];

	const workScopeItems = [
		{ image: underbushing, title: 'Underbushing', company: 'Wilmar Group', location: 'Jambi' },
		{ image: felling, title: 'Felling', company: 'SIPEF Group', location: 'Jambi' },
		{ image: stacking, title: 'Stacking', company: 'Bahana Karya Semesta', location: 'Jambi' },
		{ image: terracing, title: 'Terracing', company: 'SIPEF Group', location: 'Jambi' },
		{ image: fieldDrain, title: 'Field Drain', company: 'Wilmar Group', location: 'Jambi' },
		{ image: boundaryDrain, title: 'Boundary Drain', company: 'Wilmar', location: 'Jambi' },
		{ image: makingBridge, title: 'Making Bridge', company: 'Wilmar', location: 'Jambi' },
		{ image: makingRoad, title: 'Making Road', company: 'Wilmar', location: 'Jambi' }
	];
</script>

<SEO
	title="Projects"
	description="Explore our portfolio of successful projects across Indonesia, showcasing our expertise in plantation development and earthworks."
/>

<div class="space-y-[60px] pt-[60px]">
	<section class="container mx-auto px-5 lg:px-20">
		<Animate variant="top">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page class="capitalize">{page.params.slug}</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</Animate>
	</section>

	<section class="space-y-11">
		<div class="container mx-auto flex items-end justify-between px-5 lg:px-20">
			<h1 class="font-faculty-glyphic text-5xl">Wilmar Group</h1>
			<div class="flex items-center gap-x-2">
				<LocationIcon />
				<h2 class="text-xl font-medium text-gray-600">Central Kalimantan, Indonesia</h2>
			</div>
		</div>
		<img src={heroBackground} alt="Terracing" class="h-full w-full lg:aspect-[2.77/1]" />
	</section>
	<section class="container mx-auto grid grid-cols-1 gap-12 px-5 lg:grid-cols-8 lg:px-20 lg:pb-5">
		<ul class="space-y-6 text-xl lg:col-span-3">
			<li class="space-y-1">
				<h4 class="font-bold">Location</h4>
				<p>Central Kalimantan, Indonesia</p>
			</li>
			<li class="space-y-1">
				<h4 class="font-bold">Area covered</h4>
				<p>85 Ha</p>
			</li>
			<li class="space-y-1">
				<h4 class="font-bold">Project duration</h4>
				<p>4 months</p>
			</li>
			<li class="space-y-1">
				<h4 class="font-bold">Year</h4>
				<p>2024 – current</p>
			</li>
			<li class="space-y-3">
				<h4 class="font-bold">Services</h4>
				<ul class="flex flex-wrap items-center gap-x-2.5 gap-y-3 text-lg font-medium text-gray-600">
					<li class="rounded-sm bg-gray-100 px-2 py-0.5">Land clearing</li>
					<li class="rounded-sm bg-gray-100 px-2 py-0.5">Replanting</li>
					<li class="rounded-sm bg-gray-100 px-2 py-0.5">Terracing</li>
					<li class="rounded-sm bg-gray-100 px-2 py-0.5">Drainage</li>
					<li class="rounded-sm bg-gray-100 px-2 py-0.5">Temporary infrastructure</li>
				</ul>
			</li>
		</ul>
		<div class="space-y-[68px] lg:col-span-5">
			<div class="space-y-5 rounded-md border border-gray-200 bg-gray-50 p-8">
				<h3 class="font-faculty-glyphic text-[32px]">Project Highlight</h3>
				<p>
					Zero-burning replanting implemented, improving palm density by 10% compared to the
					previous block while preserving soil quality and reducing environmental impact.
				</p>
			</div>
			<p>
				The estate at Wilmar Group consisted of mature palms aged 25–28 years. The main challenges
				were declining productivity due to aging trees, uneven spacing, and soil compaction.
				Conventional land clearing posed environmental risks, making a sustainable zero-burning
				approach essential for long-term plantation health.
			</p>
			<div>
				<h3 class="font-faculty-glyphic text-[40px]">Solutions</h3>
				<div>
					<h4>Land Clearing</h4>
					<ul>
						<li>Controlled felling of old palms</li>
						<li>Removal of underbrush and stacking of timber</li>
						<li>Terracing and drainage channel installation</li>
					</ul>
				</div>
				<div>
					<h4>Soil Preparation</h4>
					<ul>
						<li>Plowing and leveling</li>
						<li>Organic enrichment and soil aeration</li>
					</ul>
				</div>
				<div>
					<h4>Planting</h4>
					<ul>
						<li>High-density palm seedlings planted with precise spacing</li>
						<li>Disease-resistant seedlings to ensure higher survival rate</li>
					</ul>
				</div>
				<div>
					<h4>Infrastructure Support</h4>
					<ul>
						<li>Field drains and boundary drains constructed</li>
						<li>Temporary access roads for machinery and logistics</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="space-y-[60px] bg-gray-50 py-20">
		<div class="container mx-auto flex justify-between px-5 lg:px-20">
			<h3 class="font-faculty-glyphic text-5xl">Other projects</h3>
			<Button variant="primary">View all projects</Button>
		</div>
		<Carousel.Root>
			<Carousel.Content class="pl-5">
				{#each workScopeItems as item}
					<Carousel.Item class="basis-3/12">
						<div class="relative overflow-hidden rounded-sm">
							<img
								src={item.image}
								alt={item.title}
								class="aspect-square h-full w-full rounded-sm bg-cover object-cover"
							/>
							<h4
								class="absolute top-6 left-6 rounded-full bg-white/75 px-3 py-1 font-semibold text-[#2D5EA2]"
							>
								Land Clearing
							</h4>
							<div
								class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
								style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
							></div>
							<div class="absolute bottom-5 left-5 max-w-3xl space-y-1 text-white">
								<h5 class="font-faculty-glyphic text-lg lg:text-xl">
									{item.company}
								</h5>
								<p class="text-sm font-medium text-white/60 lg:text-base">{item.location}</p>
							</div>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</section>
	<ContactUs />
</div>
