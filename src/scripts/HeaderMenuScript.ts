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

function createAnchorWithIcon(): HTMLAnchorElement {
  const anchor = document.createElement("a");
  anchor.className = "open-link";
  anchor.innerHTML = `
    <svg 
      width="0.8em" 
      height="0.8em" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="black" 
      stroke-width="2"
      stroke-linecap="round" 
      stroke-linejoin="round"
      class="icon-link"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `;
  return anchor;
}

function handleDetailsToggle(detail: HTMLDetailsElement) {
  const summary = detail.querySelector("summary");
  if (!summary) return;

  const existingAnchor = summary.querySelector(".open-link");

  if (detail.open && !existingAnchor) {
    const text = summary.textContent?.trim() || "";
    const slug = slugify(text);
    const anchor = createAnchorWithIcon();
    anchor.href = `/${slug}`;
    summary.appendChild(anchor);
  } else if (!detail.open && existingAnchor) {
    existingAnchor.remove();
  }
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
    }

    function closeMenu() {
      menuToggle.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
      backdrop.setAttribute("aria-hidden", "true");
      menu.classList.remove("active");
      backdrop.classList.remove("active");
      menuToggle.classList.remove("active");
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
