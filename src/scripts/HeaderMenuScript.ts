// headerMenuScript.ts

// Utility function for slugifying text
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

// Scroll position management
let scrollPosition = 0;
let lastScroll = window.scrollY;

// Throttle function for performance
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return (...args: any[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Scroll locking utilities
function lockScroll() {
  scrollPosition = window.scrollY;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
}

function unlockScroll() {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
}

// Header scroll handling
const handleScroll = () => {
  const currentScroll = window.scrollY;
  const headerContainer = document.querySelector('.header-container');
  
  if (!headerContainer) return;

  // Don't hide header if menu is open
  const isMenuOpen = document.getElementById('menu')?.classList.contains('active');
  if (isMenuOpen) return;

  if (currentScroll > lastScroll && currentScroll > 100) {
    headerContainer.classList.add('header--hidden');
  } else {
    headerContainer.classList.remove('header--hidden');
  }
  
  lastScroll = currentScroll;
};

// Menu functionality
function initializeMenu() {
  const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
  const menu = document.getElementById('menu') as HTMLElement;
  const backdrop = document.getElementById('backdrop') as HTMLElement;
  const headerContainer = document.querySelector('.header-container');

  if (menuToggle && menu && backdrop) {
    function openMenu() {
      menuToggle.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      backdrop.setAttribute('aria-hidden', 'false');
      menu.classList.add('active');
      backdrop.classList.add('active');
      menuToggle.classList.add('active');
      headerContainer?.classList.remove('header--hidden'); // Ensure header is visible when menu opens
      lockScroll();
    }

    function closeMenu() {
      menuToggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
      menu.classList.remove('active');
      backdrop.classList.remove('active');
      menuToggle.classList.remove('active');
      unlockScroll();
      menuToggle.focus();
    }

    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      isExpanded ? closeMenu() : openMenu();
    });

    backdrop.addEventListener('click', closeMenu);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
      }
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize details toggle functionality
  const details = document.querySelectorAll<HTMLDetailsElement>('details');
  details.forEach((detail) => {
    detail.addEventListener('toggle', () => {
      // Empty function since we don't need to add/remove anchors anymore
    });
  });

  // Initialize menu toggle functionality
  initializeMenu();

  // Initialize scroll handling
  window.addEventListener('scroll', throttle(handleScroll, 100));
});