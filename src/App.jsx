import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ViewTransition from './components/ViewTransition';
import Home from './views/Home';
import About from './views/About';
import Project from './views/Project';
import Certificates from './views/Certificates';
import Testimonials from './views/Testimonials';
import Contact from './views/Contact';

const VIEWS = {
  home: Home,
  about: About,
  project: Project,
  certificates: Certificates,
  testimonials: Testimonials,
  contact: Contact,
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const ActiveView = VIEWS[activeSection] || Home;

  return (
    <div className="h-screen flex flex-col bg-[#0a0a0a] text-[#f8fafc] font-body overflow-hidden select-none">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1 overflow-hidden relative">
        <ViewTransition viewKey={activeSection}>
          <ActiveView onNavigate={setActiveSection} />
        </ViewTransition>
      </main>
      <Footer activeSection={activeSection} onNavigate={setActiveSection} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#121212',
            color: '#f8fafc',
            border: '1px solid #f97316',
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
          },
        }}
      />
    </div>
  );
}
