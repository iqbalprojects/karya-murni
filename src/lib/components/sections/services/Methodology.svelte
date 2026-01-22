<script>
	import ConstructionIcon from '$lib/icons/ConstructionIcon.svelte';
	import FileIcon from '$lib/icons/FileIcon.svelte';
	import LeafIcon from '$lib/icons/LeafIcon.svelte';
	import MapIcon from '$lib/icons/MapIcon.svelte';
	import StackIcon from '$lib/icons/StackIcon.svelte';

	const methods = [
		{
			icon: MapIcon,
			description:
				'Pre-clearing site assessment to understand terrain, vegetation density, and drainage requirements'
		},
		{
			icon: ConstructionIcon,
			description: 'Deployment of the appropriate machinery for each clearing stage'
		},
		{
			icon: LeafIcon,
			description: 'Controlled clearing techniques to reduce unnecessary disturbance'
		},
		{
			icon: StackIcon,
			description:
				'Systematic terracing and drainage construction to support long-term land stability'
		},
		{
			icon: FileIcon,
			description:
				'Quality control checks at each phase to ensure consistency and readiness for the next development stage'
		}
	];
</script>

<section class="bg-[#101828] pt-[126px] pb-20 text-white">
	<div class="container mx-auto grid grid-cols-2 px-20">
		<div class="space-y-5">
			<h2 class="font-faculty-glyphic text-[52px] leading-[115%]">Methodology & Execution</h2>
			<p class="text-lg text-gray-400">
				We follow a systematic and proven approach that prioritizes safety, efficiency, and
				environmental responsibility:
			</p>
		</div>
		<ul>
			{#each methods as method}
				<li class="flex items-start gap-x-6 py-11">
					<method.icon size={28} color="#D0D5DD" />
					<p>{method.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
