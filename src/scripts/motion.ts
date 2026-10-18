import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, Flip);

// Single easing + durations (mirrors tokens.css)
const EASE = "expo.out";
const D = { fast: 0.2, med: 0.5, slow: 0.9 };

const $ = <T extends Element>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = matchMedia("(hover: hover)").matches;

// ---- Project cards: shared-element expand/collapse (works with or without motion) ----
const scrim = $<HTMLElement>(".scrim")[0];
let openCard: HTMLElement | null = null;

function toggle(card: HTMLElement, open: boolean) {
  const state = Flip.getState(card);
  card.classList.toggle("open", open);
  scrim.classList.toggle("on", open);
  document.body.style.overflow = open ? "hidden" : "";
  open ? lenis?.stop() : lenis?.start();
  if (!reduced) {
    Flip.from(state, { duration: D.slow * 0.8, ease: EASE, absolute: false, scale: false, nested: true });
    gsap.to(scrim, { opacity: open ? 1 : 0, duration: D.med, ease: EASE });
  } else scrim.style.opacity = open ? "1" : "0";
  openCard = open ? card : null;
  if (open) card.querySelector<HTMLElement>(".close")?.focus();
  else card.querySelector<HTMLElement>(".card-open")?.focus();
}

$<HTMLElement>("[data-card]").forEach((card) => {
  card.querySelector(".card-open")!.addEventListener("click", () => !openCard && toggle(card, true));
  card.querySelector(".close")!.addEventListener("click", () => toggle(card, false));
});
scrim.addEventListener("click", () => openCard && toggle(openCard, false));
addEventListener("keydown", (e) => e.key === "Escape" && openCard && toggle(openCard, false));

// ---- Smooth scroll + reveals (skipped entirely when reduced motion) ----
let lenis: Lenis | undefined;

if (!reduced) {
  lenis = new Lenis({ duration: 1.0, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  $<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")!;
      const target = id === "#top" ? 0 : document.querySelector<HTMLElement>(id);
      if (target === null) return;
      e.preventDefault();
      lenis!.scrollTo(target as any, { offset: -56 });
      history.replaceState(null, "", id);
    }),
  );

  // Hero: staggered intro on load
  gsap.set("[data-hero]", { opacity: 0, y: 24 });
  gsap.to("[data-hero]", { opacity: 1, y: 0, duration: D.slow, ease: EASE, stagger: 0.1, delay: 0.1 });

  // Section reveals: batched so siblings stagger
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: D.slow, ease: EASE, stagger: 0.09,
      // Clear transform afterwards so position:fixed cards aren't trapped in a transformed ancestor
      onComplete: () => els.forEach((el) => { el.classList.add("in"); gsap.set(el, { clearProps: "opacity,transform" }); }) }),
  });

  // Magnetic buttons (pointer devices only)
  if (canHover)
    $<HTMLElement>("[data-magnetic]").forEach((el) => {
      const x = gsap.quickTo(el, "x", { duration: D.med, ease: EASE });
      const y = gsap.quickTo(el, "y", { duration: D.med, ease: EASE });
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * 0.25);
        y((e.clientY - r.top - r.height / 2) * 0.35);
      });
      el.addEventListener("pointerleave", () => (x(0), y(0)));
    });
}

// ---- Active nav highlight ----
const links = $<HTMLAnchorElement>("nav.top .ulink");
$<HTMLElement>("[data-section]").forEach((sec) =>
  ScrollTrigger.create({
    trigger: sec,
    start: "top 45%",
    end: "bottom 45%",
    onToggle: (s) => s.isActive && links.forEach((l) => l.setAttribute("aria-current", String(l.hash === `#${sec.id}`))),
  }),
);

(window as any).__motion = true;
