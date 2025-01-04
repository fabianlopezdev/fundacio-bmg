document.addEventListener("DOMContentLoaded", () => {
  // Initialize animation states
  const textElements = document.querySelectorAll('.text');
  textElements.forEach(el => {
    el.setAttribute('data-animate', '');
    requestAnimationFrame(() => {
      el.classList.add('animated');
    });
  });

  // Disable scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Scroll to top of the page
  window.scrollTo(0, 0);

  const hero = document.getElementById("hero");

  // Get the total animation delay for words
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

  // Disable scroll during animation
  disableScroll();

  // Enable scroll after all animations complete (words + height animation)
  setTimeout(enableScroll, wordsAnimationDelay + 600); // 600ms is the height animation duration

  // Handle section navigation if present
  const sectionLinks = document.querySelectorAll(".section-link");
  sectionLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
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

  // function isMobile() {
  //   return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  // }

  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

  function animateHeight(
    element: Element | HTMLElement,
    duration: number = 600,
  ): Animation | undefined {
    // Skip animation for Chrome desktop
    // if (isChrome && !isMobile()) return;
  
    const htmlElement = element as HTMLElement;
    if (!htmlElement || !(htmlElement instanceof HTMLElement)) {
      console.error("Invalid element passed to animateHeight");
      return undefined;
    }
  
    // Prevent multiple animations
    if (htmlElement.classList.contains("animating")) return undefined;
  
    // Force a reflow to ensure accurate initial measurements
    void htmlElement.offsetHeight;
  
    // Measure initial state
    const startHeight = htmlElement.offsetHeight;
    const startMargin = parseFloat(getComputedStyle(htmlElement).marginTop);
  
    // Store original styles
    const originalStyles = {
      height: htmlElement.style.height,
      marginTop: htmlElement.style.marginTop,
      overflow: htmlElement.style.overflow,
      transition: htmlElement.style.transition
    };
  
    // Set initial state
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.marginTop = `${startMargin}px`;
    htmlElement.style.overflow = "hidden";
    htmlElement.style.transition = 'none';
    htmlElement.classList.add("animating");
  
    // Force another reflow before measuring final height
    void htmlElement.offsetHeight;
  
    // Temporarily remove transition to measure final height
    htmlElement.style.height = 'auto';
    htmlElement.style.marginTop = '0px';
    const endHeight = htmlElement.offsetHeight;
  
    // Reset to start position
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.marginTop = `${startMargin}px`;
  
    // Force another reflow before starting animation
    void htmlElement.offsetHeight;
  
    // Create animation with more precise keyframes
    const animation = htmlElement.animate(
      [
        { 
          height: `${startHeight}px`,
          marginTop: `${startMargin}px`,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)' // Add easing per keyframe for smoother animation
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
  
    // Clean up after animation
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

  // Animate hero text height after words animation completes
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    setTimeout(() => {
      animateHeight(heroText);
    }, wordsAnimationDelay + 200); // Start height animation right after words finish
  }
});