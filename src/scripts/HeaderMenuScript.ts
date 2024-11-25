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