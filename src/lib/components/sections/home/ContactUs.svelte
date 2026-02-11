<script>
	import Button from '$lib/components/ui/Button.svelte';
	import contactUsBackground from '$lib/assets/images/contact-us-background.webp';
	import Animate from '$lib/components/ui/Animate.svelte';
</script>

<section
	class="relative grid aspect-square place-content-center gap-y-7 bg-cover bg-center bg-no-repeat px-5 text-center before:absolute before:inset-0 before:bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(180deg,rgba(0,0,0,0)_26.04%,rgba(0,0,0,0.7)_74.22%)] lg:aspect-3/1 lg:gap-y-9 lg:p-20"
	style="background-image: url({contactUsBackground})"
>
	<div class="relative z-10 max-w-[738px] space-y-3 text-white lg:space-y-5">
		<Animate variant="top">
			<h2 class="font-faculty-glyphic text-4xl lg:text-5xl">Ready to Start Your Project?</h2>
		</Animate>
		<Animate variant="fade" duration={2}>
			<p class="font-medium lg:text-xl">
				Get in touch with our team to discuss your requirements and explore how we can support your
				estate development needs
			</p>
		</Animate>
	</div>
	<Animate variant="bottom">
		<div class="relative z-10 space-x-3">
			<Button href="tel:+1234567890" variant="secondary">Contact us</Button>
			<Button href="mailto:info@karyamurni.com" class="bg-white/10 text-white">Request quote</Button
			>
		</div>
	</Animate>
</section>
