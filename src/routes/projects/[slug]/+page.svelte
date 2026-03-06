<script lang="ts">
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
	import type { PageData } from './$types';
	import { plateToHtml } from '$lib/plate-to-html';

	let { data }: { data: PageData } = $props();

	let article = $derived(data.item.data);

	let contentData = $derived(article?.content ? JSON.parse(article.content) : {});
	
	let descriptionHtml = $derived(plateToHtml(article?.description ?? ''));

	let informations = $derived([
		{ title: 'Location', desc: article?.location || '' },
		{ title: 'Area covered', desc: contentData?.area || '' },
		{ title: 'Project duration', desc: contentData?.duration || '' },
		{ title: 'Year', desc: contentData?.year || '' },
		{
			title: 'Services',
			tag: contentData?.services || []
		}
	]);

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
						<Breadcrumb.Page class="capitalize">{(page.params.slug ?? '').replaceAll('-', ' ')}</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</Animate>
	</section>

	<section class="space-y-11">
		<div class="container mx-auto flex flex-col items-center gap-y-5 lg:flex-row lg:items-end lg:justify-between px-5 lg:px-20">
			<h1 class="font-faculty-glyphic text-4xl lg:text-5xl">{article.title}</h1>
			<div class="flex items-center gap-x-2">
				<LocationIcon />
				<h2 class="text-xl font-medium text-gray-600">{article.location}</h2>
			</div>
		</div>
		<img src={heroBackground} alt="Terracing" class="h-full w-full lg:aspect-[2.77/1]" />
	</section>
	<section class="container mx-auto grid grid-cols-1 gap-12 px-5 lg:grid-cols-8 lg:px-20 lg:pb-5">
		<ul class="space-y-6 text-xl lg:col-span-3">
			{#each informations as info}
				{#if info.tag}
					<li class="space-y-3">
						<h4 class="font-bold">{info.title}</h4>
						<ul class="flex flex-wrap items-center gap-x-2.5 gap-y-3 text-lg font-medium text-gray-600">
							{#each info.tag as tagItem}
								<li class="rounded-sm bg-gray-100 px-2 py-0.5">{tagItem}</li>
							{/each}
						</ul>
					</li>
				{:else}
					<li class="space-y-1">
						<h4 class="font-bold">{info.title}</h4>
						<p>{info.desc}</p>
					</li>
				{/if}
			{/each}
		</ul>
		<div class="space-y-[68px] lg:col-span-5">
			<div class="space-y-5 rounded-md border border-gray-200 bg-gray-50 p-8">
				<h3 class="font-faculty-glyphic text-2xl lg:text-[32px]">Project Highlight</h3>
				<p>
					{article.highlight}
				</p>
			</div>
			<div class="plate-content">
				{@html descriptionHtml}
			</div>
			<div class="space-y-5">
			{#each article.images_url as image}
				<img src={image} alt="Terracing" class="h-full w-full lg:aspect-video" />
			{/each}
		</div>
		</div>
	</section>
	<!-- <section class="space-y-8 bg-gray-50 py-10 md:space-y-12 md:py-16 lg:space-y-[60px] lg:py-20">
		<div class="container mx-auto flex flex-col gap-y-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-20">
			<h3 class="font-faculty-glyphic text-3xl md:text-4xl lg:text-5xl">Other projects</h3>
			<Button variant="primary" class="w-fit">View all projects</Button>
		</div>
		<Carousel.Root>
			<Carousel.Content class="pl-5 lg:pl-20">
				{#each workScopeItems as item}
					<Carousel.Item class="basis-10/12 sm:basis-5/12 md:basis-4/12 lg:basis-3/12">
						<div class="relative overflow-hidden rounded-sm">
							<img
								src={item.image}
								alt={item.title}
								class="aspect-square h-full w-full rounded-sm bg-cover object-cover"
							/>
							<h4
								class="absolute top-4 left-4 rounded-full bg-white/75 px-3 py-1 text-sm font-semibold text-[#2D5EA2] lg:top-6 lg:left-6 lg:text-base"
							>
								Land Clearing
							</h4>
							<div
								class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
								style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
							></div>
							<div class="absolute bottom-4 left-4 max-w-3xl space-y-1 text-white lg:bottom-5 lg:left-5">
								<h5 class="font-faculty-glyphic text-base sm:text-lg lg:text-xl">
									{article.title}
								</h5>
								<p class="text-xs font-medium text-white/60 sm:text-sm lg:text-base">{article.location}</p>
							</div>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</section> -->
	<ContactUs />
</div>
