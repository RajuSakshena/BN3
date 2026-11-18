import { useMemo, useState } from 'react';
import { Activity, ArrowDownToLine, ArrowUpRight, BarChart3, Check, FileText, Map, Table2 } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { datasetMeta, districtData, type DatasetKey } from '../data/datasets';

type ViewMode = 'map' | 'chart' | 'table';
type Metric = { key: keyof typeof districtData[number]; label: string; unit: string };
const metricSets: Record<DatasetKey, Metric[]> = {
  heat: [
    { key: 'heatExposure', label: 'Heat exposure', unit: 'Index / 100' },
    { key: 'planReadiness', label: 'Plan readiness', unit: 'Index / 100' },
    { key: 'coolingAccess', label: 'Cooling access', unit: 'Index / 100' },
  ],
  energy: [
    { key: 'solar', label: 'Solar capacity', unit: 'Illustrative GW' },
    { key: 'wind', label: 'Wind capacity', unit: 'Illustrative GW' },
    { key: 'totalCapacity', label: 'Total capacity', unit: 'Illustrative GW' },
  ],
};

export function DistrictAtlas({ compact = false }: { compact?: boolean }) {
  const [dataset, setDataset] = useState<DatasetKey>('heat');
  const [view, setView] = useState<ViewMode>('map');
  const [metricKey, setMetricKey] = useState<Metric['key']>('heatExposure');
  const [selected, setSelected] = useState('Nagpur');
  const [search, setSearch] = useState('');
  const meta = datasetMeta[dataset];
  const metrics = metricSets[dataset];
  const metric = metrics.find((m) => m.key === metricKey) || metrics[0];
  const rows = useMemo(() => districtData.filter((d) => d.district.toLowerCase().includes(search.toLowerCase())), [search]);
  const selectedRecord = districtData.find((d) => d.district === selected) || districtData[0];
  const value = selectedRecord[metric.key] as number;
  const format = (v: number) => dataset === 'heat' ? `${v}` : v.toFixed(1);
  const setData = (key: DatasetKey) => { setDataset(key); setMetricKey(metricSets[key][0].key); };

  return <section className={`atlas-shell ${compact ? 'atlas-compact' : ''}`}>
    <div className="atlas-topline"><div><span className="atlas-live-dot"/> INTERACTIVE DATA PROTOTYPE</div><span>{meta.id} <b>·</b> {meta.updated.toUpperCase()}</span></div>
    <div className="atlas-heading"><div><span className="atlas-overline">BHARATNOMY / DATA OBSERVATORY</span><h3>{compact ? 'A local signal, in context.' : 'Explore the evidence.'}</h3><p>{compact ? 'Switch between two illustrative datasets and see how the same districts reveal different questions.' : meta.subtitle}</p></div><span className="demo-chip">SYNTHETIC DEMO DATA</span></div>
    <div className="atlas-controls">
      <div className="atlas-dataset-switch" role="tablist" aria-label="Choose dataset">
        <button className={dataset === 'heat' ? 'selected' : ''} onClick={() => setData('heat')} role="tab" aria-selected={dataset === 'heat'}><i className="dataset-dot heat-dot"/> Heat readiness</button>
        <button className={dataset === 'energy' ? 'selected' : ''} onClick={() => setData('energy')} role="tab" aria-selected={dataset === 'energy'}><i className="dataset-dot energy-dot"/> Renewable capacity</button>
      </div>
      <div className="atlas-view-switch" aria-label="Select data view">
        <button className={view === 'map' ? 'selected' : ''} onClick={() => setView('map')}><Map size={14}/> Map</button>
        <button className={view === 'chart' ? 'selected' : ''} onClick={() => setView('chart')}><BarChart3 size={14}/> Chart</button>
        <button className={view === 'table' ? 'selected' : ''} onClick={() => setView('table')}><Table2 size={14}/> Table</button>
      </div>
    </div>
    <div className="atlas-filter-row"><div className="metric-pills">{metrics.map((m) => <button key={m.key} className={metricKey === m.key ? 'active' : ''} onClick={() => setMetricKey(m.key)}>{m.label}</button>)}</div><label className="district-search"><span>FIND DISTRICT</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search districts" /></label></div>
    <div className="atlas-content">
      <div className="atlas-visual-column">
        {view === 'map' && <div className="atlas-map-view"><div className="map-label-top"><span>MAHARASHTRA / DISTRICT LENS</span><span>SCHEMATIC MAP</span></div><svg className="district-map-svg" viewBox="0 0 620 450" role="img" aria-label="Schematic district map with selectable sample points">
          <defs><linearGradient id="atlasMapFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCE5FB"/><stop offset="1" stopColor="#F0F3FC"/></linearGradient><pattern id="mapDots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1" fill="#9CAEDC" opacity=".35"/></pattern></defs>
          <path d="M205 28 285 44 340 35 398 68 452 78 481 130 520 169 489 216 500 256 462 306 448 354 396 382 357 425 302 408 263 378 221 389 193 357 150 336 138 284 109 247 128 202 116 153 157 112 168 67Z" fill="url(#atlasMapFill)" stroke="#8399D0" strokeWidth="2.5" strokeLinejoin="round"/>
          <path d="M205 28 285 44 340 35 398 68 452 78 481 130 520 169 489 216 500 256 462 306 448 354 396 382 357 425 302 408 263 378 221 389 193 357 150 336 138 284 109 247 128 202 116 153 157 112 168 67Z" fill="url(#mapDots)"/>
          <g fill="none" stroke="#B9C6E7" strokeWidth="1.2" opacity=".9"><path d="M170 95 260 125 336 102 428 133M137 203 226 216 310 188 402 214 494 206M148 284 245 274 332 298 463 280M191 352 263 336 360 370 448 354M258 48 245 127 226 216 245 274 263 336 302 408M340 35 336 102 310 188 332 298 360 370M452 78 428 133 402 214 463 280 448 354"/></g>
          {districtData.filter((d) => d.district.toLowerCase().includes(search.toLowerCase())).map((d) => <g key={d.district} onClick={() => setSelected(d.district)} className="map-point" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected(d.district); }} aria-label={`Select ${d.district}`}>
            <circle cx={110 + d.x * 4.0} cy={40 + d.y * 3.65} r={selected === d.district ? 18 : 13} fill={selected === d.district ? '#E87556' : '#5273CF'} opacity=".15"/>
            <circle cx={110 + d.x * 4.0} cy={40 + d.y * 3.65} r={selected === d.district ? 7.5 : 5.5} fill={selected === d.district ? '#E87556' : '#557A61'} stroke="#FCFAF5" strokeWidth="2.5"/>
            {selected === d.district && <text x={110 + d.x * 4.0 + 13} y={40 + d.y * 3.65 - 10} className="map-point-label">{d.short}</text>}
          </g>)}
        </svg><div className="map-legend"><span><i className="legend-dot active-dot"/> Selected district</span><span><i className="legend-dot"/> Sample district</span><span>Values are illustrative</span></div></div>}
        {view === 'chart' && <div className="atlas-chart-view"><div className="chart-title-row"><div><span>COMPARATIVE VIEW</span><strong>{metric.label}</strong></div><small>{metric.unit}</small></div><div className="atlas-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={rows} layout="vertical" margin={{ top: 8, right: 26, bottom: 8, left: 8 }}><CartesianGrid strokeDasharray="3 5" horizontal={false} stroke="#DCE2EF"/><XAxis type="number" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: '#8190AA' }}/><YAxis type="category" dataKey="short" width={43} tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: '#64718A' }}/><Tooltip cursor={{ fill: '#EEF2FC' }} contentStyle={{ border: '1px solid #D6DFF0', borderRadius: 12, background: '#FFFFFF', fontSize: 12 }} formatter={(v: string | number) => [format(Number(v)), metric.label]}/><Bar dataKey={metric.key} fill="#3159CF" radius={[0, 6, 6, 0]} barSize={19} /></BarChart></ResponsiveContainer></div><p className="chart-footnote">District values shown for demonstration only. Hover a bar for its sample value.</p></div>}
        {view === 'table' && <div className="atlas-table-view"><div className="table-caption"><strong>District observations</strong><span>{rows.length} SAMPLE ROWS</span></div><div className="table-scroll"><table><thead><tr><th>District</th>{dataset === 'heat' ? <><th>Heat exposure</th><th>Plan readiness</th><th>Cooling access</th></> : <><th>Solar (GW)</th><th>Wind (GW)</th><th>Total (GW)</th></>}</tr></thead><tbody>{rows.map((d) => <tr key={d.district} className={selected === d.district ? 'row-selected' : ''} onClick={() => setSelected(d.district)}><td>{d.district}</td>{dataset === 'heat' ? <><td>{d.heatExposure}</td><td>{d.planReadiness}</td><td>{d.coolingAccess}</td></> : <><td>{d.solar.toFixed(1)}</td><td>{d.wind.toFixed(1)}</td><td>{d.totalCapacity.toFixed(1)}</td></>}</tr>)}</tbody></table></div><p className="chart-footnote">Select a row to inspect the district. All values are synthetic prototype data.</p></div>}
      </div>
      <aside className="atlas-detail"><div className="detail-top"><span>SELECTED DISTRICT</span><Activity size={17}/></div><h4>{selectedRecord.district}</h4><span className="detail-region">MAHARASHTRA, INDIA</span><div className="detail-rule"/><div className="detail-value"><span>{metric.label.toUpperCase()}</span><strong>{format(value)}<small>{dataset === 'heat' ? '/100' : ' GW'}</small></strong><div className="detail-meter"><i style={{ width: `${dataset === 'heat' ? value : Math.min(value / 5 * 100, 100)}%` }}/></div></div><div className="detail-mini-grid">{(dataset === 'heat' ? [{ label: 'Exposure', v: selectedRecord.heatExposure }, { label: 'Readiness', v: selectedRecord.planReadiness }, { label: 'Cooling', v: selectedRecord.coolingAccess }] : [{ label: 'Solar', v: selectedRecord.solar }, { label: 'Wind', v: selectedRecord.wind }, { label: 'Total', v: selectedRecord.totalCapacity }]).map((m) => <div key={m.label}><span>{m.label}</span><strong>{dataset === 'heat' ? m.v : m.v.toFixed(1)}</strong></div>)}</div><div className="detail-note"><b>READ THIS DATA</b><p>{dataset === 'heat' ? 'This demonstrator index separates heat exposure from planning readiness and cooling access. A high score is not, by itself, a complete risk assessment.' : 'Illustrative capacity values show how solar and wind assets could be compared across selected districts. They are not official installed-capacity figures.'}</p></div><div className="detail-actions"><a href={meta.file} download><ArrowDownToLine size={14}/> CSV</a><a href={meta.readme} download><FileText size={14}/> README</a></div></aside>
    </div>
    <div className="atlas-bottom"><span><Check size={13}/> Controls remain visible; no hidden filters.</span><span>DATA DESIGN PRINCIPLE / BN-OBS</span><span><a href="/datasets">Dataset documentation <ArrowUpRight size={13}/></a></span></div>
  </section>;
}
