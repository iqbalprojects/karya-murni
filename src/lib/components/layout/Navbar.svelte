<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';

	const isEquipmentDetail = $derived(page.url.pathname.startsWith('/equipments/'));

	const navLinks = [
		{
			href: '/about',
			label: 'About'
		},
		{
			href: '/services',
			label: 'Services',
			subLinks: [{ href: '/land-clearing', label: 'Land Clearing' }]
		},
		{
			href: '/projects',
			label: 'Projects'
		},
		{
			href: '/equipments',
			label: 'Equipments'
		},
		{ href: '/news', label: 'News' }
	] as const;

	let isSheetOpen = $state(false);

	function closeSheet() {
		isSheetOpen = false;
	}
</script>

<nav>
	<!-- Desktop Navigation -->
	<div class="hidden lg:block">
		<NavigationMenu.Root viewport={false}>
			<NavigationMenu.List class="space-x-12">
				{#each navLinks as link}
					<NavigationMenu.Item class={isEquipmentDetail ? 'text-black' : 'text-white'}>
						{#if 'subLinks' in link}
							<NavigationMenu.Trigger class="cursor-pointer bg-transparent"
								>{link.label}</NavigationMenu.Trigger
							>
							<NavigationMenu.Content>
								<ul class="grid w-[200px] gap-4 p-2">
									{#each link.subLinks as subLink}
										<li>
											<NavigationMenu.Link href={`${link.href}${subLink.href}`}
												>{subLink.label}</NavigationMenu.Link
											>
										</li>
									{/each}
								</ul>
							</NavigationMenu.Content>
						{:else}
							<NavigationMenu.Link href={resolve(link.href)}>{link.label}</NavigationMenu.Link>
						{/if}
					</NavigationMenu.Item>
				{/each}
			</NavigationMenu.List>
		</NavigationMenu.Root>
	</div>

	<!-- Mobile/Tablet Navigation -->
	<div class="lg:hidden">
		<Sheet.Root bind:open={isSheetOpen}>
			<Sheet.Trigger class={`p-2 ${isEquipmentDetail ? 'text-black' : 'text-white'}`}>
				<MenuIcon />
			</Sheet.Trigger>
			<Sheet.Content
				side="right"
				class="w-[85vw] max-w-[400px] border-[#0C111D] bg-[#0C111D] text-white"
			>
				<Sheet.Header class="border-b border-white/10 pb-4">
					<Sheet.Title class="text-left font-faculty-glyphic text-2xl text-white">Menu</Sheet.Title>
					<Sheet.Description class="text-left text-sm text-gray-400">
						Navigate to your destination
					</Sheet.Description>
				</Sheet.Header>
				<nav class="mt-8">
					<ul class="space-y-1">
						{#each navLinks as link}
							<li>
								{#if 'subLinks' in link}
									<!-- Parent link with sublinks -->
									<div class="space-y-1">
										<a
											href={resolve(link.href)}
											class="block rounded-lg px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
											onclick={closeSheet}
										>
											{link.label}
										</a>
										<!-- Sublinks -->
										<ul class="ml-4 space-y-1 border-l-4 border-white/20">
											{#each link.subLinks as subLink}
												<li>
													<a
														href={`${link.href}${subLink.href}`}
														class="block rounded-lg px-4 py-2.5 font-medium text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
														onclick={closeSheet}
													>
														{subLink.label}
													</a>
												</li>
											{/each}
										</ul>
									</div>
								{:else}
									<!-- Regular link -->
									<a
										href={resolve(link.href)}
										class="block rounded-lg px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
										onclick={closeSheet}
									>
										{link.label}
									</a>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>
