
import React from 'react';
import { ShieldCheck, Target, Heart, MapPin, Users } from 'lucide-react';

const Profile: React.FC = () => {
  const values = [
    { title: 'Amanah', icon: <ShieldCheck />, desc: 'Menjaga kepercayaan warga dalam setiap kebijakan.' },
    { title: 'Transparan', icon: <Target />, desc: 'Keterbukaan dalam laporan keuangan dan kegiatan.' },
    { title: 'Guyub', icon: <Heart />, desc: 'Membangun keharmonisan antar tetangga.' },
  ];

  const structure = [
    { name: 'Hendra Kusuma', role: 'Ketua RT', photo: 'https://picsum.photos/seed/p1/200/200' },
    { name: 'Samsul Arifin', role: 'Sekretaris', photo: 'https://picsum.photos/seed/p2/200/200' },
    { name: 'Siti Rahayu', role: 'Bendahara', photo: 'https://picsum.photos/seed/p3/200/200' },
    { name: 'Budi Wahono', role: 'Keamanan', photo: 'https://picsum.photos/seed/p4/200/200' },
  ];

  return (
    <div className="py-12 sm:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Profil RT 08 Trompo Asri</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Mengenal lebih dekat struktur organisasi, sejarah, dan nilai-nilai yang kami pegang.</p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://picsum.photos/seed/history/800/600" alt="Sejarah RT" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="p-2 bg-primary/10 rounded-lg mr-4 text-primary"><MapPin size={28} /></span>
              Sejarah Singkat
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>RT 08 Desa Trompo Asri dibentuk pada tahun 2010 seiring dengan berkembangnya area pemukiman di wilayah Trompo. Awalnya hanya terdiri dari 15 kepala keluarga yang memiliki semangat kebersamaan tinggi.</p>
              <p>Hingga saat ini, RT 08 telah tumbuh menjadi komunitas yang solid dengan lebih dari 120 kepala keluarga. Kami terus berinovasi dalam memberikan pelayanan terbaik bagi warga melalui berbagai program digitalisasi dan pemberdayaan ekonomi lokal.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-primary rounded-3xl p-10 sm:p-20 text-white mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-accent">Visi</h2>
              <p className="text-2xl font-light italic leading-snug">
                "Mewujudkan lingkungan RT 08 yang mandiri, cerdas digital, religius, dan menjunjung tinggi nilai gotong royong demi kesejahteraan bersama."
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-accent">Misi</h2>
              <ul className="space-y-6">
                {[
                  'Menyelenggarakan administrasi yang transparan berbasis teknologi.',
                  'Meningkatkan keamanan dan kebersihan lingkungan secara berkala.',
                  'Mempererat tali silaturahmi antar warga melalui kegiatan sosial.',
                  'Mendukung pertumbuhan UMKM di lingkungan warga RT 08.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center shrink-0 font-bold mr-4">{i + 1}</span>
                    <p className="text-lg opacity-90">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((v, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-lg border-t-4 border-primary text-center">
              <div className="inline-flex p-4 rounded-full bg-slate-100 dark:bg-slate-700 text-primary dark:text-accent mb-6">
                {/* Fix: cast to any to allow size prop in cloneElement */}
                {React.cloneElement(v.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{v.title}</h3>
              <p className="text-slate-500 dark:text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Organization Structure */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Users size={32} className="mr-3 text-primary" />
              Struktur Pengurus
            </h2>
            <p className="text-slate-500">Masa Bakti 2022 - 2025</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {structure.map((person, i) => (
              <div key={i} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={person.photo} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold dark:text-white">{person.name}</h4>
                  <p className="text-primary dark:text-accent font-medium mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
