document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.querySelector(".map-container");
  const overlay = document.querySelector(".continent-overlay");
  const mapInstructionsSpecificText = document.querySelector(".map-instructions span") as HTMLElement;

  const closeBtnSelector = ".close-overlay-button";
  const isTouchableDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Update map instructions based on device type
  if (mapInstructionsSpecificText) {


    const instructionText = isTouchableDevice 
        ? "Toca el mapa interactiu per veure més detalls!"
        : "Passa el cursor pel mapa interactiu per veure més detalls!";
    
    mapInstructionsSpecificText.innerText = instructionText;

}

  const continents = [
    "europe",
    "asia",
    "africa",
    "north-america",
    "south-america",
    "oceania",
  ];

  if (!isTouchableDevice) {
    // Desktop hover logic
    const continentsInfoArr = document.querySelectorAll(".continent-info");

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    function animatePosition() {
      const activeInfo = document.querySelector(
        ".continent-info.active",
      ) as HTMLElement;
      if (activeInfo) {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        activeInfo.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      requestAnimationFrame(animatePosition);
    }
    animatePosition();

    document.addEventListener("mousemove", (e) => {
      const activeInfo = document.querySelector(
        ".continent-info.active",
      ) as HTMLElement;
      if (activeInfo) {
        const cursorDistance = 15;
        let left = e.clientX + cursorDistance;
        let top = e.clientY + cursorDistance;

        if (left + 408 > window.innerWidth) {
          left = e.clientX - 428;
        }

        if (top + activeInfo.offsetHeight > window.innerHeight) {
          top = e.clientY - activeInfo.offsetHeight - cursorDistance;
        }

        targetX = left;
        targetY = top;
      }
    });

    if (mapContainer) {
      continents.forEach((continent) => {
        const group = mapContainer.querySelector(`g.${continent}`);
        const continentInfoPopup = document.querySelector(
          `.continent-info[data-continent="${continent}"]`,
        ) as HTMLElement;

        if (group && continentInfoPopup) {
          group.addEventListener("mouseenter", () => {
            continentsInfoArr.forEach((info) => {
              (info as HTMLElement).style.opacity = "0";
              info.classList.remove("active");
            });

            continentInfoPopup.style.opacity = "1";
            continentInfoPopup.style.pointerEvents = "none";
            continentInfoPopup.classList.add("active");

            const rect = group.getBoundingClientRect();
            currentX = rect.left;
            currentY = rect.top;
            targetX = currentX;
            targetY = currentY;
          });

          group.addEventListener("mouseleave", () => {
            continentInfoPopup.style.opacity = "0";
            continentInfoPopup.classList.remove("active");
          });
        }
      });
    }
  } else {
    // Mobile logic: tap to show full overlay
    if (mapContainer) {
      continents.forEach((continent) => {
        const group = mapContainer.querySelector(`g.${continent}`);
        if (group) {
          group.addEventListener("click", () => {
            // Find the corresponding .continent-overlay-data
            const overlayData = document.querySelector(
              `.continent-overlay-data[data-continent="${continent}"]`,
            );

            if (overlayData && overlay) {
              // Clear existing overlay content
              overlay.innerHTML = "";
              // Clone the overlay data content into the overlay
              const clone = overlayData.cloneNode(true) as HTMLElement;
              clone.style.display = ""; // make sure it's visible
              overlay.appendChild(clone);

              // Clone the <g> of the continent into the overlay's SVG
              const overlayMapSvg = overlay.querySelector(
                ".continent-overlay-map",
              );

              const originalContinentG = mapContainer.querySelector(
                `g.${continent}`,
              );
              if (originalContinentG && overlayMapSvg) {
                overlayMapSvg.classList.add("world-map");
                const clonedG = originalContinentG.cloneNode(true);
                overlayMapSvg.appendChild(clonedG);

                requestAnimationFrame(() => {
                  const bbox = (clonedG as SVGGraphicsElement).getBBox();
                  overlayMapSvg.setAttribute(
                    "viewBox",
                    `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`,
                  );
                });
              }

              overlay.classList.add("active");

              // Add close button functionality
              const closeBtn = overlay.querySelector(closeBtnSelector);
              if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                  overlay.classList.remove("active");
                });
              }
            }
          });
        }
      });
    }
  }
});
