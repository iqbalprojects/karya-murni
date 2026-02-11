<script>
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { page } from '$app/state';

	let activeType = $state('All Units');
	let currentPage = $state(1);
	const itemsPerPage = 9;
	import excavator from '$lib/assets/images/excavator.webp';
	import excavator2 from '$lib/assets/images/excavator2.webp';
	import excavator3 from '$lib/assets/images/excavator3.webp';
	import Button from '$lib/components/ui/Button.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
	import Animate from '$lib/components/ui/Animate.svelte';
	import SEO from '$lib/components/SEO.svelte';

	const types = [
		{
			title: 'All Units',
			unit: [
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				}
			]
		},
		{
			title: 'Mini Excavators',
			unit: [
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				}
			]
		},
		{
			title: 'Medium Excavators',
			unit: [
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				}
			]
		},
		{
			title: 'Large Excavators',
			unit: [
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				}
			]
		},
		{
			title: 'Demolition Excavators',
			unit: [
				{
					image: excavator,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator2,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				},
				{
					image: excavator3,
					name: '300.9D Excavator',
					netPower: '13 hp',
					digDepth: '68 in',
					operatingWeight: '2061 lb',
					fuelType: 'Diesel, 12L/hr'
				}
			]
		}
	];

	const activeUnits = $derived(types.find((t) => t.title === activeType)?.unit ?? []);
	const totalPages = $derived(Math.ceil(activeUnits.length / itemsPerPage));
	const startIndex = $derived((currentPage - 1) * itemsPerPage);
	const endIndex = $derived(startIndex + itemsPerPage);
	const visibleUnits = $derived(activeUnits.slice(startIndex, endIndex));

	// Reset currentPage when activeType changes
	$effect(() => {
		activeType;
		currentPage = 1;
	});
</script>

<SEO 
	title="{page.params.slug ? page.params.slug.charAt(0).toUpperCase() + page.params.slug.slice(1) : 'Equipment Detail'} - Equipments"
	description="Check out our {page.params.slug} available for rent at competitive prices." 
/>

<div class="container mx-auto mt-16 mb-[100px] space-y-[60px] px-5 lg:px-20">
	<Animate variant="top">
		<Breadcrumb.Root>
			<Breadcrumb.List>
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Link href="/equipments">Equipments</Breadcrumb.Link>
				</Breadcrumb.Item>
				<Breadcrumb.Separator />
				<Breadcrumb.Item>
					<Breadcrumb.Page class="capitalize">{page.params.slug}</Breadcrumb.Page>
				</Breadcrumb.Item>
			</Breadcrumb.List>
		</Breadcrumb.Root>
	</Animate>
	<section class="max-w-[737px] space-y-4">
		<Animate variant="left">
			<h1 class="font-faculty-glyphic text-5xl">250 Unit Excavator</h1>
		</Animate>
		<Animate variant="right">
			<p class="text-lg text-gray-600">
				Offered in multiple sizes and configurations, they are designed for simple operation,
				long-term durability, and advanced technology that supports productivity and safety, helping
				you work efficiently every day.
			</p>
		</Animate>
	</section>
	<section class="space-y-[70px] text-center">
		<div class="space-y-7">
			<!-- Mobile Select -->
			<Select.Root
				type="single"
				value={activeType}
				onValueChange={(value) => {
					if (value) activeType = value;
				}}
			>
				<Select.Trigger class="w-full rounded-none lg:hidden">
					{activeType}
				</Select.Trigger>
				<Select.Content class="rounded-none">
					{#each types as type}
						<Select.Item value={type.title} label={type.title} class="rounded-none">
							{type.title}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<!-- Desktop Tabs -->
			<ul class="hidden grid-cols-5 gap-x-2 lg:grid">
				{#each types as type}
					<li>
						<button
							class="w-full cursor-pointer py-4 text-center {activeType === type.title
								? 'bg-[#213A5C] text-white'
								: 'bg-neutral-100'}"
							onclick={() => (activeType = type.title)}
						>
							{type.title}
						</button>
					</li>
				{/each}
			</ul>
			<ul class="grid border-[0.5px] lg:grid-cols-3">
				{#each visibleUnits as unit}
					<Animate variant="scale">
						<li class="border-[0.5px] bg-white px-7 pb-7">
							<div class="grid h-[272px] place-content-center px-12 lg:h-[320px] lg:px-[73px]">
								<img src={unit.image} alt={unit.name} />
							</div>
							<div class="mb-7 space-y-4 text-start">
								<h3 class="text-lg font-semibold lg:text-xl">{unit.name}</h3>
								<ul class="grid grid-cols-2 gap-x-4 gap-y-4">
									<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
										Net Power <span class="text-base text-black">{unit.netPower}</span>
									</li>
									<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
										Dig Depth <span class="text-base text-black">{unit.digDepth}</span>
									</li>
									<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
										Operating Weight <span class="text-base text-black">{unit.operatingWeight}</span
										>
									</li>
									<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
										Fuel Type <span class="text-base text-black">{unit.fuelType}</span>
									</li>
								</ul>
							</div>
							<Button href="" class="flex w-full items-center justify-center bg-[#213A5C] lg:w-fit"
								><span class="flex items-center text-white">Ask for details <ChevronIcon /></span
								></Button
							>
						</li>
					</Animate>
				{/each}
			</ul>
		</div>
		{#if totalPages > 1}
			<Animate variant="fade" duration={1.5}>
				<Pagination.Root
					count={activeUnits.length}
					perPage={itemsPerPage}
					page={currentPage}
					onPageChange={(newPage) => (currentPage = newPage)}
				>
					{#snippet children({ pages, currentPage: paginationCurrentPage })}
						<Pagination.Content>
							<Pagination.Item>
								<Pagination.Previous class="cursor-pointer" />
							</Pagination.Item>
							{#each pages as page (page.key)}
								{#if page.type === 'ellipsis'}
									<Pagination.Item>
										<Pagination.Ellipsis />
									</Pagination.Item>
								{:else}
									<Pagination.Item>
										<Pagination.Link
											class="cursor-pointer"
											{page}
											isActive={paginationCurrentPage === page.value}
										>
											{page.value}
										</Pagination.Link>
									</Pagination.Item>
								{/if}
							{/each}
							<Pagination.Item>
								<Pagination.Next class="cursor-pointer" />
							</Pagination.Item>
						</Pagination.Content>
					{/snippet}
				</Pagination.Root>
			</Animate>
		{/if}
	</section>
</div>
