import { useEffect, useState } from 'react';

const chapters = [
  { id: 'opening', n: '01', label: 'The question' },
  { id: 'systems', n: '02', label: 'Five lenses' },
  { id: 'fieldnote', n: '03', label: 'In the field' },
  { id: 'evidence', n: '04', label: 'Open evidence' },
  { id: 'principles', n: '05', label: 'Our standard' },
];

export function StoryRail() {
  const [active, setActive] = useState('opening');
  useEffect(() => {
    const nodes = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-20% 0px -58% 0px', threshold: [0, .15, .35, .6] });
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  return <aside className="story-rail" aria-label="Page chapters"><span className="rail-caption">ON THIS PAGE</span>{chapters.map((c) => <a key={c.id} href={`#${c.id}`} className={active === c.id ? 'active' : ''}><i>{c.n}</i><span>{c.label}</span></a>)}</aside>;
}
