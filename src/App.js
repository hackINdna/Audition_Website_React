import './App.css';
import Nav from './components/Nav';
import ProfileCreated from './components/ProfileCreated';
import ProfileEdit from './components/ProfileEdit';
import StudioPage from './components/StudioPage';
import HomePage from './components/HomePage';
import ProfileCreatedMedia from './components/ProfileCreatedMedia';
import StudioDetail from './components/StudioDetail';
import DownloadSection from './components/DownloadSection';
// import StudioPage from './components/StudioPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BasicProfileSec from './components/BasicProfileSec';
import AppearProfileSec from './components/AppearProfileSec';
import SubsProfileSec from './components/SubsProfileSec';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/studio-detail" element={<StudioDetail />} />
          <Route path="/download-section" element={<DownloadSection />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/profile-created" element={<ProfileCreated />} />
          <Route path="/basic-profile-sec" element={<BasicProfileSec />} />
          <Route path="/appear-profile-sec" element={<AppearProfileSec />} />
          <Route path="/subs-profile-sec" element={<SubsProfileSec />} />

          <Route path="/profile-created-media" element={<ProfileCreatedMedia />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
