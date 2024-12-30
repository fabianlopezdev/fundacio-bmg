export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// Store the initial scroll position
let scrollPosition = 0;

function handleDetailsToggle(detail: HTMLDetailsElement) {
  // Empty function since we don't need to add/remove anchors anymore
}

function lockScroll() {
  // Store current scroll position
  scrollPosition = window.scrollY;
  
  // Add styles to body to prevent scroll
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

function unlockScroll() {
  // Remove styles from body
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('width');
  
  // Restore scroll position
  window.scrollTo(0, scrollPosition);
}

function initializeMenu() {
  const menuToggle = document.getElementById(
    "menu-toggle",
  ) as HTMLButtonElement;
  const menu = document.getElementById("menu") as HTMLElement;
  const backdrop = document.getElementById("backdrop") as HTMLElement;

  if (menuToggle && menu && backdrop) {
    function openMenu() {
      menuToggle.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
      backdrop.setAttribute("aria-hidden", "false");
      menu.classList.add("active");
      backdrop.classList.add("active");
      menuToggle.classList.add("active");
      lockScroll(); // Lock scroll when menu opens
    }

    function closeMenu() {
      menuToggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      menu.classList.remove("active");
      backdrop.classList.remove("active");
      menuToggle.classList.remove("active");
      unlockScroll(); // Unlock scroll when menu closes
      menuToggle.focus();
    }

    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      isExpanded ? closeMenu() : openMenu();
    });

    backdrop.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("active")) {
        closeMenu();
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize details toggle functionality
  const details = document.querySelectorAll<HTMLDetailsElement>("details");
  details.forEach((detail) => {
    detail.addEventListener("toggle", () => handleDetailsToggle(detail));
  });

  // Initialize menu toggle functionality
  initializeMenu();
});