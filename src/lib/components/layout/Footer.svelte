<script>
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
	import XIcon from '$lib/icons/XIcon.svelte';
	import sbpnLogo from '$lib/assets/images/sbpn-logo.png';
	import kmpFlatLogo from '$lib/assets/images/kmp-flat-logo.png';

	const links = [
		{
			title: 'Company',
			items: [
				{ title: 'About', href: '/about' },
				{ title: 'Services', href: '/services' },
				{ title: 'Certifications', href: '/certifications' },
				{ title: 'News', href: '/news' }
			]
		},
		{
			title: 'Services',
			items: [
				{ title: 'Replanting', href: '/replanting' },
				{ title: 'Land Clearing', href: '/land-clearing' },
				{ title: 'Other Services', href: '/others' }
			]
		}
	];

	const socials = [
		{ icon: FacebookIcon, label: 'Facebook', href: '#' },
		{ icon: XIcon, label: 'X', href: '#' },
		{ icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
		{ icon: InstagramIcon, label: 'Instagram', href: '#' }
	];
</script>

<footer class="h-[887px] bg-[#0C111D] lg:h-[440px]">
	<div
		class="container mx-auto flex h-full flex-col justify-between px-5 py-[60px] text-white/60 lg:px-20"
	>
		<div class="grid gap-y-[68px] lg:grid-cols-2">
			<div class="space-y-[25px] text-white">
				<h2 class="font-faculty-glyphic">KARYA MURNI GROUP</h2>
				<div class="flex items-center gap-x-5">
					<img src={kmpFlatLogo} alt="SBPN Logo" width="67.53" height="52" />
					<img src={sbpnLogo} alt="SBPN Logo" width="43.22" height="43.22" />
				</div>
			</div>
			<ul class="grid grid-cols-2 gap-y-[63px] lg:flex lg:justify-between">
				{#each links as link}
					<li class="space-y-5">
						<h3 class="text-white">{link.title}</h3>
						<ul class="space-y-4">
							{#each link.items as item}
								<li class=" hover:text-white/80">
									<a href={item.href}>{item.title}</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
				<li>
					<ul class="space-y-7">
						<li class="space-y-0.5">
							<h3 class="text-white">Email</h3>
							<a href="mailto:info@karyamurni.com" class="hover:text-white/80"
								>info@karyamurni.com</a
							>
						</li>
						<li class="space-y-0.5">
							<h3>Phone</h3>
							<a href="tel:+1234567890" class="text-white/60 hover:text-white/80"
								>(123) 456 - 7890</a
							>
						</li>
						<li>
							<ul class="flex items-center gap-x-3">
								{#each socials as social}
									<li class="text-white/60 hover:text-white/80">
										<a href={social.href} aria-label={social.label}>
											<social.icon />
										</a>
									</li>
								{/each}
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div
			class="flex w-full flex-col-reverse flex-wrap justify-between gap-y-5 text-white/60 lg:flex-row!"
		>
			<p>© 2025 Karya Murni Group. All Rights Reserved.</p>
			<ul class="flex items-center gap-x-4">
				<li><a href="/privacy-policy">Privacy Policy </a></li>
				<li>•</li>
				<li><a href="/terms-conditions">Terms & Conditions </a></li>
			</ul>
		</div>
	</div>
</footer>
