<script>
	import BlogCard from './BlogCard.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';

	/** @type {any[]} */
	export let blogs = [];

	/** @type {any} */
	export let meta = null;

	/** @type {boolean} */
	export let loading = false;

	// Logic to split Featured vs Latest
	$: featuredBlog = blogs.length > 0 ? blogs[0] : null;
	$: latestBlogs = blogs.length > 1 ? blogs.slice(1) : [];
</script>

<div class="container mx-auto px-5 md:px-10 lg:px-20">
	{#if blogs.length > 0}
		<!-- Featured Blog Card -->
		{#if featuredBlog}
			<Animate variant="fade" duration={1}>
				<div class="-mt-85 mb-8 lg:-mt-40 lg:mb-[60px]">
					<BlogCard blog={featuredBlog} index={0} />
				</div>
			</Animate>
		{/if}

		<!-- Latest Blogs Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border-[0.5px]">
			{#each latestBlogs as blog, index}
				<Animate variant="fade" duration={0.8} delay={index * 0.08}>
					<BlogCard {blog} index={index + 1} />
				</Animate>
			{/each}
		</div>

		<!-- Load More Button -->
		{#if meta && meta.total > blogs.length}
			<div class="mt-10 mb-6 flex justify-center lg:mt-14 lg:mb-10">
				<Animate variant="fade" duration={1}>
					<button
						class="cursor-pointer rounded-[6px] border border-[#18181B] bg-transparent px-7 py-2 font-inter text-[13px] font-medium text-[#18181B] transition-all duration-300 hover:bg-[#18181B] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
						disabled={loading}
						on:click
					>
						{#if loading}
							Loading...
						{:else}
							Load more
						{/if}
					</button>
				</Animate>
			</div>
		{/if}
	{:else}
		<!-- Empty State -->
		<div class="-mt-20 w-full rounded-lg border bg-white p-10 text-center shadow-sm">
			<p class="text-[#71717A]">No blogs posted yet.</p>
		</div>
	{/if}
</div>
