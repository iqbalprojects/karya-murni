<script>
	import underbushing from '$lib/assets/images/underbushing.webp';
	import felling from '$lib/assets/images/felling.webp';
	import stacking from '$lib/assets/images/stacking.webp';
	import terracing from '$lib/assets/images/terracing.webp';
	import fieldDrain from '$lib/assets/images/field-drain.webp';
	import boundaryDrain from '$lib/assets/images/boundary-drain.webp';
	import makingBridge from '$lib/assets/images/making-bridge.webp';
	import makingRoad from '$lib/assets/images/making-road.webp';

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

<section class="container mx-auto space-y-[52px] px-5 pt-12 pb-[60px] lg:space-y-[60px] lg:p-20">
	<div class="max-w-[628px] space-y-4">
		<h2 class="font-faculty-glyphic text-4xl lg:text-5xl">Work Scope</h2>
		<p class="text-gray-600 lg:text-lg">
			Our land clearing services cover the full range of preparatory tasks required for estate-grade
			development:
		</p>
	</div>
	<ul class="grid grid-cols-2 gap-2 lg:grid-cols-4">
		{#each workScopeItems as item}
			<li class="relative overflow-hidden rounded-sm">
				<img src={item.image} alt={item.title} class="aspect-square object-cover lg:aspect-video" />
				<!-- Progressive blur -->
				<div
					class="absolute inset-x-0 top-1/6 bottom-0 backdrop-blur-sm"
					style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
				></div>
				<!-- Gradient overlay -->
				<div
					class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"
				></div>
				<p
					class="absolute bottom-4 left-4 max-w-[140.5px] font-faculty-glyphic text-xl text-white lg:bottom-[30px] lg:left-6 lg:text-2xl"
				>
					{item.title}
				</p>
			</li>
		{/each}
	</ul>
</section>
