<script>
	import Button from '$lib/components/ui/Button.svelte';

	const news = [
		{
			title: 'Company Expands Replanting Operations Using Zero Burning Method',
			description:
				'Our latest replanting program begins in North Sumatra, reinforcing our commitment to safe and environmentally responsible land practices.',
			date: '12 March 2025'
		},
		{
			title: 'New Heavy Equipment Units Added to Support Large-Scale Projects',
			description:
				'Additional machinery has been deployed to improve operational efficiency and accelerate project timelines across multiple sites.',
			date: '28 February 2025'
		},
		{
			title: 'Ongoing Infrastructure Development Completed Ahead of Schedule',
			description:
				'Our team successfully concluded a key access road and drainage project, ensuring smoother estate operations for our client.',
			date: '14 February 2025'
		}
	];
</script>

<section class="container mx-auto space-y-10 px-5 py-12 text-center lg:space-y-[60px] lg:p-20">
	<div class="flex items-center justify-between">
		<h2 class="font-faculty-glyphic text-5xl">Latest news</h2>
		<Button variant="primary" class="hidden lg:block">View all projects</Button>
	</div>
	<ul class="grid border-[0.5px] text-start lg:grid-cols-3">
		{#each news as item}
			<li class="flex h-[368px] flex-col justify-between border-[0.5px] bg-white p-8">
				<div class="space-y-2">
					<h3 class="font-faculty-glyphic text-2xl">{item.title}</h3>
					<p class="text-sm">{item.description}</p>
				</div>
				<p class="text-xs text-gray-500">{item.date}</p>
			</li>
		{/each}
	</ul>
	<Button variant="primary" class="lg:hidden">View all projects</Button>
</section>
