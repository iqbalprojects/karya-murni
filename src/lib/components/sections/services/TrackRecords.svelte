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

<section class="container mx-auto space-y-20 px-5 py-12 lg:p-20">
	<div class="flex flex-col justify-between gap-y-[52px] lg:flex-row!">
		<div class="w-full max-w-[353px] space-y-3 lg:max-w-[436px]">
			<Section variant="primary">Why Choose Us</Section>
			<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-[52px]">
				Proven Track Records
			</h2>
		</div>
		<div class="w-full max-w-[630px] space-y-4 lg:space-y-5">
			<p class="font-faculty-glyphic text-xl lg:text-2xl">
				“Karya Murni handled a very challenging clearing site for us, and the professionalism they
				demonstrated was exceptional. The land clearing work was thorough, well-coordinated, and
				completed exactly as scheduled. Professional team and reliable results.”
			</p>
			<p class="text-gray-400">Petro Betrand, Director at PT HM Sampoerna Tbk.</p>
		</div>
	</div>
	<ul class="flex flex-col items-center justify-between space-y-3 lg:flex-row!">
		{#each achievements as achievement}
			<li class="w-full space-y-5 bg-gray-100 p-6 lg:max-w-[314px] lg:space-y-8 lg:p-7">
				<p class="font-faculty-glyphic text-4xl lg:text-[56px]">{achievement.value}</p>
				<div class="space-y-2">
					<h3 class="font-semibold">{achievement.title}</h3>
					<p class="text-gray-500">{achievement.description}</p>
				</div>
			</li>
		{/each}
	</ul>
</section>
