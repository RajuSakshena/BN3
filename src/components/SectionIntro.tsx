import type { ReactNode } from 'react';

export function Kicker({ children }: { children: ReactNode }) { return <div className="kicker"><i />{children}</div>; }
export function SectionIntro({ label, title, text, index }: { label: string; title: ReactNode; text?: string; index?: string }) {
  return <div className="section-intro"><div><Kicker>{label}</Kicker><h2>{title}</h2></div>{text && <div className="section-intro-aside"><span>{index || 'BHARATNOMY / RESEARCH'}</span><p>{text}</p></div>}</div>;
}
