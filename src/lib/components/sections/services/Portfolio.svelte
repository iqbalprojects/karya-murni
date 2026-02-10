<script>
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import portfolio1 from '$lib/assets/images/01.webp';
	import portfolio2 from '$lib/assets/images/02.webp';
	import portfolio3 from '$lib/assets/images/03.webp';

	const portfolioItems = [
		{
			id: 1,
			title:
				'“Karya Murni delivered our land clearing project with strong coordination and consistent quality. Terracing, drainage, and access roads were completed on time and to a high standard. A very reliable partner.',
			description: 'Petro Betrand, Director at PT HM Sampoerna Tbk.',
			image: portfolio1
		},
		{
			id: 2,
			title:
				'“Their team handled underbrushing, felling, and terracing efficiently and safely. Communication was clear throughout, and the final result exceeded our expectations.',
			description: 'Petro Betrand, Director at PT HM Sampoerna Tbk.',
			image: portfolio2
		},
		{
			id: 3,
			title:
				'“Their team handled underbrushing, felling, and terracing efficiently and safely. Communication was clear throughout, and the final result exceeded our expectations.',
			description: 'Petro Betrand, Director at PT HM Sampoerna Tbk.',
			image: portfolio3
		}
	];
</script>

<section class="py-12 lg:py-10">
	<Carousel.Root>
		<Carousel.Content>
			{#each portfolioItems as item}
				<Carousel.Item class="basis-5/6 first:ml-5 last:mr-5 md:basis-1/2">
					<div class="relative overflow-hidden rounded-sm">
						<img
							src={item.image}
							alt={item.title}
							class="aspect-5/6 h-full w-full rounded-sm lg:aspect-video"
						/>
						<div
							class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
							style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
						></div>
						<div class="absolute bottom-5 left-5 max-w-3xl space-y-4 text-white">
							<h4 class="font-faculty-glyphic text-lg lg:text-xl">
								{item.title}
							</h4>
							<p class="text-sm font-medium text-white/60 lg:text-base">{item.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
