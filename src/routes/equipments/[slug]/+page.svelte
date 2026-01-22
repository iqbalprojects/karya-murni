<script>
	let activeType = $state('All Units');
	let visibleCount = $state(9);
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
	const visibleUnits = $derived(activeUnits.slice(0, visibleCount));
	const hasMore = $derived(activeUnits.length > visibleCount);

	function loadMore() {
		visibleCount += 9;
	}

	// Reset visibleCount when activeType changes
	$effect(() => {
		activeType;
		visibleCount = 9;
	});
</script>

<div class="container mx-auto mt-16 mb-[100px] space-y-[60px]">
	<section>
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
							<ul class="grid grid-cols-2">
								<li>Net Power: {unit.netPower}</li>
								<li>Dig Depth: {unit.digDepth}</li>
								<li>Operating Weight: {unit.operatingWeight}</li>
								<li>Fuel Type: {unit.fuelType}</li>
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
		{#if hasMore}
			<button
				onclick={loadMore}
				class="cursor-pointer rounded-md bg-black/5 px-[18px] py-2.5 font-medium">Load more</button
			>
		{/if}
	</section>
</div>
