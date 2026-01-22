<script>
	const benefits = [
		'<b>Clean and accessible land</b> ready for the next development phase',
		'Improved land structure through <b>controlled terracing</b> and <b>drainage</b>',
		'<b>Safer conditions</b> for workers and heavy equipment',
		'<b>Efficient</b> progress supported by a skilled team and <b>reliable</b> machinery'
	];
</script>

<section class="container mx-auto grid grid-cols-2 p-20">
	<div>
		<h2>Overview</h2>
		<p>
			Our land clearing operations support estate development by removing vegetation, preparing
			slopes, and establishing proper drainage systems. Each step is executed with precision to
			ensure the land is stable, accessible, and ready for downstream activities such as replanting,
			roadwork, or infrastructure development.
		</p>
	</div>
	<div>
		<h3>Key benefits</h3>
		<ul class="list-disc pl-5">
			{#each benefits as benefit}
				<li>{@html benefit}</li>
			{/each}
		</ul>
	</div>
</section>
