<script>
	import Section from '$lib/components/ui/Section.svelte';
	import kmpLeft from '$lib/assets/images/kmp-left.webp';
</script>

<section class="relative">
	<div class="absolute bottom-0 left-0 z-0 hidden h-[518px] lg:block">
		<img src={kmpLeft} alt="Karya Murni" class="h-full w-full object-contain" />
	</div>
	<div class="container mx-auto grid gap-y-10 px-5 py-12 lg:grid-cols-2 lg:p-20">
		<div class="max-w-[582px] space-y-3">
			<Section variant="primary">Company History</Section>
			<h2 class="font-faculty-glyphic text-4xl leading-[115%] lg:text-5xl">
				Four Decades of Sustainable Land Development
			</h2>
		</div>
		<div class="space-y-5 leading-[30px] lg:text-xl">
			<p>
				Founded in 1981, our company embarked on its journey as a palm estate contractor, partnering
				with leading organizations such as SIPEF, PERKEBUNAN NUSANTARA, and LONSUM. In the early
				stages of our development during the 1980s, we quickly distinguished ourselves within the
				industry by embracing innovative and sustainable practices. Recognizing the importance of
				environmental stewardship, we were among the first contractors to implement the zero burning
				method, also known as chipping, for replanting. This groundbreaking approach not only
				minimized environmental impact but also set a new benchmark for sustainable agriculture.
			</p>
			<p>
				Our commitment to sustainability and innovation has been a cornerstone of our operations,
				allowing us to build a reputation for excellence and reliability in the palm estate sector.
				Over the decades, we have continued to evolve, expanding our expertise and services to meet
				the growing demands of the industry, while maintaining our dedication to environmentally
				responsible practices.
			</p>
		</div>
	</div>
</section>
