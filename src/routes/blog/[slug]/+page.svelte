<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Animate from '$lib/components/ui/Animate.svelte';
	import { page } from '$app/state';
	import type { PageData } from './$types';
	import { plateToHtml } from '$lib/plate-to-html';
	import ContactUs from '$lib/components/sections/home/ContactUs.svelte';

	let { data }: { data: PageData } = $props();


	let blog = $derived(data.item.data);

	let latestBlogs = $derived(data.latestBlogs);

	let contentHtml = $derived(plateToHtml(blog?.content ?? ''));
</script>

<SEO title={blog.title} description={blog.short_description || 'Read our latest blog post'} />

<div class="pt-[60px]">
	<div class="mb-20 space-y-[60px]">
		<Animate variant="top" class="container mx-auto px-5 lg:px-20">
			<Breadcrumb.Root>
				<Breadcrumb.List>
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Link href="/blog">Blog</Breadcrumb.Link>
					</Breadcrumb.Item>
					<Breadcrumb.Separator />
					<Breadcrumb.Item>
						<Breadcrumb.Page class="capitalize">{(page.params.slug ?? '').replaceAll('-', ' ')}</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</Animate>

		<article>
			<!-- Blog Header -->
			<header class="mb-8 lg:mb-11 container mx-auto px-5 lg:px-20">
				<h1 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">{blog.title}</h1>
			</header>

			<!-- Featured Image -->
			{#if blog.thumbnail_url}
				<div class="mb-8 lg:mb-[60px]">
					<img src={blog.thumbnail_url} alt={blog.title} class="h-auto w-full object-cover aspect-24/7" />
				</div>
			{/if}

			<!-- Blog Content -->
			<div class="plate-content container mx-auto px-5 lg:px-20">
				{@html contentHtml}
			</div>
		</article>
	</div>
	<ContactUs />
</div>
