<script>
	import MissionIcon from '$lib/icons/MissionIcon.svelte';
	import VisionIcon from '$lib/icons/VisionIcon.svelte';
</script>

<section class="container mx-auto grid grid-cols-2 gap-x-5 p-20">
	<div class="space-y-7 rounded-lg bg-white p-10 drop-shadow-sm">
		<div class="flex items-center gap-2">
			<VisionIcon />
			<h2 class="font-faculty-glyphic text-4xl">Vision</h2>
		</div>
		<ul
			class="list-disc space-y-2 border-t pt-7 pl-[22px] text-lg text-gray-950 marker:text-[#0D26484D]"
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
	<div class="space-y-7 rounded-lg bg-white p-10 drop-shadow-sm">
		<div class="flex items-center gap-2">
			<MissionIcon />
			<h2 class="font-faculty-glyphic text-4xl">Mission</h2>
		</div>
		<ul
			class="list-disc space-y-2 border-t pt-7 pl-[22px] text-lg text-gray-950 marker:text-[#0D26484D]"
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
