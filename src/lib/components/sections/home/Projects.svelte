<script>
	import Button from '$lib/components/ui/Button.svelte';
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

<section class="container mx-auto grid gap-y-10 px-5 py-12 lg:grid-cols-5 lg:gap-x-[53px] lg:p-20">
	<div class="col-span-2 space-y-9 lg:max-w-md">
		<div class="space-y-3">
			<Section variant="primary">Projects</Section>
			<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">
				Delivering Results Across Indonesia
			</h2>
		</div>
		<Button href="/projects" variant="primary">View all projects</Button>
	</div>
	<ul class="col-span-3 divide-y divide-gray-300">
		{#each projects as project, index}
			<li class="grid grid-cols-10 gap-x-5 py-6 lg:gap-x-10 lg:py-9">
				<p class="col-span-1 text-xs font-medium text-gray-600 sm:text-sm lg:text-sm 2xl:text-lg">
					0{index + 1}
				</p>
				<h3
					class="col-span-3 text-xs font-semibold sm:text-sm lg:col-span-4 lg:text-sm 2xl:text-lg"
				>
					{project.company}
				</h3>
				<p class="col-span-3 text-xs font-medium text-gray-600 sm:text-sm lg:text-sm 2xl:text-lg">
					{project.location}
				</p>
				<p
					class="col-span-3 text-xs font-medium text-gray-600 sm:text-sm lg:col-span-2 lg:text-sm 2xl:text-lg"
				>
					{project.project}
				</p>
			</li>
		{/each}
	</ul>
</section>
