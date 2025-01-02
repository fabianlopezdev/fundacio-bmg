import Swiper from "swiper";
import type { SwiperOptions } from "swiper/types";

document.addEventListener("DOMContentLoaded", () => {

  const initializeImageContainers = () => {
    const imageContainers: NodeListOf<HTMLElement> = document.querySelectorAll('.image-container');
    let activeContainer: HTMLElement | null = null;

    imageContainers.forEach((container: HTMLElement) => {
      const tapIndicator = container.querySelector('.tap-indicator');

      tapIndicator?.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        
        if (activeContainer && activeContainer !== container) {
          activeContainer.classList.remove('active');
          const prevTapIndicator = activeContainer.querySelector('.tap-indicator');
          if (prevTapIndicator) {
            prevTapIndicator.classList.remove('hidden');
          }
        }
        
        container.classList.add('active');
        tapIndicator.classList.add('hidden');
        activeContainer = container;
      });
    });

    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.tap-indicator') && activeContainer) {
        activeContainer.classList.remove('active');
        const tapIndicator = activeContainer.querySelector('.tap-indicator');
        if (tapIndicator) {
          tapIndicator.classList.remove('hidden');
        }
        activeContainer = null;
      }
    });
  };
  

  // Swiper initialization
  const initializeSwipers = () => {
    const swiperContainers = document.querySelectorAll(".swiper");

    swiperContainers.forEach((container) => {
      const existingSwiper = (container as any).swiper;
      if (existingSwiper) existingSwiper.destroy(true, true);

      const swiperConfig: SwiperOptions = {
        slidesPerView: "auto",
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        keyboard: true,
      };

      const swiperInstance = new Swiper(
        container as HTMLElement,
        swiperConfig
      );

      const wrapper = container.closest(".swiper-container-wrapper");
      const prevButton = wrapper?.querySelector(".swiper-prev");
      const nextButton = wrapper?.querySelector(".swiper-next");

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

  // Initialize Swiper only (image container handling removed)
  initializeSwipers();
  initializeImageContainers();

  // Reinitialize Swipers on window resize
  window.addEventListener("resize", () => {
    initializeSwipers();
    initializeImageContainers();
  });
});