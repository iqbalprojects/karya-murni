<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
	import Section from '$lib/components/ui/Section.svelte';

	const projects = [
		{
			company: 'Sinar Mas Group',
			location: 'North Sumatra',
			project: 'Replanting'
		},
		{
			company: 'Djarum Group',
			location: 'West Kalimantan',
			project: 'Land Clearing'
		},
		{
			company: 'Wilmar Group',
			location: 'Central Kalimantan',
			project: 'Replanting'
		},
		{
			company: 'Bahana Karya Semesta',
			location: 'Jambi',
			project: 'Replanting'
		},
		{
			company: 'Sampoerna Agro',
			location: 'West Kalimantan',
			project: 'Land Clearing'
		},
		{
			company: 'SIPEF Group',
			location: 'South Sumatra',
			project: 'Land Clearing'
		}
	];
</script>

<section class="space-y-20 py-20">
	<div class="container mx-auto grid grid-cols-5 gap-x-[53px] px-20">
		<div class="col-span-2 max-w-md space-y-9">
			<div class="space-y-3">
				<Section variant="primary">Projects</Section>
				<h2 class="font-faculty-glyphic text-5xl">Delivering Results Across Indonesia</h2>
			</div>
			<Button variant="primary">View all projects</Button>
		</div>
		<ul class="col-span-3 divide-y divide-gray-300">
			{#each projects as project}
				<li class="grid grid-cols-9 py-9">
					<h3 class="col-span-4 text-lg font-semibold">{project.company}</h3>
					<p class="col-span-3 text-lg font-medium text-gray-600">{project.location}</p>
					<p class="col-span-2 text-lg font-medium text-gray-600">{project.project}</p>
				</li>
			{/each}
		</ul>
	</div>
	<Clients />
</section>
