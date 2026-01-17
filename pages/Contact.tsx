
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Kontak & Aspirasi</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Kami mendengar! Sampaikan kritik, saran, atau laporan Anda langsung kepada pengurus RT.</p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Informasi Kontak</h2>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="p-4 bg-primary text-white rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Hubungi Kami</p>
                    <p className="text-lg font-bold dark:text-white">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="p-4 bg-primary text-white rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email Resmi</p>
                    <p className="text-lg font-bold dark:text-white">rt08@trompoasri.id</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="p-4 bg-primary text-white rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Sekretariat RT</p>
                    <p className="text-lg font-bold dark:text-white">Balai Warga RT 08 Trompo Asri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-accent text-primary-dark rounded-3xl relative overflow-hidden shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Konsultasi WhatsApp</h3>
                <p className="mb-8 opacity-80">Ada kendala administrasi mendesak? Chat langsung dengan Ketua RT via WA Fast Response.</p>
                <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center space-x-2 hover:shadow-lg transition-all">
                  <MessageCircle size={20} />
                  <span>Mulai Chat</span>
                </button>
              </div>
              <div className="absolute bottom-0 right-0 p-8 opacity-20">
                <MessageCircle size={100} />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700">
            <h2 className="text-3xl font-bold mb-8">Kirim Aspirasi</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-primary" placeholder="Budi ..." />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">No. HP / WA</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-primary" placeholder="08..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Subjek Pesan</label>
                <select className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-primary">
                  <option>Kritik & Saran</option>
                  <option>Laporan Keamanan</option>
                  <option>Laporan Kebersihan</option>
                  <option>Aspirasi Pembangunan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Isi Aspirasi</label>
                <textarea rows={6} className="w-full p-4 rounded-xl border border-slate-200 dark:bg-slate-700 dark:border-slate-600 outline-none focus:ring-2 focus:ring-primary" placeholder="Tuliskan aspirasi Anda di sini..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2 transition-all">
                <Send size={20} />
                <span>Kirim Pesan Sekarang</span>
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 italic">Setiap aspirasi akan dijaga kerahasiaannya sesuai permintaan pengirim.</p>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 rounded-3xl overflow-hidden shadow-lg h-96 bg-slate-200 dark:bg-slate-700 relative flex items-center justify-center border border-slate-200 dark:border-slate-600">
           <div className="text-center">
              <MapPin size={48} className="mx-auto text-primary mb-4 opacity-50" />
              <p className="font-bold text-slate-500">Google Maps API terintegrasi di sini</p>
              <p className="text-sm text-slate-400">Wilayah RT 08 Desa Trompo Asri</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
