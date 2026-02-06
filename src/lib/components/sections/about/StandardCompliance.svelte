<script>
	import smk3Image from '$lib/assets/images/smk3.png';
	import isoCertifiedImage from '$lib/assets/images/iso-certified.png';
</script>

<section
	class="container mx-auto flex flex-wrap items-center justify-between gap-y-10 px-5 py-12 lg:p-20"
>
	<h2
		class="max-w-[511px] text-center font-faculty-glyphic text-4xl leading-[115%] lg:text-start lg:text-5xl"
	>
		Industry Standards & Compliance
	</h2>
	<div class="flex w-full items-center justify-center lg:w-fit lg:gap-x-[60px]">
		<div class="flex w-full flex-1 flex-col items-center space-y-6 lg:w-fit lg:flex-none">
			<img src={smk3Image} alt="SMK3 Certification" width="133" height="152" />
			<p>SMK3 PP 50/2012</p>
		</div>
		<div class="flex w-full flex-1 flex-col items-center space-y-6 lg:w-fit lg:flex-none">
			<img src={isoCertifiedImage} alt="ISO Certified" width="152" height="152" />
			<p>ISO Certified</p>
		</div>
	</div>
</section>
