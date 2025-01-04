document.addEventListener("DOMContentLoaded", () => {
  // Get reference to main element and set initial z-index immediately
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.style.position = 'relative';
    mainElement.style.zIndex = '1000';
  }

  // Initialize animation states
  const textElements = document.querySelectorAll('.text');
  const heroArrow = document.querySelector('.hero-arrow');

  // Add animated class to text elements with a slight delay
  requestAnimationFrame(() => {
    textElements.forEach(el => {
      el.classList.add('animated');
    });
  });

  // Add animated class to hero arrow
  requestAnimationFrame(() => {
    heroArrow?.classList.add('animated');
  });

  // Disable scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Scroll to top of the page
  window.scrollTo(0, 0);

  const heroSection = document.getElementById("hero-section");
  const animationDuration = 2500; // Total animation duration in ms
  
  // Calculate total animation time including height animation
  const totalAnimationTime = animationDuration + 600; // Main animation + height animation duration

  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  // Disable scroll during animations
  disableScroll();

  // Enable scroll and reset z-index after all animations complete
  setTimeout(() => {
    enableScroll();
    if (mainElement) {
      mainElement.style.zIndex = '0';
    }
  }, totalAnimationTime);

  // Handle hero arrow click for smooth scrolling
  heroArrow?.addEventListener("click", (e) => {
    e.preventDefault();
    const infoSection = document.querySelector("#info");

    if (infoSection) {
      const heroSectionHeight = heroSection?.offsetHeight;
      window.scrollTo({
        top: heroSectionHeight,
        behavior: "smooth",
      });
    }
  });

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }

  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

  function animateHeight(
    element: Element | HTMLElement,
    duration: number = 600,
  ): Animation | undefined {
    const htmlElement = element as HTMLElement;
    if (isChrome && !isMobile()) return;

    if (!htmlElement || !(htmlElement instanceof HTMLElement)) {
      console.error("Invalid element passed to animateHeight");
      return undefined;
    }

    if (htmlElement.classList.contains("animating")) return undefined;

    const startHeight = htmlElement.offsetHeight;
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.overflow = "hidden";
    htmlElement.classList.add("animating");

    htmlElement.style.height = "auto";
    const endHeight = htmlElement.offsetHeight;
    htmlElement.style.height = `${startHeight}px`;

    const animation = htmlElement.animate(
      [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
      {
        duration: duration,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );

    animation.onfinish = () => {
      htmlElement.style.height = "auto";
      htmlElement.style.overflow = "";
      htmlElement.classList.remove("animating");
    };

    return animation;
  }

  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    setTimeout(() => {
      animateHeight(heroText);
    }, animationDuration);
  }
});