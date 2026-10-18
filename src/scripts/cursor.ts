// Soft trailing ring that grows over interactive elements. Pointer devices only; native cursor stays.
if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const ring = document.createElement("div");
  ring.className = "cursor";
  ring.setAttribute("aria-hidden", "true");
  document.body.append(ring);

  let tx = 0, ty = 0, x = 0, y = 0, raf = 0, shown = false;
  const loop = () => {
    x += (tx - x) * 0.2; y += (ty - y) * 0.2;
    ring.style.transform = `translate3d(${x}px,${y}px,0)`;
    raf = Math.hypot(tx - x, ty - y) > 0.3 ? requestAnimationFrame(loop) : 0;
  };
  addEventListener("pointermove", (e) => {
    tx = e.clientX; ty = e.clientY;
    if (!shown) { shown = true; x = tx; y = ty; ring.classList.add("on"); }
    ring.classList.toggle("big", !!(e.target as Element).closest?.("a,button,[data-magnetic]"));
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });
  document.addEventListener("pointerleave", () => { shown = false; ring.classList.remove("on", "big"); });
}
