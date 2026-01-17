
import React, { useState } from 'react';
import { Camera, Video, Maximize2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  const photos = [
    { id: 1, title: 'HUT RI ke-78', url: 'https://picsum.photos/seed/hutri/800/600', cat: 'Sosial' },
    { id: 2, title: 'Posyandu Melati', url: 'https://picsum.photos/seed/posy/800/600', cat: 'Kesehatan' },
    { id: 3, title: 'Kerja Bakti Blok A', url: 'https://picsum.photos/seed/kerja/800/600', cat: 'Kebersihan' },
    { id: 4, title: 'Lomba Anak', url: 'https://picsum.photos/seed/lomba/800/600', cat: 'Sosial' },
    { id: 5, title: 'Rapat Warga Jan', url: 'https://picsum.photos/seed/rapat/800/600', cat: 'Umum' },
    { id: 6, title: 'Senam Pagi', url: 'https://picsum.photos/seed/senam/800/600', cat: 'Olahraga' },
  ];

  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Galeri Dokumentasi</h1>
          <p className="text-slate-500 dark:text-slate-400">Momen kebersamaan dan kegiatan warga RT 08.</p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-200 dark:bg-slate-700 p-1.5 rounded-2xl shadow-inner">
             <button 
               onClick={() => setActiveTab('photo')}
               className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'photo' ? 'bg-primary text-white shadow-xl' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}
             >
               <Camera size={20} />
               <span>Foto Kegiatan</span>
             </button>
             <button 
               onClick={() => setActiveTab('video')}
               className={`flex items-center space-x-2 px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'video' ? 'bg-primary text-white shadow-xl' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}
             >
               <Video size={20} />
               <span>Video</span>
             </button>
          </div>
        </div>

        {activeTab === 'photo' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((img) => (
              <div key={img.id} className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-100 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2">{img.cat}</span>
                  <h3 className="text-xl font-bold">{img.title}</h3>
                  <div className="mt-4 p-2 bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm self-end hover:bg-accent hover:text-primary cursor-pointer transition-colors">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {[1, 2].map(id => (
               <div key={id} className="bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden aspect-video shadow-xl border-4 border-white dark:border-slate-700 relative group">
                  <img src={`https://picsum.photos/seed/vid${id}/800/450`} alt="video" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent text-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent w-full">
                     <p className="font-bold text-lg">Dokumentasi Video {id}</p>
                     <p className="text-sm opacity-60">Durasi: 03:45</p>
                  </div>
               </div>
             ))}
          </div>
        )}

        <div className="mt-20 p-10 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-center">
           <h3 className="text-xl font-bold mb-4">Ingin Menitipkan Foto Kegiatan?</h3>
           <p className="text-slate-500 mb-8 max-w-md mx-auto">Bantu kami melengkapi galeri RT 08 dengan mengirimkan foto kegiatan Anda yang dilakukan di lingkungan Trompo Asri.</p>
           <button className="px-8 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all">Hubungi Admin Dokumentasi</button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
