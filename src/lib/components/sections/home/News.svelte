<script lang="ts">
	import Animate from '$lib/components/ui/Animate.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let { news = [] }: { news?: any[] } = $props();

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	let visibleNews = $derived(news?.filter((item: any) => item.is_active).slice(0, 3) || []);
</script>

<section class="container mx-auto space-y-10 px-5 py-12 text-center lg:space-y-[60px] lg:p-20">
	<div class="flex items-center justify-between">
		<Animate variant="left">
			<h2 class="font-faculty-glyphic text-5xl">Latest news</h2>
		</Animate>
		<Animate variant="right">
			<Button href="/blog" variant="primary" class="hidden lg:block">View all news</Button>
		</Animate>
	</div>
	<ul class="grid text-start lg:grid-cols-3">
		{#each visibleNews as item}
			<Animate variant="scale">
				<a href={`/blog/${item.slug}`} class="block h-full cursor-pointer hover:bg-gray-50 transition-colors">
					<li class="flex h-[368px] flex-col justify-between border-[0.5px] bg-white p-8">
						<div class="space-y-2">
							<h3 class="font-faculty-glyphic text-2xl line-clamp-3">{item.title}</h3>
							{#if item.short_description}
								<p class="text-sm line-clamp-3">{item.short_description}</p>
							{/if}
						</div>
						<p class="text-xs text-gray-500">{formatDate(item.published_at || item.created_at)}</p>
					</li>
				</a>
			</Animate>
		{/each}
	</ul>
	<Button href="/blog" variant="primary" class="lg:hidden">View all news</Button>
</section>
