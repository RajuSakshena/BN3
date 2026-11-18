import { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandMark } from './BrandMark';

const nav = [
  { to: '/research', label: 'Research' },
  { to: '/data', label: 'Data lab' },
  { to: '/datasets', label: 'Datasets' },
  { to: '/about', label: 'About' },
];

export function SiteFrame() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <div className="site-frame">
    <div className="utility-strip"><span><i /> AN INDEPENDENT RESEARCH FIRM</span><span className="utility-right">INDIA, UNDERSTOOD THROUGH EVIDENCE <b>✳</b></span></div>
    <header className="global-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="main-nav" aria-label="Main navigation">
          {nav.map((n) => <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? 'active' : ''}>{n.label}</NavLink>)}
        </nav>
        <div className="header-end"><Link to="/data" className="header-explore">Explore evidence <ArrowUpRight size={15}/></Link><button className="menu-trigger" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div>
      </div>
      <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
        {nav.map((n) => <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</NavLink>)}<Link to="/standards" onClick={() => setOpen(false)}>Editorial standards</Link><Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
      </motion.nav>}</AnimatePresence>
    </header>
    <main key={location.pathname} className="page-main"><AnimatePresence mode="wait"><motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .35, ease: 'easeOut' }}><Outlet /></motion.div></AnimatePresence></main>
    <footer className="global-footer">
      <div className="footer-top"><div className="footer-brand"><BrandMark/><p>Independent, evidence-based research on India's economy for citizens and market actors.</p><span>Every claim checked. Every insight open.</span></div><div className="footer-col"><small>EXPLORE</small><Link to="/research">Research</Link><Link to="/datasets">Datasets</Link><Link to="/data">Visualizations</Link></div><div className="footer-col"><small>INSTITUTION</small><Link to="/about">About Bharatnomy</Link><Link to="/standards">Editorial standards</Link><Link to="/careers">Careers</Link></div><div className="footer-contact"><small>START A CONVERSATION</small><a href="mailto:namaste@bharatnomy.com">namaste@bharatnomy.com <ArrowUpRight size={15}/></a><span>India · Independent by design</span></div></div>
      <div className="footer-bottom"><span>© 2026 Bharatnomy</span><span>This platform maintains no partisan political affiliation.</span><span>Built around evidence <b>✳</b></span></div>
    </footer>
  </div>;
}
