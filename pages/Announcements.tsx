
import React, { useState } from 'react';
import { Calendar, Tag, Search, Filter } from 'lucide-react';
import { MOCK_ANNOUNCEMENTS } from '../constants';

const Announcements: React.FC = () => {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'Sosial', 'Kesehatan', 'Keamanan', 'Umum'];

  const filteredNews = filter === 'Semua' 
    ? MOCK_ANNOUNCEMENTS 
    : MOCK_ANNOUNCEMENTS.filter(n => n.category === filter);

  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Informasi & Kegiatan</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Update terkini mengenai lingkungan RT 08 Trompo Asri.</p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
             <Filter size={20} className="text-slate-400 mr-2 shrink-0" />
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-5 py-2 rounded-full text-sm font-bold transition-all shrink-0 ${
                   filter === cat ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'
                 }`}
               >
                 {cat}
               </button>
             ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Cari pengumuman..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {filteredNews.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row h-full sm:h-auto">
                {item.image && (
                  <div className="sm:w-1/3 shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 sm:p-10 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary dark:text-accent rounded-lg text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    <span className="flex items-center text-slate-400 text-xs">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold mb-4 group-hover:text-primary transition-colors dark:text-white leading-tight">{item.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">{item.content}</p>
                  <button className="mt-auto inline-flex items-center font-bold text-primary dark:text-accent hover:underline">
                    Baca Selengkapnya
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            {/* Agenda Box */}
            <div className="bg-primary-dark rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center text-accent">
                <Tag size={24} className="mr-2" />
                Agenda RT Mendatang
              </h3>
              <div className="space-y-6">
                {[
                  { date: '17 Agt', event: 'Upacara HUT RI ke-79', time: '08:00 WIB' },
                  { date: '25 Agt', event: 'Lomba Anak-anak', time: '15:30 WIB' },
                  { date: '31 Agt', event: 'Malam Tirakatan', time: '19:00 WIB' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all">
                       <span className="text-xs font-bold">{item.date.split(' ')[1]}</span>
                       <span className="text-lg font-extrabold -mt-1">{item.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{item.event}</h4>
                      <p className="text-xs opacity-60">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-6">Kontak Darurat</h3>
              <div className="space-y-4">
                <div className="p-4 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex justify-between items-center border border-rose-100 dark:border-rose-900/50">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">Keamanan RT</span>
                  <span className="font-mono font-bold">0812-3456-XXXX</span>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex justify-between items-center border border-blue-100 dark:border-blue-900/50">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">Bimaspol</span>
                  <span className="font-mono font-bold">0811-XXXX-XXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
