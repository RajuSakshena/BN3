export type DatasetKey = 'heat' | 'energy';
export type DistrictRecord = {
  district: string;
  short: string;
  x: number;
  y: number;
  heatExposure: number;
  planReadiness: number;
  coolingAccess: number;
  solar: number;
  wind: number;
  totalCapacity: number;
};

// Synthetic values for the interactive prototype. These are not official statistics.
export const districtData: DistrictRecord[] = [
  { district: 'Mumbai', short: 'MUM', x: 19, y: 73, heatExposure: 82, planReadiness: 76, coolingAccess: 71, solar: 1.8, wind: 0.2, totalCapacity: 2.0 },
  { district: 'Pune', short: 'PUN', x: 38, y: 61, heatExposure: 73, planReadiness: 81, coolingAccess: 68, solar: 2.6, wind: 0.8, totalCapacity: 3.4 },
  { district: 'Nashik', short: 'NSK', x: 39, y: 35, heatExposure: 69, planReadiness: 64, coolingAccess: 52, solar: 2.1, wind: 1.2, totalCapacity: 3.3 },
  { district: 'Nagpur', short: 'NGP', x: 78, y: 43, heatExposure: 91, planReadiness: 59, coolingAccess: 44, solar: 1.6, wind: 0.3, totalCapacity: 1.9 },
  { district: 'Solapur', short: 'SOL', x: 55, y: 76, heatExposure: 88, planReadiness: 52, coolingAccess: 39, solar: 3.1, wind: 1.4, totalCapacity: 4.5 },
  { district: 'Jalgaon', short: 'JLG', x: 53, y: 27, heatExposure: 84, planReadiness: 57, coolingAccess: 47, solar: 2.4, wind: 0.6, totalCapacity: 3.0 },
  { district: 'Kolhapur', short: 'KOL', x: 35, y: 86, heatExposure: 61, planReadiness: 79, coolingAccess: 73, solar: 1.2, wind: 1.0, totalCapacity: 2.2 },
  { district: 'Amravati', short: 'AMR', x: 68, y: 30, heatExposure: 86, planReadiness: 62, coolingAccess: 46, solar: 2.0, wind: 0.4, totalCapacity: 2.4 },
  { district: 'Chandrapur', short: 'CHD', x: 84, y: 61, heatExposure: 89, planReadiness: 55, coolingAccess: 42, solar: 1.5, wind: 0.2, totalCapacity: 1.7 },
  { district: 'Chhatrapati Sambhajinagar', short: 'CSN', x: 60, y: 52, heatExposure: 78, planReadiness: 66, coolingAccess: 54, solar: 2.7, wind: 0.7, totalCapacity: 3.4 },
];

export const datasetMeta = {
  heat: {
    id: 'BN-CLM-001',
    title: 'District Heat Readiness Index',
    subtitle: 'A district-level view of heat exposure and preparedness across Maharashtra.',
    category: 'CLIMATE ADAPTATION',
    updated: 'Prototype · Nov 2026',
    unit: 'Index points · 0–100',
    fields: ['Heat exposure', 'Plan readiness', 'Cooling access'],
    description: 'A demonstrator composite index showing how a district-level climate dataset could bring exposure, local planning and cooling access into one comparable view.',
    file: '/data/district-heat-readiness-demo.csv',
    readme: '/data/district-heat-readiness-README.txt',
  },
  energy: {
    id: 'BN-ENR-002',
    title: 'District Renewable Capacity Snapshot',
    subtitle: 'An illustrative view of renewable generation capacity across selected Maharashtra districts.',
    category: 'ENERGY TRANSITION',
    updated: 'Prototype · Nov 2026',
    unit: 'Illustrative GW',
    fields: ['Solar capacity', 'Wind capacity', 'Total capacity'],
    description: 'A sample asset-and-capacity dataset demonstrating how a reader could compare the spatial distribution of renewable energy infrastructure.',
    file: '/data/district-renewables-demo.csv',
    readme: '/data/district-renewables-README.txt',
  },
} as const;

export const nationalSignals = [
  { label: 'Research lenses', value: '05', note: 'Connected fields' },
  { label: 'Prototype datasets', value: '02', note: 'Illustrative only' },
  { label: 'Geographic lens', value: 'DISTRICT', note: 'State by state' },
];
