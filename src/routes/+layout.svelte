<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '@fontsource-variable/inter';
	import '@fontsource/faculty-glyphic';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app overflow-hidden bg-gray-50 font-inter">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
