<script>
	import TreeIcon from '$lib/icons/TreeIcon.svelte';

	const benefits = [
		'<b>Clean and accessible land</b> ready for the next development phase',
		'Improved land structure through <b>controlled terracing</b> and <b>drainage</b>',
		'<b>Safer conditions</b> for workers and heavy equipment',
		'<b>Efficient</b> progress supported by a skilled team and <b>reliable</b> machinery'
	];
</script>

<section class="container mx-auto grid grid-cols-2 gap-x-[130px] p-20">
	<div class="space-y-5">
		<h2 class="font-faculty-glyphic text-5xl">Overview</h2>
		<p class="text-lg text-gray-950">
			Our land clearing operations support estate development by removing vegetation, preparing
			slopes, and establishing proper drainage systems. Each step is executed with precision to
			ensure the land is stable, accessible, and ready for downstream activities such as replanting,
			roadwork, or infrastructure development.
		</p>
	</div>
	<div class="divide-y rounded-md bg-white p-7 drop-shadow-sm">
		<h3 class="flex items-center gap-x-3 pb-7 font-faculty-glyphic text-[28px]">
			<TreeIcon /> Key benefits
		</h3>
		<ul class="list-disc space-y-2 pt-7 pl-5 marker:text-[#0D26484D]">
			{#each benefits as benefit}
				<li class="text-lg">{@html benefit}</li>
			{/each}
		</ul>
	</div>
</section>
