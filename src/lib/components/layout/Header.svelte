<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import sbpnLogo from '$lib/assets/images/sbpn-logo.webp';
	import kmpLogo from '$lib/assets/images/kmp-logo.webp';
	import Animate from '../ui/Animate.svelte';

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
		<Animate variant="left">
			<a href="/" class="flex items-center gap-x-3">
				<img src={sbpnLogo} alt="SBPN Logo" class="h-[34.5px] w-[34.5px] lg:h-[46px] lg:w-[46px]" />
				<img src={kmpLogo} alt="KMP Logo" class="h-9 w-[42.52px] lg:h-12 lg:w-[56.69px]" />
			</a>
		</Animate>
		<Animate variant="scale">
			<Navbar />
		</Animate>

		<Animate variant="right">
			<Button
				class={`hidden lg:block ${isEquipmentDetail ? 'bg-black/5 text-black' : 'bg-black/30 text-white'}`}
				>Contact us</Button
			>
		</Animate>
	</div>
</header>
