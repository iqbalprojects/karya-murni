<script>
	import { viewport } from '$lib/utils/viewport';

	let inView = $state(false);
	let { variant = 'fade', duration = 1, delay = 0, children, class: className = '' } = $props();
	function handleEnterViewport() {
		inView = true;
	}
	function handleExitViewport() {
		inView = false;
	}
</script>

<div
	use:viewport
	class={className}
	onenterViewport={handleEnterViewport}
	onexitViewport={handleExitViewport}
	style="--duration: {duration}s; --delay: {delay}s"
>
	<div
		class={inView ? `enter-${variant}` : `exit-${variant}`}
		class:enter-animation={inView}
		class:exit-animation={!inView}
	>
		{@render children?.()}
	</div>
</div>

<style>
	.enter-animation {
		opacity: 1;
		transition-duration: var(--duration);
		transition-delay: var(--delay);
		transform: scale(1) translateX(0) translateY(0);
	}
	.exit-animation {
		opacity: 0;
		transition-duration: 0.5;
		transition-delay: 0.2s;
		pointer-events: none;
	}
	.exit-top {
		transform: translateY(-200px);
	}
	.exit-bottom {
		transform: translateY(100px);
	}
	.exit-left {
		transform: translateX(-200px);
	}
	.exit-right {
		transform: translateX(200px);
	}
	.exit-scale {
		transform: scale(0);
	}
	@media (scripting: none) {
		.exit-animation {
			opacity: 1;
			transform: none;
			pointer-events: auto;
		}
	}
</style>
