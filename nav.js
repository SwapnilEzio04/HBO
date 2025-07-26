  const toggleBtn = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  let isOpen = false;

  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileMenu.classList.toggle('hidden');

    // Swap hamburger ↔ close (X)
    if (isOpen) {
      menuIcon.innerHTML = `
        <path d="M6 18L18 6M6 6l12 12" />
      `;
    } else {
      menuIcon.innerHTML = `
        <path d="M4 6h16M4 12h16M4 18h16" />
      `;
    }
  });