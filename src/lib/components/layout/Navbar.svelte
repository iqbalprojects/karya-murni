<script lang="ts">
	import { resolve } from '$app/paths';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';

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
</script>

<NavigationMenu.Root viewport={false}>
	<NavigationMenu.List class="space-x-12">
		{#each navLinks as link}
			<NavigationMenu.Item class="text-white">
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
