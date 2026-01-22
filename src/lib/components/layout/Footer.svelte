<script>
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
	import XIcon from '$lib/icons/XIcon.svelte';

	const links = [
		{
			title: 'Company',
			items: [
				{ title: 'About', href: '/about' },
				{ title: 'Services', href: '/blog' },
				{ title: 'Certifications', href: '/store-location' },
				{ title: 'News', href: '/terms-conditions' }
			]
		},
		{
			title: 'Services',
			items: [
				{ title: 'Replanting', href: '/' },
				{ title: 'Land Clearing', href: '/' },
				{ title: 'Other Services', href: '/' }
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

<footer class="bg-[#0C111D] px-20 py-[60px]">
	<div class="container mx-auto grid grid-cols-2">
		<div class="text-white">
			<h2 class="font-faculty-glyphic">KARYA MURNI GROUP</h2>
			<div></div>
		</div>
		<ul class="grid grid-cols-3 text-white">
			{#each links as link}
				<li class="space-y-5">
					<h3>{link.title}</h3>
					<ul class="space-y-4 text-white/60">
						{#each link.items as item}
							<li>
								<a href={item.href}>{item.title}</a>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
			<li>
				<ul class="space-y-7">
					<li class="space-y-0.5">
						<h3>Email</h3>
						<a href="mailto:info@karyamurni.com" class="text-white/60">info@karyamurni.com</a>
					</li>
					<li class="space-y-0.5">
						<h3>Phone</h3>
						<a href="tel:+1234567890" class="text-white/60">(123) 456 - 7890</a>
					</li>
					<li>
						<ul class="flex items-center gap-x-3">
							{#each socials as social}
								<li class="text-white/60">
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
</footer>
