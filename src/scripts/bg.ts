// Interactive dot-grid background. Dots swell, drift away and turn accent near the cursor; click sends a ripple.
// Only animates while there's something to animate, so it idles at ~0% CPU.
const canvas = document.getElementById("bg") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const GAP = 30, REACH = 150, PUSH = 14;
const css = getComputedStyle(document.documentElement);
const accent = css.getPropertyValue("--accent").trim() || "#2d4bff";
const base = "#d4d4d4";

let w = 0, h = 0, dpr = 1;
const mouse = { x: -9999, y: -9999, sx: -9999, sy: -9999 };
const ripples: { x: number; y: number; t: number }[] = [];
let raf = 0, idleUntil = 0;

function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  w = innerWidth; h = innerHeight;
  canvas.width = w * dpr; canvas.height = h * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  draw(performance.now());
}

function draw(now: number) {
  ctx.clearRect(0, 0, w, h);
  const cols = Math.ceil(w / GAP) + 1, rows = Math.ceil(h / GAP) + 1;
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    const ox = i * GAP, oy = j * GAP;
    let dx = ox - mouse.sx, dy = oy - mouse.sy;
    const d = Math.hypot(dx, dy);
    let k = d < REACH ? (1 - d / REACH) ** 2 : 0;
    let x = ox, y = oy;
    if (k) { x += (dx / (d || 1)) * k * PUSH; y += (dy / (d || 1)) * k * PUSH; }
    for (const r of ripples) {
      const age = (now - r.t) / 900, rd = Math.hypot(ox - r.x, oy - r.y), ring = Math.abs(rd - age * 420);
      if (ring < 40 && age < 1) k = Math.max(k, (1 - ring / 40) * (1 - age));
    }
    ctx.fillStyle = k > 0.02 ? accent : base;
    ctx.globalAlpha = k > 0.02 ? 0.35 + 0.65 * Math.min(k * 1.6, 1) : 1;
    ctx.beginPath();
    ctx.arc(x, y, 1.1 + k * 2.6, 0, 6.2832);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function tick(now: number) {
  mouse.sx += (mouse.x - mouse.sx) * 0.15;
  mouse.sy += (mouse.y - mouse.sy) * 0.15;
  while (ripples.length && now - ripples[0].t > 900) ripples.shift();
  draw(now);
  raf = now < idleUntil || ripples.length ? requestAnimationFrame(tick) : 0;
}
const wake = () => { idleUntil = performance.now() + 1200; if (!raf) raf = requestAnimationFrame(tick); };

addEventListener("resize", resize);
draw(performance.now());
resize();
if (!reduced) {
  addEventListener("pointermove", (e) => {
    if (mouse.sx < -999) { mouse.sx = e.clientX; mouse.sy = e.clientY; }
    mouse.x = e.clientX; mouse.y = e.clientY; wake();
  }, { passive: true });
  addEventListener("pointerdown", (e) => { ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() }); wake(); }, { passive: true });
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; wake(); });
}
