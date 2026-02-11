const observerOptions = {
	root: null,
	rootMargin: '0px',
	threshold: 1
};

export const viewport = (element: HTMLElement, options?: IntersectionObserverInit) => {
	if (!element) throw new Error('Element is required for inView');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const enterView = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(enterView));
		});
	}, options);

	observer.observe(element);

	return {
		destroy() {
			observer.unobserve(element);
		}
	};
};
