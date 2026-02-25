<script>
	import SEO from '$lib/components/SEO.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Animate from '$lib/components/ui/Animate.svelte';
	import { page } from '$app/stores';

	// Dummy data - same as blog list page
	const allBlogs = [
		{
			id: 1,
			title: 'Sustainable Land Clearing Practices for Palm Oil Plantations',
			slug: 'sustainable-land-clearing-practices',
			thumbnail_url:
				'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
			short_description:
				'Learn about our zero-burning approach to land clearing that preserves soil quality and reduces environmental impact while maintaining productivity.',
			content: `
				<h2>Introduction</h2>
				<p>Sustainable land clearing is essential for modern palm oil plantations. Our zero-burning approach has revolutionized how we prepare land while maintaining environmental responsibility.</p>
				
				<h2>The Zero-Burning Method</h2>
				<p>Traditional slash-and-burn methods release harmful emissions and destroy valuable organic matter. Our zero-burning technique preserves soil nutrients and reduces carbon emissions by up to 90%.</p>
				
				<h3>Key Benefits:</h3>
				<ul>
					<li>Preserves soil quality and organic matter</li>
					<li>Reduces environmental impact significantly</li>
					<li>Improves long-term plantation productivity</li>
					<li>Complies with international sustainability standards</li>
				</ul>
				
				<h2>Implementation Process</h2>
				<p>Our systematic approach includes controlled felling, biomass management, and strategic replanting. This ensures optimal land preparation while maintaining ecological balance.</p>
				
				<h2>Results</h2>
				<p>Projects using our sustainable methods show 10% higher palm density and improved soil health compared to traditional approaches.</p>
			`,
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
			content: `
				<h2>Terracing for Sustainable Agriculture</h2>
				<p>Hillside plantations present unique challenges. Our modern terracing techniques transform challenging terrain into productive agricultural land.</p>
				
				<h2>Advanced Design Methods</h2>
				<p>We utilize precision surveying and engineering to create optimal terrace layouts that maximize water retention and minimize erosion.</p>
				
				<h3>Technical Specifications:</h3>
				<ul>
					<li>Contour-based terrace design</li>
					<li>Integrated drainage systems</li>
					<li>Erosion control measures</li>
					<li>Soil stabilization techniques</li>
				</ul>
			`,
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
			content: `
				<h2>The Importance of Proper Drainage</h2>
				<p>Effective drainage systems are the foundation of healthy plantations. Poor drainage leads to waterlogging, root diseases, and reduced productivity.</p>
				
				<h2>Drainage System Components</h2>
				<p>Our comprehensive approach includes field drains, boundary drains, and collection systems designed for optimal water management.</p>
			`,
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
			content: `
				<h2>Preventive Maintenance Strategy</h2>
				<p>Regular maintenance extends equipment life and prevents costly breakdowns. Our systematic approach ensures maximum uptime and efficiency.</p>
			`,
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
			content: `
				<h2>Commitment to Safety Excellence</h2>
				<p>Safety is our top priority. Our ISO and SMK3 certifications demonstrate our commitment to protecting workers and the environment.</p>
			`,
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
			content: `
				<h2>Strategic Replanting Approach</h2>
				<p>Aging palms require strategic replanting to maintain productivity. Our methods improve palm density and ensure long-term sustainability.</p>
			`,
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
			content: `
				<h2>Building Essential Infrastructure</h2>
				<p>Remote plantations require robust infrastructure. We specialize in building roads, bridges, and support facilities in challenging locations.</p>
			`,
			published_at: '2023-12-10T10:00:00Z',
			created_at: '2023-12-10T10:00:00Z',
			is_active: true
		}
	];

	// Find blog by slug
	$: blog = allBlogs.find((b) => b.slug === $page.params.slug) || {
		title: 'Blog Post Not Found',
		slug: $page.params.slug,
		thumbnail_url:
			'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
		content: '<p>The blog post you are looking for does not exist.</p>',
		short_description: 'Blog post not found',
		published_at: new Date().toISOString(),
		created_at: new Date().toISOString(),
		is_active: true
	};

	/**
	 * @param {string} dateString
	 */
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<SEO title={blog.title} description={blog.short_description || 'Read our latest blog post'} />

<div class="mt-[72px] bg-white pt-[60px]">
	<div class="container mx-auto mb-11 space-y-[60px] px-5 lg:px-20">
		<Animate variant="top">
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
						<Breadcrumb.Page class="capitalize">{blog.slug}</Breadcrumb.Page>
					</Breadcrumb.Item>
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</Animate>

		<article class="mx-auto max-w-4xl">
			<!-- Blog Header -->
			<header class="mb-8 space-y-4">
				<h1 class="font-faculty-glyphic text-4xl font-bold lg:text-5xl">{blog.title}</h1>
				<div class="flex items-center gap-4 text-gray-600">
					<span>By KomputerMedan</span>
					<span>•</span>
					<time datetime={blog.published_at || blog.created_at}>
						{formatDate(blog.published_at || blog.created_at)}
					</time>
				</div>
			</header>

			<!-- Featured Image -->
			{#if blog.thumbnail_url}
				<div class="mb-8 overflow-hidden rounded-lg">
					<img src={blog.thumbnail_url} alt={blog.title} class="h-auto w-full object-cover" />
				</div>
			{/if}

			<!-- Blog Content -->
			<div class="prose prose-lg max-w-none">
				{@html blog.content}
			</div>
		</article>
	</div>
</div>
