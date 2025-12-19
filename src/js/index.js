const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target.querySelector("img");

      const src = img.dataset.src;

      if (src) {
        img.src = src;

        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });

        img.removeAttribute("data-src");
      }

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".fruits-list li").forEach((li) => {
  observer.observe(li);
});
