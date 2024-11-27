document.addEventListener("DOMContentLoaded", () => {
  // Disable scroll restoration
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Scroll to top of the page so that if page is reloaded in
  // other than hero section, hero don´t mess up with reloading
  window.scrollTo(0, 0);

  const heroSection = document.getElementById("hero-section");
  const animationDuration = 2500; // Total animation duration in ms

  // Disable scrolling
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Re-enable scrolling
  function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  // Disable scroll immediately when hero is doing its animation
  disableScroll();

  // Re-enable scroll after animation completes
  setTimeout(enableScroll, animationDuration);

  const heroArrow = document.querySelector(".hero-arrow");

  heroArrow?.addEventListener("click", (e) => {
    e.preventDefault();
    const infoSection = document.querySelector("#info");

    if (infoSection) {
      // Calculate the scroll threshold (height of hero section)
      const heroSectionHeight = heroSection?.offsetHeight;

      // Scroll to the target section, starting from below the hero section
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
    // Explicitly cast to HTMLElement
    const htmlElement = element as HTMLElement;
    if (isChrome && !isMobile()) return;
    console.log("jiopioiiiioooyayaay");
    console.log("isChrome", isChrome);
      console.log("istouch", !isMobile());
      
    if (!htmlElement || !(htmlElement instanceof HTMLElement)) {
      console.error("Invalid element passed to animateHeight");
      return undefined;
    }

    // Get the delay from the CSS custom property
    const computedStyle = window.getComputedStyle(htmlElement);
    const delay = computedStyle.getPropertyValue("--delay")
      ? parseInt(computedStyle.getPropertyValue("--delay"))
      : 0;

    console.log("Animate height function called", `Delay: ${delay}ms`);

    // Prevent multiple simultaneous animations
    if (htmlElement.classList.contains("animating")) return undefined;

    // Get the current and natural height
    const startHeight = htmlElement.offsetHeight;
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.overflow = "hidden";
    htmlElement.classList.add("animating");

    // Measure the natural height
    htmlElement.style.height = "auto";
    const endHeight = htmlElement.offsetHeight;

    // Reset to start height immediately
    htmlElement.style.height = `${startHeight}px`;

    // Animate using Web Animations API (most cross-browser compatible)
    const animation = htmlElement.animate(
      [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
      {
        duration: duration,
        delay: delay, // Add the delay from CSS
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

  // Select hero text and trigger animation
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    console.log("Hero text found");

    // Trigger animation after a short delay to ensure other animations complete
    setTimeout(() => {
      animateHeight(heroText);
    }, 2500); // Match the animationDuration from your existing code
  } else {
    console.error("Hero text not found");
  }
});
