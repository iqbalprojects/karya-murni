<script>
	import MissionIcon from '$lib/icons/MissionIcon.svelte';
	import VisionIcon from '$lib/icons/VisionIcon.svelte';
</script>

<section class="container mx-auto grid gap-x-5 gap-y-6 px-5 pb-12 lg:grid-cols-2 lg:p-20">
	<div class="space-y-6 rounded-lg bg-white p-6 drop-shadow-sm lg:space-y-7 lg:p-10">
		<div class="flex items-center gap-x-3 lg:gap-x-4">
			<VisionIcon class="h-7 w-7 lg:h-10 lg:w-10" />
			<h2 class="font-faculty-glyphic text-2xl lg:text-4xl">Vision</h2>
		</div>
		<ul
			class="list-disc space-y-2 border-t pt-7 pl-[22px] text-gray-950 marker:text-[#0D26484D] lg:text-lg"
		>
			<li>
				Provide better ways & technology in order to give sustainable benefits for the company,
				customers, environment and global community.
			</li>
			<li>
				Our company ensures high quality by using new, well-maintained equipment that operates
				efficiently for long hours. This allows us to deliver on time and consistently meet our work
				targets.
			</li>
		</ul>
	</div>
	<div class="space-y-6 rounded-lg bg-white p-6 drop-shadow-sm lg:space-y-7 lg:p-10">
		<div class="flex items-center gap-x-3 lg:gap-x-4">
			<MissionIcon class="h-7 w-7 lg:h-10 lg:w-10" />
			<h2 class="font-faculty-glyphic text-2xl lg:text-4xl">Mission</h2>
		</div>
		<ul
			class="list-disc space-y-2 border-t pt-7 pl-[22px] text-gray-950 marker:text-[#0D26484D] lg:text-lg"
		>
			<li>Specialized service provider in Palm oil industry, and Agri business.</li>
			<li>Provide all-in-one solution in heavy machinery and equipments.</li>
			<li>
				Maintain high professionalism and integrity in order to be one of the clients' first choice
				company with global reputation.
			</li>
		</ul>
	</div>
</section>
