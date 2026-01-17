
import React, { useState } from 'react';
import { FilePlus, Search, Clock, CheckCircle, XCircle, FileText, Send } from 'lucide-react';
import { MOCK_REQUESTS } from '../constants';
import { User } from '../types';

interface ServicesProps {
  currentUser: User | null;
}

const Services: React.FC<ServicesProps> = ({ currentUser }) => {
  const [activeTab, setActiveTab] = useState<'request' | 'status'>('request');
  const [formType, setFormType] = useState('');

  const renderStatusIcon = (status: string) => {
    switch(status) {
      case 'Selesai': return <CheckCircle size={18} className="text-emerald-500" />;
      case 'Diproses': return <Clock size={18} className="text-yellow-500" />;
      default: return <XCircle size={18} className="text-rose-500" />;
    }
  };

  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        
        {!currentUser && (
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-center mb-10 text-amber-800 animate-pulse">
            <div className="p-3 bg-amber-100 rounded-full mr-4">
               <XCircle size={24} />
            </div>
            <div>
              <p className="font-bold">Akses Terbatas</p>
              <p className="text-sm">Silakan Login sebagai warga untuk melakukan pengajuan surat secara online.</p>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold mb-2 text-center md:text-left">Layanan Warga Mandiri</h1>
            <p className="text-slate-500 text-center md:text-left">Mudah, cepat, dan terintegrasi dengan pengurus RT.</p>
          </div>
          <div className="flex bg-slate-200 dark:bg-slate-700 p-1.5 rounded-xl">
            <button 
              onClick={() => setActiveTab('request')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'request' ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Ajukan Surat
            </button>
            <button 
              onClick={() => setActiveTab('status')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'status' ? 'bg-primary text-white shadow-lg' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Status Pengajuan
            </button>
          </div>
        </div>

        {activeTab === 'request' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className={`bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 ${!currentUser ? 'opacity-50 pointer-events-none' : ''}`}>
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <FilePlus className="mr-3 text-primary" /> Formulir Pengajuan
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Jenis Surat</label>
                  <select 
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                    className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Pilih Jenis Surat</option>
                    <option value="KTP">Surat Pengantar KTP / KK</option>
                    <option value="SKDU">Surat Keterangan Domisili Usaha</option>
                    <option value="SKTM">Surat Keterangan Tidak Mampu</option>
                    <option value="Kematian">Surat Keterangan Kematian</option>
                    <option value="Lainnya">Laporan Kehilangan / Lainnya</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nama Lengkap</label>
                    <input type="text" defaultValue={currentUser?.name || ''} className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">NIK</label>
                    <input type="text" placeholder="Masukkan 16 digit NIK" className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tujuan Pengajuan</label>
                  <textarea rows={4} placeholder="Jelaskan untuk keperluan apa surat ini diajukan..." className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none"></textarea>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-xl border border-dashed border-slate-300 dark:border-slate-500">
                  <p className="text-xs text-slate-500 dark:text-slate-300 mb-2">Upload Lampiran (KTP/KK Scan - Opsional)</p>
                  <input type="file" className="text-xs" />
                </div>

                <button className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>Kirim Permohonan</span>
                </button>
              </form>
            </div>

            {/* Guide Section */}
            <div className="space-y-8">
               <div className="bg-primary text-white p-10 rounded-3xl shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-20">
                    <FileText size={120} />
                 </div>
                 <h3 className="text-2xl font-bold mb-6 relative z-10 text-accent">Alur Pengajuan Digital</h3>
                 <ul className="space-y-6 relative z-10">
                   {[
                     { step: '1', title: 'Isi Formulir', desc: 'Lengkapi data diri dan tujuan pengajuan surat.' },
                     { step: '2', title: 'Verifikasi Pengurus', desc: 'Sekretaris RT akan memeriksa data yang Anda kirimkan.' },
                     { step: '3', title: 'Tanda Tangan', desc: 'Ketua RT menandatangani surat secara digital atau fisik.' },
                     { step: '4', title: 'Pengambilan', desc: 'Anda akan menerima notifikasi WA untuk mengambil surat atau download PDF.' },
                   ].map((item, i) => (
                     <li key={i} className="flex items-start">
                       <span className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center font-bold mr-4 shrink-0">{item.step}</span>
                       <div>
                         <h4 className="font-bold">{item.title}</h4>
                         <p className="text-sm opacity-80">{item.desc}</p>
                       </div>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Butuh Bantuan?</h3>
                  <p className="text-sm text-slate-500 mb-6">Jika Anda kesulitan mengisi form, silakan hubungi Sekretaris RT melalui WhatsApp.</p>
                  <button className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center space-x-2">
                    <PhoneCall size={18} />
                    <span>WhatsApp Sekretaris</span>
                  </button>
               </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border flex items-center space-x-4 shadow-sm">
               <Search className="text-slate-400" />
               <input type="text" placeholder="Cari ID pengajuan atau nama..." className="bg-transparent w-full outline-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_REQUESTS.map((req) => (
                <div key={req.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-md hover:shadow-lg transition-all border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">ID #{req.id}</span>
                    <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold ${
                      req.status === 'Selesai' ? 'bg-emerald-100 text-emerald-700' : 
                      req.status === 'Diproses' ? 'bg-yellow-100 text-yellow-700' : 'bg-rose-100 text-rose-700'
                    }`}>
                      {renderStatusIcon(req.status)}
                      <span>{req.status}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 dark:text-white">{req.type}</h3>
                  <p className="text-sm text-slate-500 mb-4">{req.wargaName}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50 dark:border-slate-700">
                    <span className="text-xs text-slate-400">{req.date}</span>
                    <button className="text-xs font-bold text-primary hover:underline">Lihat Detail</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Internal icon dependency for this file
const PhoneCall = ({ size, className }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default Services;
