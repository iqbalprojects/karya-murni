<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import before from '$lib/assets/images/before.webp';
	import after from '$lib/assets/images/after.webp';

	const galleries = [
		{
			title: 'PT. Kalimantan Hamparan Sawit',
			periode: '(2018 - current)',
			description:
				'Stacking and restacking area, making main roads, collections, and drains about 1.000 Ha/year',
			results: [
				{
					image: before,
					title: 'Before',
					description: 'Dense vegetation and inaccessible terrain'
				},
				{
					image: after,
					title: 'After',
					description: 'Cleared, structured land with proper drainage and access routes'
				}
			]
		},
		{
			title: 'PT. Kalimantan Hamparan Sawit',
			periode: '(2018 - current)',
			description:
				'Stacking and restacking area, making main roads, collections, and drains about 1.000 Ha/year',
			results: [
				{
					image: before,
					title: 'Before',
					description: 'Dense vegetation and inaccessible terrain'
				},
				{
					image: after,
					title: 'After',
					description: 'Cleared, structured land with proper drainage and access routes'
				}
			]
		},
		{
			title: 'PT. Kalimantan Hamparan Sawit',
			periode: '(2018 - current)',
			description:
				'Stacking and restacking area, making main roads, collections, and drains about 1.000 Ha/year',
			results: [
				{
					image: before,
					title: 'Before',
					description: 'Dense vegetation and inaccessible terrain'
				},
				{
					image: after,
					title: 'After',
					description: 'Cleared, structured land with proper drainage and access routes'
				}
			]
		},
		{
			title: 'PT. Kalimantan Hamparan Sawit  (2018 - current)',
			description:
				'Stacking and restacking area, making main roads, collections, and drains about 1.000 Ha/year',
			results: [
				{
					image: before,
					title: 'Before',
					description: 'Dense vegetation and inaccessible terrain'
				},
				{
					image: after,
					title: 'After',
					description: 'Cleared, structured land with proper drainage and access routes'
				}
			]
		}
	];
</script>

<section class="space-y-10 py-12 lg:space-y-[72px] lg:py-20">
	<h2 class="px-5 font-faculty-glyphic text-4xl lg:px-0 lg:text-center lg:text-5xl">Gallery</h2>
	<Carousel.Root>
		<Carousel.Content>
			{#each galleries as gallery}
				<Carousel.Item class="space-y-9">
					<div class="container max-w-4xl space-y-3 px-5 lg:px-20">
						<div class="flex flex-col gap-x-2 gap-y-1 lg:flex-row!">
							<h3 class="font-faculty-glyphic text-xl lg:text-2xl">
								{gallery.title}
							</h3>
							<span class="font-inter text-xl text-gray-400 lg:text-2xl">{gallery.periode}</span>
						</div>
						<p class="text-sm text-gray-600 lg:text-lg">{gallery.description}</p>
					</div>
					<ul class="flex flex-col items-center lg:flex-row!">
						{#each gallery.results as result}
							<li class="relative h-full w-full overflow-hidden">
								<img
									src={result.image}
									alt={result.title}
									class="aspect-4/3 h-full w-full lg:aspect-video"
								/>
								<!-- Progressive blur -->
								<div
									class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
									style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
								></div>
								<!-- Gradient overlay -->
								<div
									class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"
								></div>
								<div
									class="absolute bottom-5 left-5 space-y-1.5 text-white lg:bottom-8 lg:left-8 lg:space-y-2"
								>
									<h4 class="font-faculty-glyphic text-2xl lg:text-[28px]">{result.title}</h4>
									<p class="text-base text-white/70 lg:text-lg">{result.description}</p>
								</div>
							</li>
						{/each}
					</ul>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="absolute -top-14 right-16 lg:top-10 lg:right-40">
			<Carousel.Previous
				class="size-10 cursor-pointer bg-black text-white hover:bg-black/85 hover:text-white/85"
			/>
			<Carousel.Next
				class="size-10 cursor-pointer bg-black text-white hover:bg-black/85 hover:text-white/85"
			/>
		</div>
	</Carousel.Root>
</section>
