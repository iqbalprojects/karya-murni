<script>
	import Section from '$lib/components/ui/Section.svelte';

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
		},
		{
			value: '1981',
			title: 'Established',
			description: 'Over 40 years of proven experience in land development'
		}
	];
</script>

<section class="container mx-auto space-y-20 p-20">
	<div class="flex justify-between">
		<div class="w-full max-w-[436px]">
			<Section variant="primary">Why Choose Us</Section>
			<h2 class="font-faculty-glyphic text-[52px] leading-[115%]">Proven Track Records</h2>
		</div>
		<div class="w-full max-w-[630px] space-y-5">
			<p class="font-faculty-glyphic text-2xl">
				“Karya Murni handled a very challenging clearing site for us, and the professionalism they
				demonstrated was exceptional. The land clearing work was thorough, well-coordinated, and
				completed exactly as scheduled. Professional team and reliable results.”
			</p>
			<p class="text-gray-400">Petro Betrand, Director at PT HM Sampoerna Tbk.</p>
		</div>
	</div>
	<ul class="flex items-center justify-between">
		{#each achievements as achievement}
			<li class="max-w-[314px] space-y-8 bg-gray-100 p-7">
				<p class="font-faculty-glyphic text-7xl">{achievement.value}</p>
				<div class="space-y-2">
					<h3 class="font-semibold">{achievement.title}</h3>
					<p class="text-gray-400">{achievement.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
