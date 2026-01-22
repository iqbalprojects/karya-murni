<script>
	import Section from '../../ui/Section.svelte';
	import about from '$lib/assets/images/about.jpeg';

	const abouts = [
		'40+ years of experience',
		'Pioneer in zero burning method',
		'Environmental sustainability focus'
	];
</script>

<section class="grid grid-cols-2 gap-x-[74px] p-20">
	<div class="flex max-w-[574px] flex-col justify-between">
		<div class="space-y-3">
			<Section variant="primary">About Us</Section>
			<h2 class="font-faculty-glyphic text-5xl leading-[115%]">
				Four Decades of Sustainable Land Development
			</h2>
		</div>
		<div class="space-y-5 text-gray-950">
			<p>
				Founded in 1981, our company began as a palm estate contractor working with leading
				organizations such as SIPE, Perkebunan Nusantara, and Lonsum. During the 1980s, we
				strengthened our reputation by adopting innovative and sustainable methods early on,
				including becoming one of the first to implement the Zero Burning Method (chipping) for
				replanting.
			</p>
			<p>
				This commitment to responsible practices has guided us for over four decades. As the
				industry grew, we expanded our capabilities while staying focused on delivering reliable,
				environmentally conscious land development solutions.
			</p>
		</div>
	</div>
	<div class="relative items-end justify-end">
		<img src={about} alt="Palm Tree" width="632" height="632" class="aspect-square" />
		<ul class="absolute bottom-6 left-6 space-y-2">
			{#each abouts as about}
				<li class="bg-gray-950 px-6 py-5 font-faculty-glyphic text-[22px] text-white">{about}</li>
			{/each}
		</ul>
	</div>
</section>
