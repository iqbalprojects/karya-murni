<script>
	import Section from '$lib/components/ui/Section.svelte';
	import underbushing from '$lib/assets/images/underbushing.jpeg';
	import felling from '$lib/assets/images/felling.jpeg';
	import stacking from '$lib/assets/images/stacking.jpeg';
	import terracing from '$lib/assets/images/terracing.jpeg';
	import fieldDrain from '$lib/assets/images/field-drain.jpeg';
	import boundaryDrain from '$lib/assets/images/boundary-drain.jpeg';
	import makingBridge from '$lib/assets/images/making-bridge.jpeg';
	import makingRoad from '$lib/assets/images/making-road.jpeg';
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

<section class="space-y-20 py-20">
	<div class="container mx-auto space-y-3 px-20">
		<Section variant="primary">Milestone Timeline</Section>
		<h2 class="font-faculty-glyphic text-5xl">Our Progress Through the Decades</h2>
	</div>
	<div class="border-t">
		<ul class="container mx-auto grid -translate-y-2 grid-cols-4 gap-x-11 px-20">
			{#each timelines as timeline}
				<li class="flex h-full flex-col space-y-10">
					<DiamondLargeIcon />
					<div class="flex h-[346px] flex-1 flex-col justify-between gap-y-10">
						<div class="space-y-3">
							<p class="font-faculty-glyphic text-[32px]">{timeline.year}</p>
							<p class="text-gray-600">{timeline.description}</p>
						</div>
						<img
							src={timeline.image}
							alt={timeline.description}
							class="mt-auto aspect-video h-[161px] w-full rounded-sm object-cover"
						/>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
