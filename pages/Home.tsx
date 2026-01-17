
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FilePlus, 
  MessageSquareWarning, 
  CreditCard, 
  ArrowRight,
  TrendingUp,
  Users as UsersIcon,
  Home as HomeIcon,
  Calendar
} from 'lucide-react';
import { MOCK_STATS, MOCK_ANNOUNCEMENTS } from '../constants';

const Home: React.FC = () => {
  const quickActions = [
    { name: 'Ajukan Surat', path: '/layanan', icon: <FilePlus className="text-blue-500" />, color: 'bg-blue-50 hover:bg-blue-100 border-blue-200' },
    { name: 'Lapor Masalah', path: '/kontak', icon: <MessageSquareWarning className="text-red-500" />, color: 'bg-red-50 hover:bg-red-100 border-red-200' },
    { name: 'Bayar Iuran', path: '/keuangan', icon: <CreditCard className="text-emerald-500" />, color: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200' },
  ];

  const statsItems = [
    { label: 'Kepala Keluarga', value: MOCK_STATS.totalKK, icon: <HomeIcon /> },
    { label: 'Total Warga', value: MOCK_STATS.totalWarga, icon: <UsersIcon /> },
    { label: 'Wilayah RT', value: MOCK_STATS.rtWilayah, icon: <TrendingUp /> },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[450px] sm:h-[600px] flex items-center justify-center overflow-hidden bg-primary-dark">
        <img 
          src="https://picsum.photos/seed/trompoasri/1600/900" 
          alt="Desa Trompo Asri" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105 hover:scale-100 transition-transform duration-10000"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            RT 08 <span className="text-accent">Trompo Asri</span>
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 mb-10 font-light leading-relaxed">
            Menuju lingkungan yang bersih, aman, dan digital. Akses semua kebutuhan warga hanya dalam satu sentuhan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/layanan" className="w-full sm:w-auto px-8 py-4 bg-accent text-primary-dark rounded-full font-bold text-lg hover:shadow-xl hover:bg-yellow-300 transition-all flex items-center justify-center">
              Layanan Mandiri
            </Link>
            <Link to="/profil" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Kenali RT Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions - Floating Container */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 sm:-mt-20 relative z-20">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 border border-slate-100 dark:border-slate-700">
          {quickActions.map((action) => (
            <Link 
              key={action.name} 
              to={action.path}
              className={`group p-6 rounded-xl border flex flex-col items-center text-center transition-all ${action.color}`}
            >
              <div className="p-4 rounded-full bg-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                {/* Fix: cast to any to allow size prop in cloneElement */}
                {React.cloneElement(action.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-xl font-bold dark:text-slate-800">{action.name}</h3>
              <p className="text-sm text-slate-500 mt-2">Akses cepat layanan tanpa harus ke Balai RT.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Statistik Lingkungan</h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {statsItems.map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-b-4 border-primary text-center">
              <div className="inline-flex p-4 rounded-2xl bg-primary-light/10 text-primary mb-6">
                {/* Fix: cast to any to allow size prop in cloneElement */}
                {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h4 className="text-slate-500 dark:text-slate-400 font-medium mb-2 uppercase tracking-wide text-sm">{stat.label}</h4>
              <p className="text-4xl font-extrabold text-primary dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-20 bg-slate-100 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Pengumuman Terbaru</h2>
              <p className="text-slate-500 mt-2">Informasi terkini seputar kegiatan warga.</p>
            </div>
            <Link to="/info" className="hidden sm:flex items-center text-primary font-bold hover:underline">
              Lihat Semua <ArrowRight size={20} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_ANNOUNCEMENTS.map((news) => (
              <div key={news.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700">
                <div className="h-48 overflow-hidden relative">
                  <img src={news.image || 'https://picsum.photos/400/300'} alt={news.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{news.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-slate-400 text-xs mb-3">
                    <Calendar size={14} className="mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 dark:text-white">{news.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {news.summary}
                  </p>
                  <Link to="/info" className="text-primary dark:text-accent font-bold text-sm flex items-center">
                    Baca Selengkapnya <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <Link to="/info" className="sm:hidden w-full mt-8 flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200 font-bold">
            Lihat Semua Pengumuman
          </Link>
        </div>
      </section>

      {/* Welcome Message (Chairman) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-primary rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center gap-12 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-accent shrink-0 relative z-10">
            <img src="https://picsum.photos/seed/chairman/400/400" alt="Ketua RT" className="w-full h-full object-cover" />
          </div>
          
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Sambutan Ketua RT 08</h3>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">"Gotong Royong Adalah Kunci Kemajuan Kita"</h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 font-light italic mb-8">
              "Assalamu'alaikum Wr. Wb. Melalui website ini, kami ingin memudahkan bapak/ibu warga RT 08 dalam mengurus administrasi dan mendapatkan informasi terbaru tanpa harus meninggalkan kenyamanan rumah. Mari kita wujudkan RT 08 yang mandiri and saling peduli."
            </p>
            <p className="font-bold text-xl">— Bpk. Hendra Kusuma, S.T.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
