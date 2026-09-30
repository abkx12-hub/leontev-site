document.querySelectorAll('[data-menu-toggle]').forEach(button => {
  const nav = document.getElementById(button.getAttribute('aria-controls'));
  const close = () => { nav.hidden = true; button.setAttribute('aria-expanded', 'false'); button.textContent = 'Меню +'; };
  button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; nav.hidden = !open; button.setAttribute('aria-expanded', String(open)); button.textContent = open ? 'Закрыть −' : 'Меню +'; });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !nav.hidden) { close(); button.focus(); } });
  window.matchMedia('(min-width: 901px)').addEventListener('change', e => { if(e.matches) close(); });
});

// A direct link from the media site can open the corresponding service.
const revealLinkedService = () => {
  const service = document.getElementById(location.hash.slice(1));
  if (service?.classList.contains('service-disclosure')) service.open = true;
};
window.addEventListener('hashchange', revealLinkedService);
revealLinkedService();

const syncStoryScroll = () => document.body.classList.toggle('story-is-open', !!document.querySelector('.story-dialog[open]'));
document.querySelectorAll('[data-story]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.story);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    syncStoryScroll();
  });
});
document.querySelectorAll('.story-dialog').forEach(dialog => {
  dialog.querySelectorAll('[data-close-story]').forEach(control => control.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('close', syncStoryScroll);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

// Progressive enhancement: content stays readable with JavaScript or motion off.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.route-intro, .decision-route li, .participation-grid > div, .story-card, .media-panel').forEach(element => {
    element.classList.add('reveal-on-scroll');
    observer.observe(element);
  });
  const showAll = () => document.querySelectorAll('.reveal-on-scroll').forEach(element => element.classList.add('is-visible'));
  motionPreference.addEventListener('change', event => { if (event.matches) { observer.disconnect(); showAll(); } });
  document.addEventListener('focusin', event => event.target.closest('.reveal-on-scroll')?.classList.add('is-visible'));
}

const progressBar = document.querySelector('.reading-progress span');
if (progressBar) {
  let scheduled = false;
  const updateProgress = () => {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
    scheduled = false;
  };
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}
