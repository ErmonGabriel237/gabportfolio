// Smooth scroll helper for one-page navigation
export function scrollToId(id, options = {}) {
  const { offset = 72, behavior = "smooth" } = options; // default offset for fixed header
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const targetY = window.scrollY + rect.top - offset;
  window.scrollTo({ top: targetY, behavior });
  // update hash without jumping
  if (history && history.pushState) {
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      // ignore
    }
  }
}

export function scrollToHashOnLoad(defaultOffset = 72) {
  if (typeof window === "undefined") return;
  const hash = window.location.hash;
  if (!hash) return;
  const id = hash.replace("#", "");
  // defer to allow layout to settle
  setTimeout(() => scrollToId(id, { offset: defaultOffset }), 50);
}
