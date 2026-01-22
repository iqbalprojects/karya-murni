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
					<div class="max-w-4xl space-y-3">
						<h3 class="font-faculty-glyphic text-2xl">{gallery.title}</h3>
						<p class="text-lg">{gallery.description}</p>
					</div>
					<ul class="flex items-center">
						{#each gallery.results as result}
							<li class="relative h-full w-full">
								<img src={result.image} alt={result.title} class="aspect-video h-full w-full" />
								<div class="absolute bottom-0 text-white">
									<h4>{result.title}</h4>
									<p>{result.description}</p>
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
