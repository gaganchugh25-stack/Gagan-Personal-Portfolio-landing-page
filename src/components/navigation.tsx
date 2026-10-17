'use client';
import { useEffect, useRef, useState } from 'react';
import { Arrow } from './icons';
const links = [['About', 'about'], ['Experience', 'experience'], ['Impact', 'impact'], ['Expertise', 'expertise'], ['FAQs', 'questions']] as const;
export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-20% 0px -65% 0px' });
    for (const id of ['home', ...links.map(([, id]) => id), 'contact']) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    const desktop = window.matchMedia('(min-width: 701px)');
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener('change', closeOnDesktop);
    return () => { observer.disconnect(); desktop.removeEventListener('change', closeOnDesktop); };
  }, []);
  return <header className="site-header" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
  }}><nav className="navigation container" aria-label="Main navigation">
    <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Gagan Chugh, home">GC<span>.</span></a>
    <div className="desktop-links">{links.map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</div>
    <a className="nav-contact" href="#contact">Let’s connect <Arrow diagonal /></a>
    <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></button>
    <div className="mobile-links" id="mobile-navigation" hidden={!open}>{[...links, ['Contact', 'contact']].map(([label, id]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}<Arrow diagonal /></a>)}</div>
  </nav></header>;
}
