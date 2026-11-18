import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, BarChart3, Leaf, Scale, Zap } from 'lucide-react';

const signals = [
  { label: 'CLIMATE', detail: 'Risk & resilience', Icon: Leaf, tone: 'signal-climate' },
  { label: 'ENERGY', detail: 'Transition & markets', Icon: Zap, tone: 'signal-energy' },
  { label: 'MACRO', detail: 'Growth & inflation', Icon: BarChart3, tone: 'signal-macro' },
  { label: 'EQUITIES', detail: 'Capital & behaviour', Icon: Activity, tone: 'signal-equity' },
  { label: 'COMMODITIES', detail: 'Supply & prices', Icon: Scale, tone: 'signal-commodities' },
];

export function IndiaSignalGraphic() {
  return <div className="signal-stage signal-board" aria-label="Five connected Bharatnomy research lenses">
    <div className="signal-board-window">
      <div className="signal-board-topline"><span><i/> BHARATNOMY / SIGNAL ATLAS</span><span>FIG. 01 <ArrowUpRight size={13}/></span></div>
      <div className="signal-board-main">
        <div className="signal-map-plate">
          <div className="signal-map-grid"/>
          <svg viewBox="0 0 260 300" role="img" aria-label="Abstract map outline of India with connected data points">
            <defs><linearGradient id="indiaSignalFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3159CF"/><stop offset="1" stopColor="#8BA7F1"/></linearGradient></defs>
            <path d="M113 12 137 26 150 22 159 50 181 63 173 91 190 111 174 139 161 151 156 181 140 202 129 238 113 273 97 245 88 215 69 197 65 169 45 146 58 117 50 88 69 68 77 39 98 34Z" fill="url(#indiaSignalFill)" stroke="#2448B3" strokeWidth="2.2" strokeLinejoin="round"/>
            <path d="M76 76 157 94M61 119 173 126M69 157 159 165M91 194 143 199M99 42 123 229M148 34 123 229" fill="none" stroke="#E8EEFF" strokeWidth="1.5" opacity=".75"/>
            <g fill="#F3CF79" stroke="#fff" strokeWidth="2"><circle cx="118" cy="79" r="5"/><circle cx="151" cy="124" r="5"/><circle cx="103" cy="157" r="5"/><circle cx="135" cy="193" r="5"/><circle cx="117" cy="224" r="5"/></g>
          </svg>
          <span className="map-plate-caption">INDIA / DISTRICT LENS</span>
        </div>
        <div className="signal-board-stats"><span className="signal-stat-label">ONE CONNECTED ECONOMY</span><strong>05</strong><span className="signal-stat-title">research<br/>lenses</span><div className="signal-stat-rule"/><span className="signal-stat-foot">NATIONAL → STATE → DISTRICT</span></div>
      </div>
      <div className="signal-board-bottom"><span>RESEARCH SYSTEM / 2026</span><span>EXPLORE THE CONNECTIONS <ArrowUpRight size={12}/></span></div>
    </div>
    <motion.div className="signal-float-card signal-float-a" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .65, delay: .2 }}><span className="float-label">THE SCALE</span><strong>District-level</strong><small>granular research</small></motion.div>
    <motion.div className="signal-float-card signal-float-b" initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .65, delay: .35 }}><span className="float-dot"/> <strong>Evidence first</strong><small>Sources · method · data</small></motion.div>
  </div>;
}
