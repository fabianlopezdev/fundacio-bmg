document.addEventListener("DOMContentLoaded", () => {
  // Get reference to main element and set initial z-index immediately
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.style.position = 'relative';
    mainElement.style.zIndex = '1000';
  }

  // Initialize animation states for each word in the title
  const textElements = document.querySelectorAll('.text');
  textElements.forEach(el => {
    el.setAttribute('data-animate', '');
    requestAnimationFrame(() => {
      el.classList.add('animated');
    });
  });

  // Disable browser's automatic scroll position restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Reset scroll position to top of page
  window.scrollTo(0, 0);

  // Get reference to hero section
  const hero = document.getElementById("hero");

  // Calculate total animation delay based on CSS custom property
  const computedStyle = hero && getComputedStyle(hero);
  const wordsAnimationDelay = computedStyle
    ? parseInt(computedStyle.getPropertyValue("--total-delay"))
    : 0;

  // Scroll control functions
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  // Disable scroll during initial animations
  disableScroll();

  // Calculate total animation time including all delays
  const totalAnimationTime = wordsAnimationDelay + 800; // words delay + height animation + buffer

  // Enable scroll and reset z-index after all animations complete
  setTimeout(() => {
    enableScroll();
    if (mainElement) {
      mainElement.style.zIndex = '0';
    }
  }, totalAnimationTime);

  // Handle smooth scrolling for section navigation
  const sectionLinks = document.querySelectorAll(".section-link");
  sectionLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget  as HTMLAnchorElement;;
      const sectionId = target.getAttribute("href");
      const section = sectionId ? document.querySelector(sectionId) : null;

      if (section) {
        const heroHeight = hero?.offsetHeight;
        window.scrollTo({
          top: heroHeight,
          behavior: "smooth",
        });
      }
    });
  });

  // Height animation function for hero text
  function animateHeight(
    element: HTMLElement,
    duration = 600,
  ) {
    // Validate element
    const htmlElement = element;
    if (!htmlElement || !(htmlElement instanceof HTMLElement)) {
      console.error("Invalid element passed to animateHeight");
      return undefined;
    }
  
    // Prevent multiple simultaneous animations
    if (htmlElement.classList.contains("animating")) return undefined;
  
    // Force a reflow to ensure accurate initial measurements
    void htmlElement.offsetHeight;
  
    // Measure initial state
    const startHeight = htmlElement.offsetHeight;
    const startMargin = parseFloat(getComputedStyle(htmlElement).marginTop);
  
    // Store original styles for restoration
    const originalStyles = {
      height: htmlElement.style.height,
      marginTop: htmlElement.style.marginTop,
      overflow: htmlElement.style.overflow,
      transition: htmlElement.style.transition
    };
  
    // Set initial animation state
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.marginTop = `${startMargin}px`;
    htmlElement.style.overflow = "hidden";
    htmlElement.style.transition = 'none';
    htmlElement.classList.add("animating");
  
    // Force reflow before measuring final height
    void htmlElement.offsetHeight;
  
    // Measure final height
    htmlElement.style.height = 'auto';
    htmlElement.style.marginTop = '0px';
    const endHeight = htmlElement.offsetHeight;
  
    // Reset to start position
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.marginTop = `${startMargin}px`;
  
    // Force final reflow before animation
    void htmlElement.offsetHeight;
  
    // Create and run the height animation
    const animation = htmlElement.animate(
      [
        { 
          height: `${startHeight}px`,
          marginTop: `${startMargin}px`,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        {
          height: `${endHeight}px`,
          marginTop: '0px',
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      ],
      {
        duration: duration,
        fill: "forwards",
      }
    );
  
    // Clean up after animation completes
    animation.onfinish = () => {
      // Restore original styles
      htmlElement.style.height = originalStyles.height;
      htmlElement.style.marginTop = originalStyles.marginTop;
      htmlElement.style.overflow = originalStyles.overflow;
      htmlElement.style.transition = originalStyles.transition;
      
      // Set final values
      htmlElement.style.height = 'auto';
      htmlElement.style.marginTop = '0px';
      
      htmlElement.classList.remove("animating");
    };
  
    return animation;
  }

  // Start hero text height animation after words animation completes
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    setTimeout(() => {
      animateHeight(heroText as HTMLElement);
    }, wordsAnimationDelay + 200);
  }
});