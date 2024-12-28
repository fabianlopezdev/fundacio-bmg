// Get configuration from script tag
const script = document.currentScript as HTMLScriptElement | null;
const targetSelector = script?.getAttribute('data-target-class') || '.default-class';
const threshold = parseFloat(script?.getAttribute('data-threshold') || '0.5');

// Initialize Intersection Observer
const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: threshold
};

const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class when element becomes visible
            entry.target.classList.add('animate');
            // Optionally, stop observing after animation
            observer.unobserve(entry.target);
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Start observing all elements with the specified class
document.addEventListener('DOMContentLoaded', () => {
    // Handle both ID and class selectors
    const selectorType = targetSelector.startsWith('#') ? 'id' : 'class';
    const selectorValue = targetSelector.slice(1); // Remove . or # from the selector
    
    // Select all elements with the target selector
    const elements = document.querySelectorAll<HTMLElement>(targetSelector);
    
    // Create CSS for the animation - handle both ID and class cases
    const styleSheet = document.createElement('style');
    const cssText = selectorType === 'id' 
        ? `
            #${selectorValue}.animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `
        : `
            .${selectorValue}.animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
    styleSheet.textContent = cssText;
    document.head.appendChild(styleSheet);
    
    // Observe each element
    elements.forEach(element => {
        // Initially hide the element
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        // Start observing
        observer.observe(element);
    });
});