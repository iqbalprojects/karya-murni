<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
	import excavator from '$lib/assets/images/excavator.jpeg';
	import bulldozers from '$lib/assets/images/bulldozers.jpeg';
	import dumptruck from '$lib/assets/images/dumptruck.jpeg';
	import grader from '$lib/assets/images/grader.jpeg';
	import compactor from '$lib/assets/images/compactor.jpeg';
	import tracktor from '$lib/assets/images/tracktor.jpeg';

	const categories = [
		{ name: 'Excavator', href: 'excavator', unit: 250, image: excavator },
		{ name: 'Bulldozers', href: 'bulldozers', unit: 17, image: bulldozers },
		{ name: 'Dumptruck', href: 'dumptruck', unit: 42, image: dumptruck },
		{ name: 'Grader', href: 'grader', unit: 7, image: grader },
		{ name: 'Compactor', href: 'compactor', unit: 7, image: compactor },
		{ name: 'Tracktor', href: 'tracktor', unit: 17, image: tracktor }
	];
</script>

<section class="container mx-auto space-y-[60px] p-20">
	<div class="grid grid-cols-2">
		<div class="space-y-4">
			<h3 class="font-faculty-glyphic text-5xl">Categories</h3>
			<p class="text-lg text-gray-600">
				Our operations are supported by a robust fleet of 500+ heavy machinery units, maintained
				regularly to ensure performance, safety, and productivity in the field.
			</p>
		</div>
		<div class="flex items-end justify-end">
			<Button variant="primary"
				><span class="flex items-center">View all units <ChevronIcon /></span></Button
			>
		</div>
	</div>
	<ul class="grid grid-cols-3 border-[0.5px]">
		{#each categories as category}
			<li class="group relative h-[368px] border-[0.5px] bg-white p-7">
				<!-- Overlay -->
				<div
					class="pointer-events-none absolute inset-0 bg-[#0000000D] opacity-0 transition-opacity group-hover:opacity-100"
				></div>
				<div class="h-[124px] space-y-3">
					<p class="w-fit rounded-full bg-gray-200 px-2 py-0.5 text-[13px] font-semibold">
						{category.unit} units
					</p>
					<h3 class="font-faculty-glyphic text-[28px]">{category.name}</h3>
				</div>
				<img src={category.image} alt={category.name} class="px-[75px] py-[30px]" />
				<Button
					href="{page.url.pathname}/{category.href}"
					class="absolute top-1/2 right-1/2 z-10 translate-x-1/2 -translate-y-1/2 bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100"
					><span class="flex items-center">View all units <ChevronIcon /></span></Button
				>
			</li>
		{/each}
	</ul>
</section>
