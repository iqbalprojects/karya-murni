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
			<Sheet.Content side="right" class="w-[300px] sm:w-[400px]">
				<Sheet.Header>
					<Sheet.Title>Navigation</Sheet.Title>
					<Sheet.Description>Choose where you'd like to go</Sheet.Description>
				</Sheet.Header>
				<div class="mt-6 space-y-4">
					{#each navLinks as link}
						<div class="space-y-2">
							{#if 'subLinks' in link}
								<div class="space-y-2">
									<a
										href={resolve(link.href)}
										class="block text-lg font-medium hover:text-primary"
										onclick={closeSheet}
									>
										{link.label}
									</a>
									<div class="ml-4 space-y-2">
										{#each link.subLinks as subLink}
											<a
												href={`${link.href}${subLink.href}`}
												class="block text-sm text-gray-600 hover:text-primary"
												onclick={closeSheet}
											>
												{subLink.label}
											</a>
										{/each}
									</div>
								</div>
							{:else}
								<a
									href={resolve(link.href)}
									class="block text-lg font-medium hover:text-primary"
									onclick={closeSheet}
								>
									{link.label}
								</a>
							{/if}
						</div>
					{/each}
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</nav>
