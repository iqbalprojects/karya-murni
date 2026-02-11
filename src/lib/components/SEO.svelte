<script lang="ts">
	import { page } from '$app/state';

	let {
		title = 'Karya Murni',
		description = 'Your trusted partner in heavy equipment rentals and land clearing services.',
		keywords = 'heavy equipment, land clearing, rental, excavator, bulldozer',
		openGraph = {
			title: 'Karya Murni',
			description: 'Your trusted partner in heavy equipment rentals and land clearing services.',
			type: 'website',
			image: '/kmp-logo.webp'
		}
	} = $props();

	const siteTitle = 'Karya Murni';
	const fullTitle = $derived(title === siteTitle ? siteTitle : `${title} | ${siteTitle}`);
	const currentUrl = $derived(page.url.href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="canonical" href={currentUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={openGraph.type} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={openGraph.title || fullTitle} />
	<meta property="og:description" content={openGraph.description || description} />
	<meta property="og:image" content={openGraph.image} />
	<meta property="og:site_name" content={siteTitle} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={openGraph.title || fullTitle} />
	<meta property="twitter:description" content={openGraph.description || description} />
	<meta property="twitter:image" content={openGraph.image} />
</svelte:head>
