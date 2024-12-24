// Throttle function
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// Function to log scroll position
function logScrollPosition() {
    console.log('Scroll position:', window.scrollY);
}

// Throttle the logScrollPosition function to run at most every 100 milliseconds
const throttledLogScrollPosition = throttle(logScrollPosition, 100);

// Attach the throttled function to the scroll event
window.addEventListener('scroll', throttledLogScrollPosition);