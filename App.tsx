
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Users, 
  Info, 
  FileText, 
  Wallet, 
  Image as ImageIcon, 
  PhoneCall, 
  Menu, 
  X,
  LogOut,
  User as UserIcon,
  Sun,
  Moon
} from 'lucide-react';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Announcements from './pages/Announcements';
import Services from './pages/Services';
import Finance from './pages/Finance';
import Contact from './pages/Contact';
import CitizenData from './pages/CitizenData';
import Gallery from './pages/Gallery';
import { APP_NAME, SLOGAN } from './constants';
import { User, UserRole } from './types';

// Simple Wrapper to handle Scroll to Top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Mock Login for Demo
  const handleMockLogin = (role: UserRole) => {
    setCurrentUser({
      id: '1',
      name: 'Bpk. Hendra Kusuma',
      role: role,
      address: 'Jl. Melati No. 45'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'Beranda', path: '/', icon: <HomeIcon size={20} /> },
    { name: 'Profil', path: '/profil', icon: <Users size={20} /> },
    { name: 'Informasi', path: '/info', icon: <Info size={20} /> },
    { name: 'Layanan', path: '/layanan', icon: <FileText size={20} /> },
    { name: 'Keuangan', path: '/keuangan', icon: <Wallet size={20} /> },
    { name: 'Data Warga', path: '/data', icon: <UserIcon size={20} />, private: true },
    { name: 'Galeri', path: '/galeri', icon: <ImageIcon size={20} /> },
    { name: 'Kontak', path: '/kontak', icon: <PhoneCall size={20} /> },
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
        
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 bg-primary text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">
              
              {/* Logo */}
              <Link to="/" className="flex flex-col items-start">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-accent">{APP_NAME}</span>
                <span className="hidden sm:block text-xs font-light opacity-90">{SLOGAN}</span>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center space-x-4">
                {navItems.filter(item => !item.private || currentUser).map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-primary-light transition-colors text-sm font-medium"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                
                <div className="h-6 w-px bg-primary-light mx-2"></div>

                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-primary-light transition-colors"
                >
                  {darkMode ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
                </button>

                {currentUser ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">{currentUser.role}</span>
                      <span className="text-sm font-semibold truncate max-w-[120px]">{currentUser.name}</span>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                      title="Logout"
                    >
                      <LogOut size={18} />
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleMockLogin(UserRole.KETUA)}
                    className="bg-accent text-primary-dark px-4 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-sm"
                  >
                    Login Warga
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-2">
                <button onClick={toggleDarkMode} className="p-2">
                  {darkMode ? <Sun size={24} className="text-accent" /> : <Moon size={24} />}
                </button>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md focus:outline-none"
                >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-primary-dark shadow-xl border-t border-primary-light animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.filter(item => !item.private || currentUser).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-3 px-4 py-4 rounded-md text-base font-semibold hover:bg-primary-light border-b border-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
                {!currentUser ? (
                  <button 
                    onClick={() => handleMockLogin(UserRole.WARGA)}
                    className="w-full mt-4 bg-accent text-primary-dark font-bold py-4 rounded-xl flex items-center justify-center space-x-2"
                  >
                    <UserIcon size={20} />
                    <span>Login Sebagai Warga</span>
                  </button>
                ) : (
                  <button 
                    onClick={handleLogout}
                    className="w-full mt-4 bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2"
                  >
                    <LogOut size={20} />
                    <span>Keluar (Logout)</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/info" element={<Announcements />} />
            <Route path="/layanan" element={<Services currentUser={currentUser} />} />
            <Route path="/keuangan" element={<Finance />} />
            <Route path="/data" element={<CitizenData currentUser={currentUser} />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-primary-dark text-white/80 py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">{APP_NAME}</h3>
              <p className="text-sm leading-relaxed mb-6">
                Pusat administrasi dan informasi digital warga RT 08 Desa Trompo Asri. Kami berkomitmen untuk transparansi dan kemudahan layanan.
              </p>
              <div className="flex space-x-4">
                 {/* Social Media Placeholder Icons */}
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent hover:text-primary transition-colors cursor-pointer">
                   <PhoneCall size={20} />
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Tautan Cepat</h4>
              <ul className="space-y-3">
                <li><Link to="/profil" className="hover:text-accent transition-colors">Visi & Misi</Link></li>
                <li><Link to="/layanan" className="hover:text-accent transition-colors">Ajukan Surat</Link></li>
                <li><Link to="/keuangan" className="hover:text-accent transition-colors">Laporan Keuangan</Link></li>
                <li><Link to="/kontak" className="hover:text-accent transition-colors">Aspirasi Warga</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Lokasi Kami</h4>
              <p className="text-sm leading-relaxed">
                Desa Trompo Asri, Kec. Jabon<br />
                Kabupaten Sidoarjo, Jawa Timur<br />
                Indonesia, 61276
              </p>
              <div className="mt-4 p-4 bg-primary rounded-lg border border-primary-light">
                <p className="text-xs italic text-accent">"Gotong Royong Membangun Lingkungan"</p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-xs">
            &copy; {new Date().getFullYear()} RT 08 Trompo Asri. All Rights Reserved. Created for a Better Neighborhood.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
