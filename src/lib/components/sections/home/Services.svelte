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

<section class="space-y-[60px] p-20 container mx-auto">
	<div class="space-y-3">
		<Section variant="primary">Our Services</Section>
		<h2 class="font-faculty-glyphic text-5xl">Solutions for Your Sustainable Future</h2>
	</div>
	<ul class="grid grid-cols-3 gap-x-5">
		{#each services as service}
			<li
				class="flex h-[380px] flex-col justify-between rounded-lg bg-white px-7 pt-7 drop-shadow-sm"
			>
				<service.icon />
				<div class="space-y-7">
					<div class="space-y-5">
						<div class="flex items-center gap-x-3">
							<h3 class="text font-faculty-glyphic text-[28px]">{service.title}</h3>
							{#if service.badge}
								<p class="mt-1 rounded-full bg-gray-200 px-2 py-0.5 text-[13px] font-semibold">
									{service.badge}
								</p>
							{/if}
						</div>
						<p class="text-gray-600">{service.description}</p>
					</div>
					<a href="/" class="flex h-[60px] items-center gap-x-0.5 border-t border-t-black/10 py-2"
						>Learn more <ChevronIcon /></a
					>
				</div>
			</li>
		{/each}
	</ul>
</section>
