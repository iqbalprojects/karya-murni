<script>
	import ConstructionIcon from '$lib/icons/ConstructionIcon.svelte';
	import FileIcon from '$lib/icons/FileIcon.svelte';
	import LeafIcon from '$lib/icons/LeafIcon.svelte';
	import MapIcon from '$lib/icons/MapIcon.svelte';
	import StackIcon from '$lib/icons/StackIcon.svelte';
	import rectangle from '$lib/assets/images/rectangle.png';
	import kmpLeftMethodology from '$lib/assets/images/kmp-left-methodology.png';

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

<section class="relative bg-[#101828] pt-[126px] pb-20 text-white">
	<div class="absolute top-0 left-0 z-0 h-[46px]">
		<img
			src={rectangle}
			alt="Karya Murni"
			class="h-full w-full -scale-x-100 transform object-contain"
		/>
	</div>
	<div class="absolute bottom-0 left-0 z-0 h-[558px]">
		<img src={kmpLeftMethodology} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div class="relative z-10 container mx-auto grid grid-cols-2 px-20">
		<div class="max-w-[496px] space-y-5">
			<h2 class="font-faculty-glyphic text-[52px] leading-[115%]">Methodology & Execution</h2>
			<p class="text-lg text-gray-400">
				We follow a systematic and proven approach that prioritizes safety, efficiency, and
				environmental responsibility:
			</p>
		</div>
		<ul class="divide-y divide-white/10">
			{#each methods as method}
				<li class="flex items-start gap-x-6 py-11 first:pt-0">
					<method.icon size={28} color="#D0D5DD" />
					<p>{method.description}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
