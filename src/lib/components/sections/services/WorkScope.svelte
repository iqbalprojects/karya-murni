<script>
	import underbushing from '$lib/assets/images/underbushing.jpeg';
	import felling from '$lib/assets/images/felling.jpeg';
	import stacking from '$lib/assets/images/stacking.jpeg';
	import terracing from '$lib/assets/images/terracing.jpeg';
	import fieldDrain from '$lib/assets/images/field-drain.jpeg';
	import boundaryDrain from '$lib/assets/images/boundary-drain.jpeg';
	import makingBridge from '$lib/assets/images/making-bridge.jpeg';
	import makingRoad from '$lib/assets/images/making-road.jpeg';

	const workScopeItems = [
		{ image: underbushing, title: 'Underbushing' },
		{ image: felling, title: 'Felling' },
		{ image: stacking, title: 'Stacking' },
		{ image: terracing, title: 'Terracing' },
		{ image: fieldDrain, title: 'Field Drain' },
		{ image: boundaryDrain, title: 'Boundary Drain' },
		{ image: makingBridge, title: 'Making Bridge' },
		{ image: makingRoad, title: 'Making Road' }
	];
</script>

<section class="container mx-auto space-y-[60px] p-20">
	<div class="max-w-[628px] space-y-4">
		<h2 class="font-faculty-glyphic text-5xl">Work Scope</h2>
		<p class="text-lg text-gray-600">
			Our land clearing services cover the full range of preparatory tasks required for estate-grade
			development:
		</p>
	</div>
	<ul class="grid grid-cols-4 gap-2">
		{#each workScopeItems as item}
			<li class="relative">
				<img src={item.image} alt={item.title} class="aspect-video rounded-sm" />
				<p class="absolute bottom-[30px] left-6 font-faculty-glyphic text-2xl text-white">
					{item.title}
				</p>
			</li>
		{/each}
	</ul>
</section>
