import Swiper from "swiper";
  import type { SwiperOptions } from "swiper/types";

  // Wait for the DOM to be ready before initializing
  document.addEventListener("DOMContentLoaded", () => {
    const initializeSwipers = () => {
      // Select all swiper containers
      const swiperContainers = document.querySelectorAll(".swiper");

      swiperContainers.forEach((container) => {
        // Destroy any existing Swiper instance
        const existingSwiper = (container as any).swiper;
        if (existingSwiper) existingSwiper.destroy(true, true);

        // Check screen size and apply appropriate configuration

        const swiperConfig = {
          slidesPerView: "auto",
          spaceBetween: 10, // Adjust spacing for smaller screens
          grabCursor: true,
          loop: true,
          centeredSlides: true,
          keyboard: true,
        };

        // Initialize Swiper for this specific container
        const swiperInstance = new Swiper(
          container as HTMLElement,
          swiperConfig as SwiperOptions,
        );

        // Find navigation buttons specific to this Swiper
        const prevButton = container
          .closest(".swiper-container-wrapper")
          ?.querySelector(".swiper-prev");
        const nextButton = container
          .closest(".swiper-container-wrapper")
          ?.querySelector(".swiper-next");

        // Add event listeners to navigation buttons
        if (prevButton) {
          prevButton.addEventListener("click", () => {
            swiperInstance.slidePrev();
          });
        }

        if (nextButton) {
          nextButton.addEventListener("click", () => {
            swiperInstance.slideNext();
          });
        }
      });
    };

    // Initialize Swipers on load
    initializeSwipers();

    // Reinitialize Swipers on window resize
    window.addEventListener("resize", initializeSwipers);
  });