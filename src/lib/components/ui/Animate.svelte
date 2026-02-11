<script>
	import { viewport } from '$lib/utils/viewport';

	let inView = $state(false);
	let {
		variant = 'fade',
		duration = 1,
		delay = 0,
		once = false,
		children,
		class: className = ''
	} = $props();

	function handleEnterViewport() {
		inView = true;
	}

	function handleExitViewport() {
		if (!once) inView = false;
	}
</script>

<div
	use:viewport={{ once, onEnter: handleEnterViewport, onExit: handleExitViewport }}
	class="animate-wrapper {className} {inView ? `enter-${variant}` : `exit-${variant}`}"
	class:enter-animation={inView}
	class:exit-animation={!inView}
	style="--duration: {duration}s; --delay: {delay}s"
>
	{@render children?.()}
</div>

<style>
	/* Base styles */
	.animate-wrapper {
		/* Enforce GPU layer creation only when needed, but here we just ensure basic box model */
		box-sizing: border-box;
	}

	/* Enter animation - visible state */
	.enter-animation {
		opacity: 1;
		visibility: visible;
		transition-duration: var(--duration);
		transition-delay: var(--delay);
		transform: scale(1) translateX(0) translateY(0);
		transition-property: opacity, transform, visibility;
		transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth easing */
	}

	/* Exit animation - hidden state */
	.exit-animation {
		opacity: 0;
		visibility: hidden;
		transition-duration: 0.5s;
		transition-delay: 0.2s;
		pointer-events: none;
		transition-property: opacity, transform, visibility;
	}

	/* Exit transforms - original values preserved */
	.exit-top {
		transform: translateY(-50px); /* Reduced distance for smoother feel */
	}

	.exit-bottom {
		transform: translateY(50px);
	}

	.exit-left {
		transform: translateX(-50px);
	}

	.exit-right {
		transform: translateX(50px);
	}

	.exit-scale {
		transform: scale(0.9); /* Subtle scale is better than 0 */
	}

	.exit-fade {
		transform: none;
	}

	/* Respect user's motion preferences */
	@media (prefers-reduced-motion: reduce) {
		.animate-wrapper {
			transition: none !important;
		}

		.enter-animation,
		.exit-animation {
			opacity: 1 !important;
			transform: none !important;
			pointer-events: auto !important;
		}
	}

	/* Fallback for scripting disabled */
	@media (scripting: none) {
		.exit-animation {
			opacity: 1;
			transform: none;
			pointer-events: auto;
		}
	}
</style>
