<script>
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { page } from '$app/stores';

	let activeType = $state('All Units');
	let currentPage = $state(1);
	const itemsPerPage = 9;
	import excavator from '$lib/assets/images/excavator.jpeg';
	import excavator2 from '$lib/assets/images/excavator2.jpeg';
	import excavator3 from '$lib/assets/images/excavator3.jpeg';
	import Button from '$lib/components/ui/Button.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';

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

<div class="container mx-auto mt-16 mb-[100px] space-y-[60px] px-20">
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
				<Breadcrumb.Page class="capitalize">{$page.params.slug}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
	<section class="max-w-[737px] space-y-4">
		<h1 class="font-faculty-glyphic text-5xl">250 Unit Excavator</h1>
		<p class="text-lg text-gray-600">
			Offered in multiple sizes and configurations, they are designed for simple operation,
			long-term durability, and advanced technology that supports productivity and safety, helping
			you work efficiently every day.
		</p>
	</section>
	<section class="space-y-[70px] text-center">
		<div class="space-y-7">
			<ul class="grid grid-cols-5 gap-x-2">
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
			<ul class="grid grid-cols-3 border-[0.5px]">
				{#each visibleUnits as unit}
					<li class="border-[0.5px] bg-white px-7 pb-7">
						<img src={unit.image} alt={unit.name} class="px-[73px] py-[66px]" />
						<div class="mb-7 space-y-4 text-start">
							<h3 class="font-semibold">{unit.name}</h3>
							<ul class="grid grid-cols-2 gap-x-4 gap-y-4">
								<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
									Net Power <span class="text-base text-black">{unit.netPower}</span>
								</li>
								<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
									Dig Depth <span class="text-base text-black">{unit.digDepth}</span>
								</li>
								<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
									Operating Weight <span class="text-base text-black">{unit.operatingWeight}</span>
								</li>
								<li class="flex flex-col gap-0.5 text-sm font-medium text-gray-500">
									Fuel Type <span class="text-base text-black">{unit.fuelType}</span>
								</li>
							</ul>
						</div>
						<Button href="" class="flex w-fit items-center bg-[#213A5C]"
							><span class="flex items-center text-white">View all units <ChevronIcon /></span
							></Button
						>
					</li>
				{/each}
			</ul>
		</div>
		{#if totalPages > 1}
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
		{/if}
	</section>
</div>
