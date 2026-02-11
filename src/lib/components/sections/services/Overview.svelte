<script>
	import Animate from '$lib/components/ui/Animate.svelte';
	import TreeIcon from '$lib/icons/TreeIcon.svelte';

	const benefits = [
		'<b>Clean and accessible land</b> ready for the next development phase',
		'Improved land structure through <b>controlled terracing</b> and <b>drainage</b>',
		'<b>Safer conditions</b> for workers and heavy equipment',
		'<b>Efficient</b> progress supported by a skilled team and <b>reliable</b> machinery'
	];
</script>

<section class="container mx-auto grid gap-x-[130px] gap-y-10 px-5 py-12 lg:grid-cols-2 lg:p-20">
	<Animate variant="left">
		<div class="space-y-4 lg:space-y-5">
			<h2 class="font-faculty-glyphic text-4xl lg:text-5xl">Overview</h2>
			<p class="text-gray-950 lg:text-lg">
				Our land clearing operations support estate development by removing vegetation, preparing
				slopes, and establishing proper drainage systems. Each step is executed with precision to
				ensure the land is stable, accessible, and ready for downstream activities such as
				replanting, roadwork, or infrastructure development.
			</p>
		</div>
	</Animate>
	<Animate variant="right">
		<div class="divide-y rounded-md bg-white p-6 drop-shadow-sm lg:p-7">
			<h3
				class="flex items-center gap-x-3 pb-6 font-faculty-glyphic text-2xl lg:pb-7 lg:text-[28px]"
			>
				<TreeIcon class="h-7 w-7 lg:h-12 lg:w-12" /> Key benefits
			</h3>
			<ul class="list-disc space-y-2 px-2 pt-7 marker:text-[#0D26484D]">
				{#each benefits as benefit}
					<li class="lg:text-lg">{@html benefit}</li>
				{/each}
			</ul>
		</div>
	</Animate>
</section>
