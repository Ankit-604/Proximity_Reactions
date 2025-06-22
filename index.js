document.addEventListener("DOMContentLoaded", () => {
  // Set initial CSS variables
  document.documentElement.style.setProperty("--ball-size", "42");
  document.documentElement.style.setProperty("--impect-radius", "192");

  // Mouse movement tracking
  window.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    document.body.style.setProperty("--mx", e.clientX - centerX);
    document.body.style.setProperty("--my", e.clientY - centerY);
  });

  // Add touch support for mobile devices
  window.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      document.body.style.setProperty("--mx", touch.clientX - centerX);
      document.body.style.setProperty("--my", touch.clientY - centerY);
    },
    { passive: false }
  );
});
