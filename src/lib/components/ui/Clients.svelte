<script>
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';
	import wings from '$lib/assets/images/wings.png';
	import sampoerna from '$lib/assets/images/sampoerna.png';
	import gawi from '$lib/assets/images/gawi.png';
	import wilmar from '$lib/assets/images/wilmar.png';
	import bumitama from '$lib/assets/images/bumitama.png';
	import saraswanti from '$lib/assets/images/saraswanti.png';
	import sinarmas from '$lib/assets/images/sinarmas.png';
	import fapagri from '$lib/assets/images/fapagri.png';
	import minamas from '$lib/assets/images/minamas.png';
	import agrindo from '$lib/assets/images/agrindo.png';

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

<Marquee fade={true} innerClassName="h-[52px] space-x-14">
	{#each clients as client}
		<img src={client.logo} alt={client.name} class="object-contain" />
	{/each}
</Marquee>
