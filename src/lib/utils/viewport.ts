// Correctly type the callback structure with optional properties
type ViewportCallbacks = {
	enter: () => void;
	exit: () => void;
	once: boolean;
};

// Map each element to its callbacks
const elementCallbacks = new WeakMap<Element, ViewportCallbacks>();

// Store shared observers keyed by their serialized options
const observers = new Map<string, IntersectionObserver>();

// Track how many elements are using each observer to garbage collect them
const observerRefCount = new Map<IntersectionObserver, number>();

function getObserver(options: IntersectionObserverInit = {}): IntersectionObserver {
	// Create a stable key for the options.
	// We sort keys to ensure { threshold: 0.1, rootMargin: '0px' } is same as { rootMargin: '0px', threshold: 0.1 }
	const optionsKey = JSON.stringify(
		Object.keys(options)
			.sort()
			.reduce(
				(acc, key) => {
					// @ts-ignore
					acc[key] = options[key];
					return acc;
				},
				{} as Record<string, any>
			)
	);

	let observer = observers.get(optionsKey);

	if (!observer) {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const callbacks = elementCallbacks.get(entry.target);
				if (!callbacks) return;

				if (entry.isIntersecting) {
					callbacks.enter();
					if (callbacks.once) {
						// Stop observing if run once
						observer?.unobserve(entry.target);
						elementCallbacks.delete(entry.target);
						// Decrement ref count since we unobserved
						removeObserverRef(observer!);
					}
				} else {
					callbacks.exit();
				}
			});
		}, options);

		observers.set(optionsKey, observer);
		observerRefCount.set(observer, 0);
	}

	return observer;
}

function addObserverRef(observer: IntersectionObserver) {
	const count = observerRefCount.get(observer) || 0;
	observerRefCount.set(observer, count + 1);
}

function removeObserverRef(observer: IntersectionObserver) {
	const count = observerRefCount.get(observer) || 0;
	if (count <= 1) {
		// No more elements observed, disconnect and cleanup
		observer.disconnect();
		observerRefCount.delete(observer);

		// Find and delete from observers map (inefficient search but rare operation)
		for (const [key, obs] of observers.entries()) {
			if (obs === observer) {
				observers.delete(key);
				break;
			}
		}
	} else {
		observerRefCount.set(observer, count - 1);
	}
}

export const viewport = (
	element: HTMLElement,
	options?: IntersectionObserverInit & {
		once?: boolean;
		onEnter?: () => void;
		onExit?: () => void;
	}
) => {
	if (!element) throw new Error('Element is required for inView');

	const { once = false, onEnter, onExit, ...observerOptions } = options || {};

	// Set default threshold if not provided, to match previous behavior
	if (observerOptions.threshold === undefined) {
		observerOptions.threshold = 0.1;
	}

	const callbacks: ViewportCallbacks = {
		enter: () => {
			if (onEnter) onEnter();
			element.dispatchEvent(new CustomEvent('enterViewport'));
		},
		exit: () => {
			if (onExit) onExit();
			element.dispatchEvent(new CustomEvent('exitViewport'));
		},
		once
	};

	elementCallbacks.set(element, callbacks);

	const observer = getObserver(observerOptions);
	observer.observe(element);
	addObserverRef(observer);

	return {
		destroy() {
			observer.unobserve(element);
			elementCallbacks.delete(element);
			removeObserverRef(observer);
		}
	};
};
