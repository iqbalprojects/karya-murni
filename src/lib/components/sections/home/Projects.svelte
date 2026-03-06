<script lang="ts">
	import Animate from '$lib/components/ui/Animate.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Section from '$lib/components/ui/Section.svelte';

	type ProjectItem = {
		title: string;
		location: string;
		type: string;
		slug: string;
	};

	interface Props {
		projects?: ProjectItem[];
	}

	let { projects = [] }: Props = $props();
</script>

<section class="container mx-auto grid gap-y-10 px-5 py-12 lg:grid-cols-5 lg:gap-x-[53px] lg:p-20">
	<Animate variant="left" class="col-span-2">
		<div class="space-y-9 lg:max-w-md">
			<div class="space-y-3">
				<Section variant="primary">Projects</Section>
				<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">
					Delivering Results Across Indonesia
				</h2>
			</div>
			<Button href="/projects" variant="primary">View all projects</Button>
		</div>
	</Animate>
	<Animate variant="right" class="col-span-3">
		<ul class="divide-y divide-gray-300">
			{#each projects as project, index}
				<li>
					<a class="grid grid-cols-10 gap-x-5 py-6 lg:gap-x-10 lg:py-9" href={`/projects/${project.slug}`}>
						<p class="col-span-1 text-xs font-medium text-gray-600 sm:text-sm lg:text-sm 2xl:text-lg">
							0{index + 1}
						</p>
						<h3 class="col-span-3 text-xs font-semibold sm:text-sm lg:col-span-4 lg:text-sm 2xl:text-lg">
							{project.title}
						</h3>
						<p class="col-span-3 text-xs font-medium text-gray-600 sm:text-sm lg:text-sm 2xl:text-lg">
							{project.location}
						</p>
						<p class="col-span-3 text-xs font-medium text-gray-600 sm:text-sm lg:col-span-2 lg:text-sm 2xl:text-lg">
							{project.type}
						</p>
					</a>
				</li>
			{/each}
		</ul>
	</Animate>
</section>
