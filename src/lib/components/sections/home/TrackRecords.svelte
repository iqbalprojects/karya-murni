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

<section class="relative h-[705px] bg-[#101828] pt-20 pb-[110px] text-white">
	<div class="absolute top-0 right-0 z-0 h-[46px]">
		<img src={rectangle} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div class="absolute top-16 right-0 z-0 h-[603px]">
		<img src={kmpRight} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div class="relative z-10 container mx-auto flex h-full flex-col justify-between px-20">
		<div class="flex items-center justify-between">
			<h2 class="max-w-md font-faculty-glyphic text-[52px] leading-[115%]">Proven Track Records</h2>
			<p class="max-w-md text-lg text-gray-400">
				Driving responsible land development through proven practices and a commitment to long-term,
				sustainable growth.
			</p>
		</div>
		<ul class="flex items-center gap-x-16">
			{#each achievements as achievement}
				<li class="max-w-[275px] space-y-6">
					<p class="font-faculty-glyphic text-7xl">{achievement.value}</p>
					<div class="space-y-2">
						<h3 class="text-lg font-medium">{achievement.title}</h3>
						<p class="text-lg text-gray-400">{achievement.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
