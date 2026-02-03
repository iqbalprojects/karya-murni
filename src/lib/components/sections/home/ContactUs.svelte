<script>
	import Button from '$lib/components/ui/Button.svelte';
	import contactUsBackground from '$lib/assets/images/contact-us-background.jpeg';
</script>

<section
	class="relative grid aspect-3/1 place-content-center gap-y-9 bg-cover bg-center bg-no-repeat text-center before:absolute before:inset-0 before:bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(180deg,rgba(0,0,0,0)_26.04%,rgba(0,0,0,0.7)_74.22%)]"
	style="background-image: url({contactUsBackground})"
>
	<div class="relative z-10 max-w-[738px] space-y-5 text-white">
		<h2 class="font-faculty-glyphic text-5xl">Ready to Start Your Project?</h2>
		<p class="text-xl font-medium">
			Get in touch with our team to discuss your requirements and explore how we can support your
			estate development needs
		</p>
	</div>
	<div class="relative z-10 space-x-3">
		<Button variant="secondary">Contact us</Button>
		<Button class="bg-white/10 text-white">Request quote</Button>
	</div>
</section>
