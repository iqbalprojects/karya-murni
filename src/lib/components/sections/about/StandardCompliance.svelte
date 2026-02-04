<script>
	import smk3Image from '$lib/assets/images/smk3.png';
	import isoCertifiedImage from '$lib/assets/images/iso-certified.png';
</script>

<section class="container mx-auto flex items-center justify-between p-20">
	<h2 class="max-w-[511px] font-faculty-glyphic text-5xl leading-[115%]">
		Industry Standards & Compliance
	</h2>
	<div class="flex items-center gap-x-[60px]">
		<div class="space-y-6 text-center">
			<img src={smk3Image} alt="SMK3 Certification" width="133" height="152" />
			<p>SMK3 PP 50/2012</p>
		</div>
		<div class="space-y-6 text-center">
			<img src={isoCertifiedImage} alt="ISO Certified" width="152" height="152" />
			<p>ISO Certified</p>
		</div>
	</div>
</section>
