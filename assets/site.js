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
