<script lang="ts">
	import BlogGrid from '$lib/components/sections/blog/BlogGrid.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let blogs = $derived(data.item?.data ?? []);
	let meta = $derived(data.item?.meta ?? { total: 0, limit: 20, offset: 0 });
</script>

<SEO
	title="Blog - News & Insight"
	description="Read our latest news, updates, and insights about plantation development and earthworks."
/>

<div>
	<!-- Hero Section -->
	<Animate variant="top">
		<div class="h-[500px] w-full bg-primary px-5 pt-10 lg:pt-[152px]">
			<div class="container mx-auto flex flex-col items-center justify-center gap-4 text-white">
				<span class="text-sm font-semibold lg:text-base">• Blog •</span>
				<h1 class="text-center font-faculty-glyphic text-3xl lg:text-6xl">News & Insight</h1>
			</div>
		</div>
	</Animate>

	<!-- Blog Content -->
	<div class="pb-6 lg:pb-10">
		<BlogGrid {blogs} {meta} />
	</div>
</div>
