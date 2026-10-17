'use client';
import { useEffect } from 'react';

export function PageMotion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const art = document.querySelector<HTMLElement>('.hero-art');
        const journey = document.querySelector<HTMLElement>('.sculpture-journey');
        const narrow = () => innerWidth < 700;
        if (art && journey) {
          journey.dataset.motion = 'active';
          gsap.set(art, { xPercent: -50, yPercent: -50 });
          const path = gsap.timeline({ scrollTrigger: {
            trigger: 'main', start: 'top top', end: 'bottom bottom', scrub: 0.65,
            invalidateOnRefresh: true,
            onUpdate: self => { journey.dataset.scrollProgress = self.progress.toFixed(4); },
          } });
          path.fromTo(art, { x: () => innerWidth / 2, y: () => narrow() ? 490 : 500, scale: 1, opacity: 1, rotation: 0 }, { x: () => innerWidth - (narrow() ? 30 : 54), y: () => innerHeight * .23, scale: () => narrow() ? .16 : .18, opacity: () => narrow() ? .65 : 1, duration: .12, ease: 'power2.out' })
            .to(art, { y: () => innerHeight * .7, rotation: 35, duration: .19, ease: 'sine.inOut' })
            .to(art, { y: () => innerHeight * .3, rotation: -25, duration: .23, ease: 'sine.inOut' })
            .to(art, { y: () => innerHeight * .76, rotation: 45, duration: .24, ease: 'sine.inOut' })
            .to(art, { y: () => innerHeight * .26, rotation: 0, duration: .22, ease: 'sine.inOut' });
        }
        gsap.fromTo('.hero-title .line-inner', { y: 45 }, { y: 0, duration: 1.2, stagger: .14, ease: 'expo.out' });
        gsap.fromTo('.timeline-progress', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.career-timeline', start: 'top 80%', end: 'bottom 55%', scrub: .4 } });
        gsap.fromTo('.otif-track span', { scaleX: .94 }, { scaleX: .98, transformOrigin: 'left', ease: 'none', scrollTrigger: { trigger: '.impact-feature', start: 'top 85%', end: 'bottom 45%', scrub: .5 } });
        const refresh = () => ScrollTrigger.refresh();
        document.fonts.ready.then(() => { if (!disposed) refresh(); });
        window.addEventListener('load', refresh);
        return () => { window.removeEventListener('load', refresh); journey?.removeAttribute('data-motion'); journey?.removeAttribute('data-scroll-progress'); };
      });
      cleanup = () => media.revert();
    }).catch(error => console.error('Scroll animation could not initialise:', error));
    return () => { disposed = true; cleanup?.(); };
  }, []);
  return null;
}
