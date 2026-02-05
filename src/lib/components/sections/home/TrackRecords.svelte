<script>
	import kmpRight from '$lib/assets/images/kmp-right.png';
	import rectangle from '$lib/assets/images/rectangle.png';

	const achievements = [
		{
			value: '1981',
			title: 'Established',
			badge: 'ZERO BURNING METHOD',
			description: 'Over 40 years of proven experience in land development'
		},
		{
			value: '500+',
			title: 'Projects completed',
			description: 'Successful projects delivered across multiple regions'
		},
		{
			value: '50+',
			title: 'Equipment Fleet',
			description: 'A reliable machinery ready for efficient project execution'
		}
	];
</script>

<section
	class="relative h-[994px] overflow-hidden bg-[#101828] pt-[74px] pb-[52px] text-white lg:h-[705px] lg:pt-20 lg:pb-[110px]"
>
	<div
		class="absolute -top-1 -right-4/6 h-[34px] -translate-x-1.5 lg:top-0 lg:right-0 lg:h-[46px] lg:translate-x-0"
	>
		<img src={rectangle} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div
		class="absolute -right-3/6 bottom-28 z-0 h-[489px] lg:top-16 lg:right-0 lg:bottom-0 lg:h-[603px]"
	>
		<img src={kmpRight} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div class="relative z-10 container mx-auto flex h-full flex-col justify-between px-5 lg:px-20">
		<div class="flex flex-col gap-y-3 lg:flex-row! lg:items-center lg:justify-between">
			<h2 class="max-w-xs font-faculty-glyphic text-4xl leading-[115%] lg:max-w-md lg:text-[52px]">
				Proven Track Records
			</h2>
			<p class="max-w-md text-base text-gray-400 lg:text-lg">
				Driving responsible land development through proven practices and a commitment to long-term,
				sustainable growth.
			</p>
		</div>
		<ul class="flex flex-col gap-y-16 lg:flex-row! lg:items-center lg:gap-x-16">
			{#each achievements as achievement}
				<li class="max-w-[275px] space-y-4 lg:space-y-6">
					<p class="font-faculty-glyphic text-6xl lg:text-7xl">{achievement.value}</p>
					<div class="space-y-1.5 lg:space-y-2">
						<h3 class="text-lg font-medium">{achievement.title}</h3>
						<p class="text-gray-400 lg:text-lg">{achievement.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
