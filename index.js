/* eslint-env browser */
(() => {
	const isDev = ['localhost', '127.0.0.1'].includes(location.hostname);

	// Helper
	const dom = {
		select: document.querySelector.bind(document),
		slectAll: document.querySelectorAll.bind(document)
	};

	function injectScript(src, cb) {
		const script = document.createElement('script');
		script.src = src;
		script.addEventListener('load', cb);
		document.head.appendChild(script);
	}

	// Unicorn easteregg
	dom.select('#unicorn-btn').addEventListener('click', event => {
		event.preventDefault();
		injectScript('cornify.js', () => {
			cornify();
			cornify();
			setInterval(cornify, 1000);
		});
	});

	// Smooth anchor scroll
	new AnchorScroller();

	{
		function hideScrollHint() {
			if (window.scrollY > 100) {
				document.removeEventListener('scroll', hideScrollHint);
				dom.select('#scroll-hint').classList.add('hidden');
			}
		}

		document.addEventListener('scroll', hideScrollHint, {passive: true});
	}
})();
