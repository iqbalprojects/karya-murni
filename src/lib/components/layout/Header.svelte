<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import sbpnLogo from '$lib/assets/images/sbpn-logo.png';
	import kmpLogo from '$lib/assets/images/kmp-logo.png';

	const isEquipmentDetail = $derived(page.url.pathname.startsWith('/equipments/'));

	let scrolled = $state(false);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 0;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="z-50 w-full transition-colors duration-300 {isEquipmentDetail
		? ''
		: 'fixed top-0'} {scrolled ? 'bg-black/20 backdrop-blur-sm' : ''}"
>
	<div
		class="container mx-auto flex h-[64px] items-center justify-between px-5 lg:h-[72px] lg:px-20"
	>
		<a href="/" class="flex items-center gap-x-3">
			<img src={sbpnLogo} alt="SBPN Logo" width="46" height="46" />
			<img src={kmpLogo} alt="SBPN Logo" width="56.69" height="48" />
		</a>
		<Navbar />
		<Button
			class={`hidden lg:block ${isEquipmentDetail ? 'bg-black/5 text-black' : 'bg-black/30 text-white'}`}
			>Contact us</Button
		>
	</div>
</header>
