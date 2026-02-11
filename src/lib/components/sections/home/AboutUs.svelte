<script>
	import Section from '$lib/components/ui/Section.svelte';
	import about from '$lib/assets/images/about.webp';
	import kmpLeft from '$lib/assets/images/kmp-left.webp';
	import DiamondIcon from '$lib/icons/DiamondIcon.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';

	const abouts = [
		'40+ years of experience',
		'Pioneer in zero burning method',
		'Environmental sustainability focus'
	];
</script>

<section class="relative">
	<div class="absolute top-0 left-0 z-0 hidden h-[518px] lg:block">
		<img src={kmpLeft} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div
		class="relative z-10 container mx-auto grid gap-y-[52px] px-5 py-12 lg:grid-cols-2 lg:gap-x-[74px] lg:p-20"
	>
		<Animate variant="left" class="flex">
			<div class="flex h-full max-w-[574px] flex-col justify-between">
				<div class="space-y-3">
					<Section variant="primary">About Us</Section>
					<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">
						Four Decades of Sustainable Land Development
					</h2>
				</div>
				<div class="hidden space-y-5 text-lg text-gray-950 lg:block">
					<p>
						Founded in 1981, our company began as a palm estate contractor working with leading
						organizations such as SIPE, Perkebunan Nusantara, and Lonsum. During the 1980s, we
						strengthened our reputation by adopting innovative and sustainable methods early on,
						including becoming one of the first to implement the Zero Burning Method (chipping) for
						replanting.
					</p>
					<p>
						This commitment to responsible practices has guided us for over four decades. As the
						industry grew, we expanded our capabilities while staying focused on delivering
						reliable, environmentally conscious land development solutions.
					</p>
				</div>
			</div>
		</Animate>
		<Animate variant="right">
			<div class="relative self-end justify-self-center overflow-hidden">
				<img
					src={about}
					alt="Palm Tree"
					class="aspect-square h-full w-full lg:h-[632px] lg:w-[632px]"
				/>
				<ul class="absolute bottom-6 left-6 w-full space-y-2">
					{#each abouts as about}
						<li
							class="flex w-2/3 items-center gap-x-1.5 rounded-sm bg-gray-950 p-2 font-faculty-glyphic text-xs text-white first:w-1/2 last:w-5/6 sm:p-3.5 sm:text-sm lg:gap-x-3 lg:px-6 lg:py-5 lg:text-base 2xl:text-xl"
						>
							<DiamondIcon class="h-2 w-2 lg:h-3.5 lg:w-3.5" />
							{about}
						</li>
					{/each}
				</ul>
			</div>
		</Animate>
		<Animate variant="left">
			<div class="space-y-5 text-gray-950 lg:hidden">
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
		</Animate>
	</div>
</section>
