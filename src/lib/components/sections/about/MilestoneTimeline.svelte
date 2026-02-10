<script>
	import Section from '$lib/components/ui/Section.svelte';
	import underbushing from '$lib/assets/images/underbushing.webp';
	import felling from '$lib/assets/images/felling.webp';
	import stacking from '$lib/assets/images/stacking.webp';
	import terracing from '$lib/assets/images/terracing.webp';
	import fieldDrain from '$lib/assets/images/field-drain.webp';
	import boundaryDrain from '$lib/assets/images/boundary-drain.webp';
	import makingBridge from '$lib/assets/images/making-bridge.webp';
	import makingRoad from '$lib/assets/images/making-road.webp';
	import DiamondLargeIcon from '$lib/icons/DiamondLargeIcon.svelte';

	const timelines = [
		{
			year: '1981',
			description: 'Company founded, beginning operations as a palm-estate contractor.',
			image: underbushing
		},
		{
			year: '1993',
			description: 'Expansion of fleet, services, and geographic coverage across Indonesia.',
			image: felling
		},
		{
			year: '2004',
			description:
				'Strengthening partnerships with major plantation groups; continued modernization of equipment and methods.',
			image: terracing
		},
		{
			year: '2020',
			description:
				'Advancing sustainable practices, digital project monitoring, and expanding land-development and infrastructure services.',
			image: makingRoad
		}
	];
</script>

<section class="space-y-10 px-5 py-12 lg:space-y-20 lg:px-0 lg:py-20">
	<div class="container mx-auto space-y-3 lg:px-20">
		<Section variant="primary">Milestone Timeline</Section>
		<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">
			Our Progress Through the Decades
		</h2>
	</div>
	<div class="lg:border-t">
		<ul class="container mx-auto grid gap-x-11 gap-y-10 lg:-translate-y-2 lg:grid-cols-4 lg:px-20">
			{#each timelines as timeline, index}
				<li class="relative flex h-full items-baseline space-y-10 lg:flex-col">
					<!-- Vertical connecting line for mobile (hidden on desktop) -->
					{#if index < timelines.length - 1}
						<div
							class="absolute top-4 left-[7px] h-[calc(100%+2.5rem)] w-px bg-gray-300 lg:hidden"
							aria-hidden="true"
						></div>
					{/if}

					<div class="relative z-10">
						<DiamondLargeIcon />
					</div>
					<div
						class="flex flex-1 flex-col justify-between gap-y-5 pl-[22px] lg:h-[346px] lg:gap-y-10 lg:pl-0"
					>
						<div class="space-y-2 lg:space-y-3">
							<p class="font-faculty-glyphic text-[28px] lg:text-[32px]">{timeline.year}</p>
							<p class="text-gray-600">{timeline.description}</p>
						</div>
						<img
							src={timeline.image}
							alt={timeline.description}
							class="mt-auto aspect-video w-full rounded-sm object-cover"
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
