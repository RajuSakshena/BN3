import { Route, Routes } from 'react-router-dom';
import { SiteFrame } from './components/SiteFrame';
import StoryHome from './pages/StoryHome';
import Research from './pages/Research';
import DataLab from './pages/DataLab';
import DataLibrary from './pages/DataLibrary';
import About from './pages/About';
import Standards from './pages/Standards';
import Careers from './pages/Careers';

export default function App() {
  return <Routes><Route element={<SiteFrame />}>
    <Route index element={<StoryHome />} />
    <Route path="/research" element={<Research />} />
    <Route path="/data" element={<DataLab />} />
    <Route path="/datasets" element={<DataLibrary />} />
    <Route path="/about" element={<About />} />
    <Route path="/standards" element={<Standards />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="*" element={<StoryHome />} />
  </Route></Routes>;
}
