document.addEventListener("DOMContentLoaded", () => {
  // Initialize animation states
  const textElements = document.querySelectorAll('.text');
  textElements.forEach(el => {
    // Add the data-animate attribute to trigger CSS visibility
    el.setAttribute('data-animate', '');
    // Add animated class with a slight delay to ensure initial state is rendered
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

  // Get the total animation delay from CSS variable
  const computedStyle = hero && getComputedStyle(hero);
  const totalDelay =
    (computedStyle &&
      parseInt(computedStyle.getPropertyValue("--total-delay"))) ||
    1500;

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

  // Enable scroll after all animations complete
  setTimeout(enableScroll, totalDelay);

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

  function isMobile() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }

  const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

  function animateHeight(
    element: Element | HTMLElement,
    duration: number = 600,
  ): Animation | undefined {
    // Skip animation for Chrome desktop
    if (isChrome && !isMobile()) return;

    const htmlElement = element as HTMLElement;
    if (!htmlElement || !(htmlElement instanceof HTMLElement)) {
      console.error("Invalid element passed to animateHeight");
      return undefined;
    }

    // Prevent multiple animations
    if (htmlElement.classList.contains("animating")) return undefined;

    // Set up animation
    const startHeight = htmlElement.offsetHeight;
    htmlElement.style.height = `${startHeight}px`;
    htmlElement.style.overflow = "hidden";
    htmlElement.classList.add("animating");

    // Get target height
    htmlElement.style.height = "auto";
    const endHeight = htmlElement.offsetHeight;
    htmlElement.style.height = `${startHeight}px`;

    // Create animation
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

  // Animate hero text height
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    setTimeout(() => {
      animateHeight(heroText);
    }, totalDelay);
  }
});