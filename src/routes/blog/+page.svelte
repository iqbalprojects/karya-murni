<script>
	import BlogGrid from '$lib/components/sections/blog/BlogGrid.svelte';
	import SEO from '$lib/components/SEO.svelte';

	// Props - replace with actual data from load function
	let categorySlug = '';

	/** @type {any[]} */
	let blogs = [
		{
			id: 1,
			title: 'Sustainable Land Clearing Practices for Palm Oil Plantations',
			slug: 'sustainable-land-clearing-practices',
			thumbnail_url:
				'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
			short_description:
				'Learn about our zero-burning approach to land clearing that preserves soil quality and reduces environmental impact while maintaining productivity.',
			content: '<p>Content here...</p>',
			published_at: '2024-01-15T10:00:00Z',
			created_at: '2024-01-15T10:00:00Z',
			is_active: true
		},
		{
			id: 2,
			title: 'Modern Terracing Techniques for Hillside Plantations',
			slug: 'modern-terracing-techniques',
			thumbnail_url:
				'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
			short_description:
				'Discover how advanced terracing methods improve water management and prevent soil erosion in challenging terrain.',
			content: '<p>Content here...</p>',
			published_at: '2024-01-10T10:00:00Z',
			created_at: '2024-01-10T10:00:00Z',
			is_active: true
		},
		{
			id: 3,
			title: 'Drainage System Design for Optimal Plantation Health',
			slug: 'drainage-system-design',
			thumbnail_url:
				'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
			short_description:
				'Proper drainage is crucial for plantation success. Learn about field drains, boundary drains, and water management strategies.',
			content: '<p>Content here...</p>',
			published_at: '2024-01-05T10:00:00Z',
			created_at: '2024-01-05T10:00:00Z',
			is_active: true
		},
		{
			id: 4,
			title: 'Equipment Maintenance Best Practices',
			slug: 'equipment-maintenance-best-practices',
			thumbnail_url:
				'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop',
			short_description:
				'Keep your heavy machinery running efficiently with our comprehensive maintenance guide for excavators, bulldozers, and more.',
			content: '<p>Content here...</p>',
			published_at: '2023-12-28T10:00:00Z',
			created_at: '2023-12-28T10:00:00Z',
			is_active: true
		},
		{
			id: 5,
			title: 'Safety Standards in Plantation Development',
			slug: 'safety-standards-plantation-development',
			thumbnail_url:
				'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop',
			short_description:
				'Our commitment to ISO and SMK3 certifications ensures the highest safety standards for workers and the environment.',
			content: '<p>Content here...</p>',
			published_at: '2023-12-20T10:00:00Z',
			created_at: '2023-12-20T10:00:00Z',
			is_active: true
		},
		{
			id: 6,
			title: 'Replanting Strategies for Aging Palm Plantations',
			slug: 'replanting-strategies-aging-palms',
			thumbnail_url:
				'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
			short_description:
				'Maximize productivity with strategic replanting approaches that improve palm density and long-term yield.',
			content: '<p>Content here...</p>',
			published_at: '2023-12-15T10:00:00Z',
			created_at: '2023-12-15T10:00:00Z',
			is_active: true
		},
		{
			id: 7,
			title: 'Infrastructure Development for Remote Plantations',
			slug: 'infrastructure-development-remote-plantations',
			thumbnail_url:
				'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
			short_description:
				'Building roads, bridges, and temporary infrastructure to support efficient plantation operations in challenging locations.',
			content: '<p>Content here...</p>',
			published_at: '2023-12-10T10:00:00Z',
			created_at: '2023-12-10T10:00:00Z',
			is_active: true
		}
	];

	/** @type {any} */
	let meta = { total: 7, limit: 7, offset: 0 };
</script>

<SEO
	title="Blog - News & Updates"
	description="Read our latest news, updates, and insights about plantation development and earthworks."
/>

<div>
	<div class="h-[500px] w-full bg-[#18181B] px-5 pt-10 lg:pt-[68px]">
		<div
			class="container mx-auto flex flex-col items-center justify-center gap-1.5 lg:items-start lg:gap-3 lg:px-20"
		>
			<span class="font-semibold text-[#0EF016]">BLOG</span>
			<h1 class="text-center text-[28px] font-bold text-white lg:text-start lg:text-5xl">
				{categorySlug ? `${categorySlug.toUpperCase().replace('-', ' ')}` : 'NEWS & UPDATES'}
			</h1>
		</div>
	</div>

	<div class="py-8">
		<BlogGrid {blogs} {meta} />
	</div>
</div>
