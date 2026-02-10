<script>
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';
	import wings from '$lib/assets/images/wings.webp';
	import sampoerna from '$lib/assets/images/sampoerna.webp';
	import gawi from '$lib/assets/images/gawi.webp';
	import wilmar from '$lib/assets/images/wilmar.webp';
	import bumitama from '$lib/assets/images/bumitama.webp';
	import saraswanti from '$lib/assets/images/saraswanti.webp';
	import sinarmas from '$lib/assets/images/sinarmas.webp';
	import fapagri from '$lib/assets/images/fapagri.webp';
	import minamas from '$lib/assets/images/minamas.webp';
	import agrindo from '$lib/assets/images/agrindo.webp';

	const clients = [
		{ name: 'Wings', logo: wings },
		{ name: 'Sampoerna', logo: sampoerna },
		{ name: 'Gawi', logo: gawi },
		{ name: 'Wilmar', logo: wilmar },
		{ name: 'Bumitama', logo: bumitama },
		{ name: 'Saraswanti', logo: saraswanti },
		{ name: 'Sinar Mas', logo: sinarmas },
		{ name: 'Fapagri', logo: fapagri },
		{ name: 'Minamas', logo: minamas },
		{ name: 'Agrindo', logo: agrindo }
	];
</script>

<Marquee fade={true} innerClassName="mb-[60px] lg:mb-20 mt-10 flex items-center">
	{#each clients as client}
		<div class="mr-10 flex h-11 w-auto shrink-0 items-center justify-center lg:mr-14 lg:h-[52px]">
			<img src={client.logo} alt={client.name} class="h-full w-auto object-contain" />
		</div>
	{/each}
</Marquee>
