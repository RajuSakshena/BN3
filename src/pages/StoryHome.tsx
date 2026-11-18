import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Database, FileText, Globe2, Leaf, Scale, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Kicker, SectionIntro } from '../components/SectionIntro';
import { StoryRail } from '../components/StoryRail';
import { IndiaSignalGraphic } from '../components/IndiaSignalGraphic';
import { DistrictAtlas } from '../components/DistrictAtlas';

const areas = [
  { id: '01', title: 'Climate adaptation & resilience', line: 'Institutional readiness · Climate risk · Resilience infrastructure', text: "How India's institutions are, and are not, preparing for a hotter, less predictable future.", Icon: Leaf, color: 'climate' },
  { id: '02', title: 'Energy policy & markets', line: 'Transition economics · Policy design · Market signals', text: "The economics behind India's coal-to-renewables transition, not just the headlines.", Icon: Zap, color: 'energy' },
  { id: '03', title: 'Macroeconomic health', line: 'Growth · Inflation · Fiscal capacity · Economic conditions', text: "National growth, inflation, and fiscal capacity, read plainly and traced to primary data.", Icon: BarChart3, color: 'macro' },
  { id: '04', title: 'Equity markets', line: 'Capital markets · Market drivers · Investor behaviour', text: "What is actually moving Indian capital markets, and why, separated from market narrative.", Icon: Globe2, color: 'equity' },
  { id: '05', title: 'Commodity markets', line: 'Price formation · Supply dynamics · The real economy', text: 'The real-economy forces behind commodity prices, not the headline number alone.', Icon: Scale, color: 'commodity' },
];

export default function StoryHome() {
  return <div className="story-home">
    <section className="story-hero" id="opening">
      <div className="story-hero-bg"><span className="bg-contour contour-a"/><span className="bg-contour contour-b"/><span className="bg-grid"/></div>
      <div className="story-hero-inner page-wrap">
        <div className="hero-editorial">
          <Kicker>INDEPENDENT ECONOMIC RESEARCH / INDIA</Kicker>
          <div className="hero-edition">A NEW ATLAS OF THE INDIAN ECONOMY <span>VOL. 01 / 2026</span></div>
          <h1>India is a network. <em>Read every signal.</em><span className="hero-stop">.</span></h1>
          <p className="hero-description">Bharatnomy studies India's economy as one connected system—bringing climate, energy, markets, law and public policy into the same frame, down to the district level.</p>
          <div className="hero-cta-row"><Link to="/data" className="button-leaf">Explore the evidence <ArrowUpRight size={17}/></Link><Link to="/research" className="text-link">See what we're researching <ArrowRight size={16}/></Link></div>
          <div className="hero-bottom-meta"><span><i/> INDEPENDENT BY DESIGN</span><span>RESEARCH · DATA · SPATIAL INSIGHT</span></div>
        </div>
        <div className="hero-graphic-column"><IndiaSignalGraphic/><div className="hero-side-note"><span>THE BHARATNOMY FRAMEWORK</span><b>Five research lenses.<br/>One connected picture.</b></div></div>
      </div>
      <a href="#systems" className="hero-scroll-cue"><span>SCROLL TO EXPLORE THE SYSTEM</span><ArrowDown size={15}/></a>
    </section>

    <div className="story-body page-wrap">
      <StoryRail/>
      <div className="story-content">
        <section className="chapter-opening" aria-label="Our research philosophy">
          <Kicker>THE CENTRAL IDEA / 01</Kicker>
          <p className="opening-statement">Economic questions don't respect categories. <em>Our research doesn't either.</em></p>
          <div className="opening-lower"><span className="opening-index">01—05<br/>A CONNECTED METHOD</span><p>Climate, energy, capital markets and public policy interact continuously. A heatwave is also an energy story, an agriculture story and a fiscal story. Research that addresses only one thread produces an incomplete answer.</p><Link to="/about" className="round-arrow-link" aria-label="How we think"><ArrowUpRight/></Link></div>
          <div className="mission-strip"><span>OUR MISSION</span><p>To democratize high-rigor, home-grown research so Indian citizens and market actors can make informed decisions — and hold government accountable.</p><span className="mission-mark">✳</span></div>
          <div className="why-now-strip"><span>WHY THIS WORK MATTERS NOW</span><p>Democratic backsliding and social-media-driven misinformation can weaken the evidence base behind public decisions. At the same time, much research on India's economy defaults toward partisan framing or sits behind institutional paywalls. Bharatnomy is built against that default: independent by design, writing for people outside the room where policy gets written.</p></div>
        </section>

        <section className="chapter-systems" id="systems">
          <SectionIntro label="THE RESEARCH AGENDA / 02" title={<>Five lenses.<br/><em>Not five silos.</em></>} text="We treat these areas as connected, not separate. Each one gives context to the others; together they offer a more complete view of India's economy." index="THE FIVE RESEARCH VERTICALS"/>
          <div className="systems-layout"><div className="systems-diagram systems-network"><div className="network-topline"><span>THE RESEARCH MODEL</span><span>05 / 05</span></div><div className="network-core"><span className="network-core-mark">BN</span><strong>India, as<br/>one system.</strong><small>CONNECTED QUESTIONS · SHARED EVIDENCE</small></div><div className="network-connector connector-a"/><div className="network-connector connector-b"/><div className="network-connector connector-c"/><div className="network-connector connector-d"/><div className="network-connector connector-e"/><span className="network-node node-a">CLIMATE</span><span className="network-node node-b">ENERGY</span><span className="network-node node-c">MACRO</span><span className="network-node node-d">EQUITIES</span><span className="network-node node-e">COMMODITIES</span><div className="network-bottomline">NATIONAL CONTEXT <b>→</b> LOCAL DETAIL</div></div>
            <div className="systems-list">{areas.map((a) => { const Icon = a.Icon; return <motion.article key={a.id} className={`system-row ${a.color}`} whileHover={{ x: 6 }} transition={{ duration: .2 }}><span className="system-number">{a.id}</span><div className="system-name"><Icon size={17}/><h3>{a.title}</h3></div><span className="system-line">{a.line}</span><p>{a.text}</p><span className="system-arrow"><ArrowUpRight size={16}/></span></motion.article>; })}</div></div>
        </section>

        <section className="chapter-field" id="fieldnote">
          <div className="fieldnote-kicker"><Kicker>FIELD NOTE / PRJ-01</Kicker><span>CLIMATE ADAPTATION · MAHARASHTRA</span></div>
          <div className="fieldnote-grid"><div className="fieldnote-copy"><span className="status-tag"><i/> RESEARCH PHASE / METHODOLOGY IN DEVELOPMENT</span><h2>When heat becomes <em>an economic question.</em></h2><p>We are tracking Heat Action Plans across Maharashtra, building a district-by-district record of what is documented versus what is operating. A plan on paper and preparedness on the ground are different facts.</p><p className="fieldnote-small">This is an active research direction, not a published finding. The first study's topic-selection criteria and methodology are being developed.</p><Link to="/research" className="text-link">Inside the research programme <ArrowUpRight size={15}/></Link></div>
            <div className="fieldnote-art"><div className="fieldnote-map-title"><span>MH / DISTRICT LENS</span><span>01—05</span></div><svg viewBox="0 0 520 410" role="img" aria-label="Abstract topographic heat contour illustration for a Maharashtra research project"><defs><radialGradient id="fieldHeat"><stop offset="0" stopColor="#E6A078" stopOpacity=".72"/><stop offset=".68" stopColor="#E6A078" stopOpacity=".2"/><stop offset="1" stopColor="#E6A078" stopOpacity="0"/></radialGradient></defs><circle cx="275" cy="196" r="190" fill="url(#fieldHeat)"/><g fill="none" stroke="#B96D4E" strokeWidth="1.3" opacity=".78"><path d="M42 202C78 90 177 46 273 79s184-13 214 95-43 177-152 194S74 332 42 202Z"/><path d="M76 202c31-91 110-128 195-101s158-11 184 81-39 145-133 160S102 311 76 202Z"/><path d="M111 202c25-69 85-98 154-78s128-8 150 63-32 112-109 124-171-25-195-109Z"/><path d="M148 202c18-48 60-69 113-55s98-6 115 44-25 79-85 88-125-18-143-77Z"/><path d="M184 202c11-29 38-41 72-33s66-4 76 27-18 48-54 53-83-12-94-47Z"/></g><g stroke="#B96D4E" fill="#F6F5EB" strokeWidth="2"><circle cx="273" cy="195" r="7"/><circle cx="161" cy="160" r="4"/><circle cx="378" cy="231" r="4"/><circle cx="336" cy="122" r="4"/></g><g fill="#91614F" fontFamily="DM Mono" fontSize="10" letterSpacing="1.7"><text x="32" y="38">HEAT / EXPOSURE</text><text x="360" y="378">FIELD RESEARCH</text><text x="32" y="382">MAHARASHTRA · 2026</text></g></svg><div className="fieldnote-art-footer"><span>THE QUESTION</span><strong>What is documented — and what is operating?</strong><span>OPEN PROJECT ↗</span></div></div>
          </div>
        </section>

        <section className="chapter-evidence" id="evidence">
          <SectionIntro label="THE BHARATNOMY OBSERVATORY / 03" title={<>Move from the question<br/>to <em>the local signal.</em></>} text="Highlighted datasets will be available through interactive dashboards and spatial views. The same evidence should be readable as a map, a chart or a table—and downloadable for independent work." index="MAP · CHART · TABLE"/>
          <DistrictAtlas compact/>
          <div className="evidence-foot"><span>DEMONSTRATION INTERFACE / 02 DATA PRODUCTS</span><Link to="/data">Open the full data lab <ArrowUpRight size={15}/></Link></div>
        </section>

        <section className="chapter-principles" id="principles">
          <SectionIntro label="THE STANDARD WE HOLD / 04" title={<>Independent in method.<br/><em>Open in practice.</em></>} text="We choose research questions for their public and market utility, not for a preferred conclusion. Verification outranks speed; transparency outranks polish." index="OUR EDITORIAL COMMITMENT"/>
          <div className="principle-cards"><article><span>01</span><ShieldCheck/><h3>Source-first research</h3><p>Primary data wherever possible. Clear citations wherever we make a claim.</p></article><article><span>02</span><FileText/><h3>Methodology in the open</h3><p>Limitations, definitions and uncertainty made visible—not buried.</p></article><article><span>03</span><Globe2/><h3>Non-partisan by design</h3><p>Independent questions, transparent standards and public utility.</p></article></div>
          <div className="principle-bottom"><span>EDITORIAL STANDARD / VERSION 1.0</span><Link to="/standards">Read our commitments <ArrowUpRight size={14}/></Link></div>
        </section>
        <section className="audience-panel"><div><Kicker>WHO THIS IS FOR / 05</Kicker><h2>Evidence for people <em>making consequential decisions.</em></h2></div><div className="audience-panel-grid"><article><span>01 / CIVIC ACTORS &amp; CITIZENS</span><h3>See the system more clearly.</h3><p>Transparent, evidence-based data and systems-level analysis that connects issues most coverage treats in isolation, so long-term national impact is easier to evaluate.</p></article><article><span>02 / MARKET &amp; INSTITUTIONAL ACTORS</span><h3>Look beyond the headline indicator.</h3><p>Rigorous, non-partisan primary datasets and macro-level risk assessments that integrate local socio-cultural context and regulatory tail-risk, not just headline indicators.</p></article></div></section>
        <section className="story-closing"><span className="closing-symbol">✳</span><Kicker>THE WORK IS UNDERWAY</Kicker><h2>Better questions.<br/><em>Stronger evidence.</em></h2><p>We are building our first body of work in public. Follow the research, explore the data and help us decide what should be measured next.</p><div><Link to="/research" className="button-leaf">Follow the research <ArrowUpRight size={16}/></Link><a href="mailto:namaste@bharatnomy.com" className="text-link">Start a conversation <ArrowRight size={15}/></a></div></section>
      </div>
    </div>
  </div>;
}
