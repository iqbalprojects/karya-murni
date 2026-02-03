<script>
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import portfolio1 from '$lib/assets/images/01.png';
	import portfolio2 from '$lib/assets/images/02.png';
	import portfolio3 from '$lib/assets/images/03.png';

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

<section>
	<Carousel.Root>
		<Carousel.Content>
			{#each portfolioItems as item}
				<Carousel.Item class="md:basis-1/2">
					<div class="relative overflow-hidden rounded-sm">
						<img src={item.image} alt={item.title} class="aspect-video h-full w-full rounded-sm" />
						<div
							class="absolute inset-x-0 top-1/3 bottom-0 backdrop-blur-md"
							style="mask-image: linear-gradient(180deg, transparent 0%, black 100%);"
						></div>
						<div class="absolute bottom-5 left-5 max-w-3xl space-y-4 text-white">
							<h4 class="font-faculty-glyphic text-xl">
								{item.title}
							</h4>
							<p class="font-medium text-white/60">{item.description}</p>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>
