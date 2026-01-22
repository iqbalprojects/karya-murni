<script>
	import Hero from '$lib/components/sections/services/Hero.svelte';
	import Overview from '$lib/components/sections/services/Overview.svelte';
	import divider from '$lib/assets/images/divider.png';
	import WorkScope from '$lib/components/sections/services/WorkScope.svelte';
	import Methodology from '$lib/components/sections/services/Methodology.svelte';
	import Gallery from '$lib/components/sections/services/Gallery.svelte';
	import Clients from '$lib/components/ui/Clients.svelte';
</script>

<div class="pb-20">
	<Hero />
	<Overview />
	<img src={divider} alt="Divider" />
	<WorkScope />
	<Methodology />
	<Gallery />
	<Clients />
</div>
