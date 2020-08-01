// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
      let tocLinks = document.querySelector(`.page-toc li a[href="#${id}"]`)
      if (!tocLinks) {return}
			if (entry.intersectionRatio > 0) {
          tocLinks.parentElement.classList.add('active')
          if (window.innerWidth > 670) {
            setTimeout(() => {
              document.querySelector(`.page-toc li a[href="#${id}"]`).scrollIntoView({block: "center", behavior: "smooth"});
            },200)

        }
			} else {
				document.querySelector(`.page-toc li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('h2[id], h3[id], h4[id], h5[id]').forEach((heading) => {
		observer.observe(heading);
	});

});


// rollup top bar


document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scrollupstart', onScrollUpStart, false);
    window.addEventListener('scrolldownstart', onScrollDownStart, false);
 });

 window.addEventListener('beforeunload', (event) => {
   window.removeEventListener('scrollupstart', onScrollUpStart, true);
   window.removeEventListener('scrolldownstart', onScrollUpStart, true);
 })

function padHeader(up) {
	let tg = document.getElementsByClassName('list-toggle')
	for (let el of tg) {
		console.log(el)
		if (up) {
			el.classList.add('up')
		} else {
			el.classList.remove('up')
		}
	}
}

 function onScrollUpStart() {
   		document.querySelector('#top-bar').classList.remove("hidden");
			padHeader(true)
 }

 function onScrollDownStart() {
       document.querySelector('#top-bar').classList.add("hidden");
			 padHeader(false)
 }


// https://github.com/vistromwebb/skrallan


(function () {
	'use strict';

	var currentYDirection,
		currentXDirection,
		currentYOffset,
		currentXOffset,
		previousYDirection,
		previousXDirection,
		previousYOffset = window.pageYOffset,
		previousXOffset = window.pageXOffset,
		events = {},
		eventNames = [
			'scrolldown',
			'scrollup',
			'scrollleft',
			'scrollright',
			'scrolldownstart',
			'scrollupstart',
			'scrollleftstart',
			'scrollrightstart'
		];

	// Initialize events
	try {
		for (var i = 0; i < eventNames.length; i++) {
			events[eventNames[i]] = new Event(eventNames[i]);
		}
	} catch (e) {
		// No browser support for Event constructor, use
		// the old-fashioned way :(

		for (var i = 0; i < eventNames.length; i++) {
			events[eventNames[i]] = document.createEvent('Event');
			events[eventNames[i]].initEvent(eventNames[i], true, true);
		}
	}

	/**
	 * Trigger additional scroll events.
	 *
	 * @param Event  event  The original scroll event
	 */
	function onScroll(event) {
		currentYOffset = window.pageYOffset;
		currentXOffset = window.pageXOffset;

		// Determine the current scroll direction (Y-axis)
		if (currentYOffset < previousYOffset) {
			currentYDirection = 'up';
		} else if (currentYOffset > previousYOffset) {
			currentYDirection = 'down';
		} else {
			currentYDirection = undefined;
		}

		// Determine the current scroll direction (X-axis)
		if (currentXOffset < previousXOffset) {
			currentXDirection = 'left';
		} else if (currentXOffset > previousXOffset) {
			currentXDirection = 'right';
		} else {
			currentXDirection = undefined;
		}

		// Has the scroll direction changed since the last scroll? (Y-axis)
		if (currentYDirection !== previousYDirection) {
			if (currentYDirection === 'up') {
				window.dispatchEvent(events['scrollupstart']);
			} else if (currentYDirection === 'down') {
				window.dispatchEvent(events['scrolldownstart']);
			}
		}

		// Has the scroll direction changed since the last scroll? (X-axis)
		if (currentXDirection !== previousXDirection) {
			if (currentXDirection === 'left') {
				window.dispatchEvent(events['scrollleftstart']);
			} else if (currentXDirection === 'right') {
				window.dispatchEvent(events['scrollrightstart']);
			}
		}

		if (currentYDirection === 'up') {
			window.dispatchEvent(events['scrollup']);
		} else if (currentYDirection === 'down') {
			window.dispatchEvent(events['scrolldown']);
		}

		if (currentXDirection === 'left') {
			window.dispatchEvent(events['scrollleft']);
		} else if (currentXDirection === 'right') {
			window.dispatchEvent(events['scrollright']);
		}

		previousYDirection = currentYDirection;
		previousXDirection = currentXDirection;
		previousYOffset = currentYOffset;
		previousXOffset = currentXOffset;
	}

	window.addEventListener('scroll', onScroll, false);
})();
