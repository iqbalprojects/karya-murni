<script>
	import BlogGrid from '$lib/components/sections/blog/BlogGrid.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';

	// Props - replace with actual data from load function
	let categorySlug = '';

	/** @type {any[]} */
	let blogs = [
		{
			id: 1,
			title: 'Replanting: The Key to Sustainable Palm Estate Development',
			slug: 'replanting-key-sustainable-palm-estate',
			thumbnail_url:
				'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
			short_description:
				'One of the most critical steps in ensuring long-term productivity is replanting – the process of renewing old palm trees with high-quality seedlings while maintaining soil health and environmental standards.',
			content: '<p>Content here...</p>',
			published_at: '2025-03-24T10:00:00Z',
			created_at: '2025-03-24T10:00:00Z',
			is_active: true
		},
		{
			id: 2,
			title: 'Company Expands Replanting Operations Using Zero Burning Method',
			slug: 'company-expands-replanting-zero-burning',
			thumbnail_url:
				'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
			short_description:
				'Our latest replanting program begins in North Sumatra, reinforcing our commitment to safe and environmentally responsible land practices.',
			content: '<p>Content here...</p>',
			published_at: '2025-03-12T10:00:00Z',
			created_at: '2025-03-12T10:00:00Z',
			is_active: true
		},
		{
			id: 3,
			title: 'New Heavy Equipment Units Added to Support Large-Scale Projects',
			slug: 'new-heavy-equipment-units',
			thumbnail_url:
				'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
			short_description:
				'Additional machinery has been deployed to improve operational efficiency and accelerate project timelines across multiple sites.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-28T10:00:00Z',
			created_at: '2025-02-28T10:00:00Z',
			is_active: true
		},
		{
			id: 4,
			title: 'Ongoing Infrastructure Development Completed Ahead of Schedule',
			slug: 'infrastructure-development-completed',
			thumbnail_url:
				'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop',
			short_description:
				'Our team successfully concluded a key access road and drainage project, ensuring smoother estate operations for our client.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-14T10:00:00Z',
			created_at: '2025-02-14T10:00:00Z',
			is_active: true
		},
		{
			id: 5,
			title: 'New Heavy Equipment Units Added to Support Large-Scale Projects',
			slug: 'heavy-equipment-support-projects',
			thumbnail_url:
				'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
			short_description:
				'Additional machinery has been deployed to improve operational efficiency and accelerate project timelines across multiple sites.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-10T10:00:00Z',
			created_at: '2025-02-10T10:00:00Z',
			is_active: true
		},
		{
			id: 6,
			title: 'Company Expands Replanting Operations Using Zero Burning Method',
			slug: 'company-replanting-zero-burning-method',
			thumbnail_url:
				'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
			short_description:
				'Our latest replanting program begins in North Sumatra, reinforcing our commitment to safe and environmentally responsible land practices.',
			content: '<p>Content here...</p>',
			published_at: '2025-03-12T10:00:00Z',
			created_at: '2025-03-12T10:00:00Z',
			is_active: true
		},
		{
			id: 7,
			title: 'Ongoing Infrastructure Development Completed Ahead of Schedule',
			slug: 'ongoing-infrastructure-development',
			thumbnail_url:
				'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
			short_description:
				'Our team successfully concluded a key access road and drainage project, ensuring smoother estate operations for our client.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-14T10:00:00Z',
			created_at: '2025-02-14T10:00:00Z',
			is_active: true
		},
		{
			id: 8,
			title: 'New Heavy Equipment Units Added to Support Large-Scale Projects',
			slug: 'new-heavy-equipment-large-scale',
			thumbnail_url: '',
			short_description:
				'Additional machinery has been deployed to improve operational efficiency and accelerate project timelines across multiple sites.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-26T10:00:00Z',
			created_at: '2025-02-26T10:00:00Z',
			is_active: true
		},
		{
			id: 9,
			title: 'Ongoing Infrastructure Development Completed Ahead of Schedule',
			slug: 'ongoing-infrastructure-ahead-schedule',
			thumbnail_url: '',
			short_description:
				'Our team successfully concluded a key access road and drainage project, ensuring smoother estate operations for our client.',
			content: '<p>Content here...</p>',
			published_at: '2025-02-14T10:00:00Z',
			created_at: '2025-02-14T10:00:00Z',
			is_active: true
		},
		{
			id: 10,
			title: 'Company Expands Replanting Operations Using Zero Burning Method',
			slug: 'company-expands-replanting-operations',
			thumbnail_url: '',
			short_description:
				'Our latest replanting program begins in North Sumatra, reinforcing our commitment to safe and environmentally responsible land practices.',
			content: '<p>Content here...</p>',
			published_at: '2025-03-12T10:00:00Z',
			created_at: '2025-03-12T10:00:00Z',
			is_active: true
		}
	];

	let meta = { total: 15, limit: 10, offset: 0 };
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
