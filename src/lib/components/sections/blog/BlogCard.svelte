<script>
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';

	export let blog;
	export let index = 0;

	// Format date to "12 March 2025" style
	/**
	 * @param {string} dateString
	 */
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	/**
	 * Estimate reading time based on content or description
	 * @param {any} blog
	 * @returns {string}
	 */
	function getReadTime(blog) {
		const text = blog.content || blog.short_description || '';
		const words = text.replace(/<[^>]*>/g, '').split(/\s+/).length;
		const minutes = Math.max(1, Math.ceil(words / 200));
		return `${minutes} min read`;
	}
</script>

{#if blog.is_active}
	<a href={`/blog/${blog.slug}`}>
		{#if index === 0}
			<!-- Featured Blog Card - Horizontal layout with image -->
			<div class="flex h-full w-full flex-col overflow-hidden border bg-white p-8 gap-4 lg:gap-8 lg:flex-row">
				<!-- Image side -->
				<div
					class="relative aspect-video h-[240px] w-full overflow-hidden md:h-[300px] lg:h-auto lg:w-[48%]"
				>
					<img
						src={blog.thumbnail_url}
						alt={blog.title}
						class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
					/>
				</div>
				<!-- Content side -->
				<div class="flex flex-1 flex-col justify-between">
					<!-- Badge -->
					<span
						class="w-fit rounded-full bg-gray-200 px-2.5 py-[3px] font-inter text-sm font-medium"
					>
						Featured
					</span>
					<!-- Title -->
					<div class="space-y-[26px]">
						<div class="flex flex-col gap-2">
							<h3 class="font-faculty-glyphic text-[19px] lg:text-[22px] xl:text-[28px]">
								{blog.title}
							</h3>
							<!-- Description -->
							{#if blog.short_description}
								<p class="line-clamp-3 text-[13px] text-gray-600 lg:text-sm xl:text-base">
									{blog.short_description}
								</p>
							{/if}
						</div>
						<div class="w-fit lg:mt-auto lg:py-2.5">
							<span
								class="inline-flex items-center gap-1 text-[13px] font-medium lg:text-sm xl:text-base"
							>
								Read more
								<ChevronIcon />
							</span>
						</div>
					</div>
					<!-- Read more link -->
				</div>
			</div>
		{:else}
			<!-- Regular Blog Card - Text only, no image -->
			<div class="flex h-[368px] flex-col justify-between border-[0.5px] p-8">
				<div class="flex flex-col gap-2">
					<h3 class="line-clamp-3 font-faculty-glyphic lg:text-2xl">
						{blog.title}
					</h3>
					{#if blog.short_description}
						<p class="line-clamp-3 text-sm text-gray-600 lg:text-base">
							{blog.short_description}
						</p>
					{/if}
				</div>
				<p class="font-inter text-[12px] text-[#71717A]">
					{formatDate(blog.published_at || blog.created_at)}
				</p>
			</div>
		{/if}
	</a>
{/if}
