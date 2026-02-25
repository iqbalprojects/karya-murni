<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	export let blog;
	export let index = 0;

	// Format date
	/**
	 * @param {string} dateString
	 */
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

{#if blog.is_active}
	<a href={`/blog/${blog.slug}`}>
		<Card.Root
			class={`flex h-full w-full flex-1 gap-0 rounded-lg border-none bg-transparent py-0 font-inter shadow drop-shadow-xs hover:shadow-lg ${
				index === 0 ? 'lg:flex-row' : ''
			}`}
		>
			<div
				class={`relative h-[235px] w-full overflow-hidden rounded-t-lg ${
					index === 0 ? 'md:h-96 lg:h-[472px] lg:flex-1 lg:rounded-t-none lg:rounded-l-lg' : ''
				}`}
			>
				<img src={blog.thumbnail_url} alt={blog.title} class="h-full w-full object-cover" />
			</div>
			<div
				class={`${
					index === 0 ? 'bg-[#26272B] text-white' : 'text-black'
				} flex flex-col rounded-b-lg p-5 ${
					index === 0
						? 'gap-[60px] lg:flex-1 lg:justify-between lg:rounded-r-lg lg:rounded-b-none lg:rounded-br-lg lg:p-10'
						: 'gap-12'
				}`}
			>
				<Card.Header class="px-0">
					<div class="flex flex-col justify-between gap-4">
						{#if index === 0}
							<Badge
								class="font-saira rounded-sm bg-[#0EF01633] px-1.5 py-0.5 text-xs font-medium text-[#0EF016]"
							>
								FEATURED ARTICLE
							</Badge>
						{/if}
						<div class={`${index === 0 ? 'gap-y-3' : 'gap-2'} flex flex-col`}>
							<h3
								class={`${
									index === 0
										? 'text-xl font-bold text-white lg:text-3xl'
										: 'text-lg font-semibold text-black'
								} line-clamp-3`}
							>
								{blog.title}
							</h3>
							{#if blog.short_description}
								<p
									class={`${
										index === 0 ? 'text-white/60' : 'text-[#70707B]'
									} line-clamp-3 text-sm lg:text-base`}
								>
									{blog.short_description}
								</p>
							{/if}
						</div>
					</div>
				</Card.Header>
				<Card.Footer
					class={`${index === 0 ? 'border-t border-t-white/10 pt-5' : ''} flex gap-3 px-0`}
				>
					<div class="flex flex-col">
						<p class={`${index === 0 ? 'text-white' : 'text-black'} text-sm font-medium`}>
							KomputerMedan
						</p>
						<p class={`${index === 0 ? 'text-white/60' : 'text-[#70707B]'} text-sm`}>
							{formatDate(blog.published_at || blog.created_at)}
						</p>
					</div>
				</Card.Footer>
			</div>
		</Card.Root>
	</a>
{/if}
