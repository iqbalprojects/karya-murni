<script>
	import Button from '$lib/components/ui/Button.svelte';
	import contactUsBackground from '$lib/assets/images/contact-us-background.jpeg';
</script>

<section
	class="grid aspect-3/1 place-content-center gap-y-9 bg-black/50 bg-cover bg-center bg-no-repeat text-center bg-blend-multiply"
	style="background-image: url({contactUsBackground})"
>
	<div class="max-w-[738px] space-y-5 text-white">
		<h2 class="font-faculty-glyphic text-5xl">Ready to Start Your Project?</h2>
		<p class="text-xl font-medium">
			Get in touch with our team to discuss your requirements and explore how we can support your
			estate development needs
		</p>
	</div>
	<div class="space-x-3">
		<Button variant="secondary">Contact us</Button>
		<Button class="bg-white/10 text-white">Request quote</Button>
	</div>
</section>
