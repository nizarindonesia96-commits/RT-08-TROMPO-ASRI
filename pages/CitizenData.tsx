
import React from 'react';
import { Users, ShoppingBag, PieChart as PieChartIcon, Lock, ChevronRight } from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as RechartsTooltip, 
  Legend as RechartsLegend 
} from 'recharts';
import { User } from '../types';

interface CitizenDataProps {
  currentUser: User | null;
}

const CitizenData: React.FC<CitizenDataProps> = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-full mb-8">
           <Lock size={64} className="text-primary opacity-20" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Halaman Terbatas</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-10">Data warga bersifat privat dan hanya dapat diakses oleh warga yang terdaftar. Silakan login terlebih dahulu.</p>
        <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg">Login Warga</button>
      </div>
    );
  }

  const demographicData = [
    { name: 'Balita', value: 45 },
    { name: 'Anak-anak', value: 80 },
    { name: 'Remaja', value: 120 },
    { name: 'Dewasa', value: 160 },
    { name: 'Lansia', value: 45 },
  ];

  const COLORS = ['#064e3b', '#065f46', '#059669', '#34d399', '#facc15'];

  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Data Lingkungan Kita</h1>
            <p className="text-slate-500 dark:text-slate-400">Statistik demografi dan potensi ekonomi RT 08.</p>
            <div className="h-1.5 w-20 bg-accent mt-6 rounded-full"></div>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 px-6 py-3 rounded-full flex items-center text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
             <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
             <span className="text-sm font-bold uppercase tracking-widest">Update 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Demographic Chart */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <PieChartIcon className="mr-3 text-primary" /> Distribusi Usia
            </h3>
            <div className="h-80 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                   <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                   >
                     {demographicData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                   </Pie>
                   <RechartsTooltip />
                   <RechartsLegend />
                 </PieChart>
               </ResponsiveContainer>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-700 grid grid-cols-2 gap-4">
               <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  <p className="text-xs text-slate-500 uppercase font-bold">Laki-laki</p>
                  <p className="text-2xl font-bold">215</p>
               </div>
               <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl">
                  <p className="text-xs text-slate-500 uppercase font-bold">Perempuan</p>
                  <p className="text-2xl font-bold">235</p>
               </div>
            </div>
          </div>

          {/* UMKM Section */}
          <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold flex items-center">
                <ShoppingBag className="mr-3 text-primary" /> UMKM Warga
              </h3>
              <button className="text-sm font-bold text-primary dark:text-accent hover:underline flex items-center">
                Lihat Katalog <ChevronRight size={16} />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Catering Bu Ani", type: "Kuliner", desc: "Aneka nasi kotak dan prasmanan." },
                { name: "Sembako Pak Haji", type: "Retail", desc: "Kebutuhan harian harga terjangkau." },
                { name: "Bengkel Jaya", type: "Jasa", desc: "Servis motor dan tambal ban 24 jam." },
                { name: "Laundry Bersih", type: "Jasa", desc: "Cuci kilat 1 hari selesai." },
              ].map((shop, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{shop.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-accent text-primary-dark rounded-full group-hover:bg-white/20 group-hover:text-white">{shop.type}</span>
                  </div>
                  <p className="text-sm text-slate-500 group-hover:text-white/80">{shop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenData;
