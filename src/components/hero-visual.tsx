'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Component, useCallback, useEffect, useState, type ReactNode } from 'react';
const Sculpture = dynamic(() => import('./sculpture'), { ssr: false, loading: () => null });
class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}
export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onError = useCallback(() => { setEnabled(false); setReady(false); }, []);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setReduced(media.matches);
      if (media.matches) { setEnabled(false); setReady(false); return; }
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2');
      if (gl) { setEnabled(true); gl.getExtension('WEBGL_lose_context')?.loseContext(); }
    };
    const visibility = () => setHidden(document.hidden);
    sync(); visibility();
    media.addEventListener('change', sync);
    document.addEventListener('visibilitychange', visibility);
    return () => { media.removeEventListener('change', sync); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  return <div className="sculpture-journey" data-paused={paused || reduced}>
    <div className="hero-art">
      <div className={`sculpture-fallback ${ready ? 'scene-ready' : ''}`}><Image src="/images/sculpture.jpg" alt="Reflective silver sculpture with flowing, interconnected contours" width={1000} height={1000} priority sizes="(max-width: 700px) 240px, 520px" /></div>
      {enabled && <div className={`scene-canvas ${ready ? 'is-ready' : ''}`} aria-hidden="true"><SceneBoundary onError={onError}><Sculpture paused={paused || hidden} onReady={onReady} /></SceneBoundary></div>}
    </div>
    {!reduced && <button className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play sculpture animation' : 'Pause sculpture animation'}>{paused ? 'Play motion' : 'Pause motion'}<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">{paused ? <path d="m3 1 8 5-8 5Z" /> : <path d="M2 1h3v10H2zm5 0h3v10H7z" />}</svg></button>}
  </div>;
}
