import { ArrowUpRight, Check, FileCheck2, Scale, ShieldCheck } from 'lucide-react';
import { Kicker } from '../components/SectionIntro';

const hardLines = [
  'No fabricated data points and no uncited empirical claims, under any circumstance.',
  'No partisan alignment, political bias, or political sponsorship.',
  'No compromise on primary-data privacy, anonymity, or participant consent.',
];
const priorities = [
  { n: '01', title: 'Empirical accuracy', text: 'Depth of verification outranks speed of publishing. Fact-checking never yields to a release deadline.' },
  { n: '02', title: 'Non-partisan neutrality', text: 'We choose research questions based on what we think matters, not on what serves a particular outcome.' },
  { n: '03', title: 'Stakeholder utility', text: 'Analytical rigor is never diluted for the sake of simplicity—technical terms get a plain-language definition alongside them instead of being cut.' },
  { n: '04', title: 'Commercial viability', text: 'Non-partisan public utility outranks commercial monetization when the two conflict.' },
];

export default function Standards() {
  return <div className="subpage standards-page">
    <section className="subpage-hero page-wrap standards-hero"><div><Kicker>BN—STD / EDITORIAL STANDARDS</Kicker><span className="issue-label">THE RULES BEHIND THE RESEARCH</span><h1>Trust is built <em>into the method.</em></h1><p>These are commitments, not aspirations. Where a standard is not yet finalised, we say so directly rather than leaving it vague.</p></div><div className="standards-seal"><div><ShieldCheck size={29}/><span>BHARATNOMY</span><b>OPEN<br/>METHOD</b><small>✳ · EST. 2026 · ✳</small></div></div></section>
    <section className="page-wrap hard-lines-section"><div><Kicker>NON-NEGOTIABLES / 01</Kicker><h2>Three lines <em>we do not cross.</em></h2></div><div className="hard-lines-list">{hardLines.map((x, i) => <article key={x}><span>0{i + 1}</span><Check size={18}/><p>{x}</p></article>)}</div></section>
    <section className="independence-band"><div className="page-wrap independence-inner"><div className="independence-mark"><ShieldCheck/></div><div><Kicker>INDEPENDENCE / 02</Kicker><h2>Free to follow <em>the evidence.</em></h2><p>Bharatnomy is not affiliated with any political party, government body, or advocacy organization. We choose research questions based on what we think matters, not on what serves a particular outcome.</p></div></div></section>
    <section className="page-wrap priorities-section"><div className="priority-heading"><Kicker>HOW WE RESOLVE TRADE-OFFS / 03</Kicker><h2>A decision order.<br/><em>Not a moving target.</em></h2></div><div className="priority-ledger">{priorities.map((p, i) => <article key={p.n}><span>{p.n}</span><div><h3>{p.title}</h3><p>{p.text}</p></div><i>{i === 0 ? '↑' : '·'}</i></article>)}<div className="priority-note"><Scale size={16}/> When priorities conflict, we decide in this order: empirical accuracy → non-partisan neutrality → stakeholder utility → commercial viability.</div></div></section>
    <section className="page-wrap method-checks"><div><Kicker>THE RECORD / 04</Kicker><h2>Shown, sourced <em>and correctable.</em></h2></div><div className="method-check-grid"><article><FileCheck2/><span>01 / METHODOLOGY</span><h3>Shown, not just claimed.</h3><p>Every working paper and report will include a clear account of its data sources and methods, including limitations. If a number is uncertain, we say so, rather than presenting false precision.</p></article><article><ShieldCheck/><span>02 / SOURCING</span><h3>Traceable to the source.</h3><p>We rely on primary data wherever possible—government data, original surveys, and direct fieldwork—and cite sources plainly enough that a reader can check our work independently.</p></article><article><Scale/><span>03 / CORRECTIONS</span><h3>Visible when we get it wrong.</h3><p>If we get something wrong, we say so publicly with a visible correction note, not a silent edit.</p></article></div><div className="funding-disclosure"><b>FUNDING TRANSPARENCY</b><p>Details of Bharatnomy's funding and ownership structure will be published here once finalized.</p></div></section>
    <section className="subpage-cta page-wrap"><span>QUESTIONS ABOUT OUR METHOD?</span><h2>Good scrutiny <em>makes better research.</em></h2><p>We welcome questions about how the work is sourced, checked and corrected.</p><a href="mailto:namaste@bharatnomy.com">Contact the team <ArrowUpRight size={15}/></a></section>
  </div>;
}
