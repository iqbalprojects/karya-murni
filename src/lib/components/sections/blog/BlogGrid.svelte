<script>
	import BlogCard from './BlogCard.svelte';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import Animate from '$lib/components/ui/Animate.svelte';

	/** @type {any[]} */
	export let blogs = [];

	/** @type {any} */
	export let meta = null;

	// Logic to split Featured vs Latest
	$: featuredBlog = blogs.length > 0 ? blogs[0] : null;
	$: latestBlogs = blogs.length > 1 ? blogs.slice(1) : [];
</script>

<div class="container mx-auto px-5 md:px-10 lg:px-20">
	{#if blogs.length > 0}
		<!-- Featured Blog Card Wrapper -->
		{#if featuredBlog}
			<div class="w-full">
				<div class="-mt-85 mb-10 lg:-mt-70 lg:mb-12">
					<BlogCard blog={featuredBlog} index={0} />
				</div>
			</div>
		{/if}

		<!-- Latest Blogs Content -->
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-10 2xl:gap-14">
			{#each latestBlogs as blog, index}
				<BlogCard {blog} index={index + 1} />
			{/each}
		</div>

		<!-- Pagination -->
		{#if meta && meta.total > meta.limit}
			<div class="mt-10 mb-12 lg:mt-12 lg:mb-20">
				<Animate variant="fade" duration={1.5}>
					<Pagination.Root count={meta.total} perPage={meta.limit}>
						{#snippet children({ pages, currentPage: paginationCurrentPage })}
							<Pagination.Content>
								<Pagination.Item>
									<Pagination.Previous class="cursor-pointer" />
								</Pagination.Item>
								{#each pages as page (page.key)}
									{#if page.type === 'ellipsis'}
										<Pagination.Item>
											<Pagination.Ellipsis />
										</Pagination.Item>
									{:else}
										<Pagination.Item>
											<Pagination.Link
												class="cursor-pointer"
												{page}
												isActive={paginationCurrentPage === page.value}
											>
												{page.value}
											</Pagination.Link>
										</Pagination.Item>
									{/if}
								{/each}
								<Pagination.Item>
									<Pagination.Next class="cursor-pointer" />
								</Pagination.Item>
							</Pagination.Content>
						{/snippet}
					</Pagination.Root>
				</Animate>
			</div>
		{/if}
	{:else}
		<!-- Empty State -->
		<div class="-mt-20 w-full rounded-lg border bg-white p-10 text-center shadow-sm">
			<p class="text-gray-500">No blogs posted yet.</p>
		</div>
	{/if}
</div>
