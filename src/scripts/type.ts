// Hero name: letters lift and tilt toward the cursor. Transform-only, so no layout shift.
const h1 = document.querySelector<HTMLElement>(".hero h1");
const ok = !matchMedia("(prefers-reduced-motion: reduce)").matches && matchMedia("(hover: hover)").matches;

if (h1 && ok) {
  const text = h1.textContent ?? "";
  h1.setAttribute("aria-label", text);
  h1.textContent = "";
  const letters: HTMLElement[] = [];
  text.split(" ").forEach((word, i, all) => {
    const w = document.createElement("span");
    w.className = "word";
    w.setAttribute("aria-hidden", "true");
    for (const ch of word) {
      const l = document.createElement("span");
      l.className = "ch";
      l.textContent = ch;
      w.append(l);
      letters.push(l);
    }
    h1.append(w);
    if (i < all.length - 1) h1.append(" ");
  });

  let px = 0, py = 0, queued = false;
  const frame = () => {
    queued = false;
    for (const l of letters) {
      const r = l.getBoundingClientRect();
      const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2);
      const k = Math.max(0, 1 - Math.hypot(dx, dy) / 240) ** 2;
      l.style.transform = k > 0.01 ? `translateY(${-k * 18}px) rotate(${(dx > 0 ? -1 : 1) * k * 7}deg)` : "";
      l.classList.toggle("hot", k > 0.55);
    }
  };
  addEventListener("pointermove", (e) => {
    px = e.clientX; py = e.clientY;
    if (!queued) { queued = true; requestAnimationFrame(frame); }
  }, { passive: true });
  document.addEventListener("pointerleave", () => letters.forEach((l) => { l.style.transform = ""; l.classList.remove("hot"); }));
}
