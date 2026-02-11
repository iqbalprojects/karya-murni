<script>
	import ConstructionIcon from '$lib/icons/ConstructionIcon.svelte';
	import FileIcon from '$lib/icons/FileIcon.svelte';
	import LeafIcon from '$lib/icons/LeafIcon.svelte';
	import MapIcon from '$lib/icons/MapIcon.svelte';
	import StackIcon from '$lib/icons/StackIcon.svelte';
	import rectangle from '$lib/assets/images/rectangle.webp';
	import kmpLeftMethodology from '$lib/assets/images/kmp-left-methodology.webp';
	import kmpRight from '$lib/assets/images/kmp-right.webp';
	import Animate from '$lib/components/ui/Animate.svelte';

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

<section class="relative overflow-hidden bg-[#101828] pt-[126px] pb-20 text-white">
	<div
		class="absolute -top-1 -right-4/6 h-[34px] -translate-x-1.5 lg:top-0 lg:right-auto lg:left-0 lg:h-[46px] lg:translate-x-0"
	>
		<img
			src={rectangle}
			alt="Karya Murni"
			class="h-full w-full object-contain lg:-scale-x-100 lg:transform"
		/>
	</div>
	<div
		class="absolute -right-56 bottom-32 z-0 h-[489px] lg:right-auto lg:bottom-0 lg:left-0 lg:h-[558px]"
	>
		<img
			src={kmpLeftMethodology}
			alt="Karya Murni"
			class="hidden h-full w-full object-contain lg:block"
		/>
		<img src={kmpRight} alt="Karya Murni" class="h-full w-full object-contain lg:hidden" />
	</div>
	<div class="relative z-10 container mx-auto grid gap-y-[52px] px-5 lg:grid-cols-2 lg:px-20">
		<Animate variant="left">
			<div class="max-w-[496px] space-y-3 lg:space-y-5">
				<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-[52px]">
					Methodology & Execution
				</h2>
				<p class="text-gray-400 lg:text-lg">
					We follow a systematic and proven approach that prioritizes safety, efficiency, and
					environmental responsibility:
				</p>
			</div>
		</Animate>
		<Animate variant="right">
			<ul class="divide-y divide-white/10">
				{#each methods as method}
					<li class="flex items-start gap-x-6 py-9 first:pt-0 lg:py-11">
						<div><method.icon size={28} color="#D0D5DD" /></div>
						<p class="lg:text-lg">{method.description}</p>
					</li>
				{/each}
			</ul>
		</Animate>
	</div>
</section>
