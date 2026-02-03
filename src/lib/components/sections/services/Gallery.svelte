<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import before from '$lib/assets/images/before.jpeg';
	import after from '$lib/assets/images/after.jpeg';

	const galleries = [
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

<section class="space-y-[72px] py-20">
	<h2 class="text-center font-faculty-glyphic text-5xl">Gallery</h2>
	<Carousel.Root>
		<Carousel.Content>
			{#each galleries as gallery}
				<Carousel.Item class="space-y-9">
					<div class="container max-w-4xl space-y-3 px-20">
						<h3 class="font-faculty-glyphic text-2xl">{gallery.title}</h3>
						<p class="text-lg">{gallery.description}</p>
					</div>
					<ul class="flex items-center">
						{#each gallery.results as result}
							<li class="relative h-full w-full overflow-hidden">
								<img src={result.image} alt={result.title} class="aspect-video h-full w-full" />
								<!-- Progressive blur -->
								<div
									class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
									style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
								></div>
								<!-- Gradient overlay -->
								<div
									class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"
								></div>
								<div class="absolute bottom-[33px] left-8 space-y-2 text-white">
									<h4 class="font-faculty-glyphic text-[28px]">{result.title}</h4>
									<p class="text-lg text-white/70">{result.description}</p>
								</div>
							</li>
						{/each}
					</ul>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<div class="absolute top-10 right-40">
			<Carousel.Previous
				class="size-10 cursor-pointer bg-black text-white hover:bg-black/85 hover:text-white/85"
			/>
			<Carousel.Next
				class="size-10 cursor-pointer bg-black text-white hover:bg-black/85 hover:text-white/85"
			/>
		</div>
	</Carousel.Root>
</section>
