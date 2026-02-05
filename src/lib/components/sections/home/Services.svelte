<script>
	import ConstructionIcon from '$lib/icons/ConstructionIcon.svelte';
	import PlantIcon from '$lib/icons/PlantIcon.svelte';
	import TreeIcon from '$lib/icons/TreeIcon.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';

	const services = [
		{
			icon: PlantIcon,
			title: 'Replanting',
			badge: 'ZERO BURNING METHOD',
			description:
				'Sustainable land preparation using safe, zero-burn techniques to renew plantations efficiently while protecting soil quality and the surrounding environment'
		},
		{
			icon: TreeIcon,
			title: 'Land Clearing',
			description:
				'Comprehensive clearing services, from vegetation removal to site preparation, ensuring your land is ready for development with clean, organized, and structurally sound groundwork'
		},
		{
			icon: ConstructionIcon,
			title: 'Construction & Development',
			description:
				'End-to-end infrastructure development including roads, drainage, and structural works to support smooth operations and long-term project growth'
		}
	];
</script>

<section class="container mx-auto space-y-[60px] px-5 py-12 lg:p-20">
	<div class="space-y-3">
		<Section variant="primary">Our Services</Section>
		<h2 class="font-faculty-glyphic text-4xl lg:text-5xl">Solutions for Your Sustainable Future</h2>
	</div>
	<ul class="grid gap-5 lg:grid-cols-3">
		{#each services as service}
			<li
				class="flex h-[304px] flex-col justify-between rounded-lg bg-white px-6 pt-6 drop-shadow-sm lg:h-[380px] lg:px-7 lg:pt-7"
			>
				<service.icon class="h-9 w-9 lg:h-12 lg:w-12" />
				<div class="space-y-6 lg:space-y-7">
					<div class="space-y-4 lg:space-y-5">
						<div class="flex items-center gap-x-3">
							<h3 class="font-faculty-glyphic text-2xl lg:text-[28px]">{service.title}</h3>
							{#if service.badge}
								<p
									class="mt-1 rounded-full bg-gray-200 px-2 py-0.5 text-[11px] font-semibold lg:text-[13px]"
								>
									{service.badge}
								</p>
							{/if}
						</div>
						<p class="text-sm text-gray-600 lg:text-base">{service.description}</p>
					</div>
					<a
						href="/"
						class="flex h-14 items-center gap-x-0.5 border-t border-t-black/10 py-2 text-sm font-medium lg:h-[60px] lg:text-base"
						>Learn more <ChevronIcon /></a
					>
				</div>
			</li>
		{/each}
	</ul>
</section>
