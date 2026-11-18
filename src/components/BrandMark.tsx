import { Link } from 'react-router-dom';

export function BrandMark() {
  return <Link to="/" className="brand-lockup" aria-label="Bharatnomy home">
    <span className="brand-emblem"><span className="brand-emblem-inner">B</span><i /></span>
    <span className="brand-word"><strong>Bharatnomy</strong><small>INDEPENDENT RESEARCH</small></span>
  </Link>;
}
