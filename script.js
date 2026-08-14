(() => {
  const config = window.RESTORY_CONFIG || {};
  document.querySelectorAll('.js-apply-link').forEach((link) => {
    if (config.applyUrl && config.applyUrl !== '#') link.href = config.applyUrl;
  });
  document.querySelectorAll('[data-image]').forEach((slot) => {
    const source = config.images?.[slot.dataset.image];
    if (!source) return;
    slot.style.backgroundImage = `url("${source}")`;
    slot.classList.add('has-image');
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
})();
