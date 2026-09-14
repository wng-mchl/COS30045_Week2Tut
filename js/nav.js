(function () {
  const links = [
    { href: "index.html", label: "Home" },
    { href: "about.html", label: "About Us" },
    { href: "televisions.html", label: "Televisions" },
  ];

  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  const nav = document.createElement("nav");
  nav.className = "navbar";

  const brand = document.createElement("a");
  brand.className = "brand";
  brand.href = "index.html";
  brand.textContent = "My Site";
  nav.appendChild(brand);

  links.forEach(({ href, label }) => {
    const a = document.createElement("a");
    a.className = "nav-link" + (href === currentPage ? " active" : "");
    a.href = href;
    a.textContent = label;
    nav.appendChild(a);
  });

  const mount = document.getElementById("navbar");
  mount.replaceWith(nav);
})();
