
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Legend
} from 'recharts';
import { Download, FileText, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { MOCK_FINANCE } from '../constants';

const Finance: React.FC = () => {
  const currentMonthData = MOCK_FINANCE[MOCK_FINANCE.length - 1];
  const balance = currentMonthData.income - currentMonthData.expense;

  const summaryItems = [
    { label: 'Pemasukan Bulan Ini', value: currentMonthData.income, icon: <TrendingUp />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Pengeluaran Bulan Ini', value: currentMonthData.expense, icon: <TrendingDown />, color: 'text-rose-600', bg: 'bg-rose-50' },
    { label: 'Saldo Kas RT', value: balance, icon: <Wallet />, color: 'text-primary', bg: 'bg-primary/5' },
  ];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="py-12 sm:py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-4">Transparansi Keuangan</h1>
          <p className="text-slate-500 dark:text-slate-400">Laporan real-time kas warga untuk mewujudkan keterbukaan informasi.</p>
          <div className="h-1.5 w-20 bg-accent mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {summaryItems.map((item, i) => (
            <div key={i} className={`p-8 rounded-2xl border shadow-sm ${item.bg} dark:bg-slate-800`}>
              <div className={`p-3 rounded-xl inline-flex mb-4 ${item.color} bg-white dark:bg-slate-700`}>
                {/* Fix: cast to any to allow size prop in cloneElement */}
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <h4 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{item.label}</h4>
              <p className={`text-3xl font-extrabold ${item.color} dark:text-white`}>{formatCurrency(item.value)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Area */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-xl font-bold mb-8">Grafik Arus Kas (6 Bulan Terakhir)</h3>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MOCK_FINANCE}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000000}jt`} />
                  <Tooltip 
                    formatter={(val: number) => formatCurrency(val)}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Bar name="Pemasukan" dataKey="income" fill="#064e3b" radius={[4, 4, 0, 0]} />
                  <Bar name="Pengeluaran" dataKey="expense" fill="#facc15" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Reports Download Area */}
          <div className="bg-primary rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Download size={24} className="mr-3 text-accent" />
              Laporan PDF
            </h3>
            <p className="text-sm opacity-80 mb-8 leading-relaxed">Klik tombol di bawah untuk mengunduh laporan detail rincian pengeluaran per bulan dalam format PDF resmi.</p>
            <div className="space-y-4">
              {['Laporan Mei 2024', 'Laporan April 2024', 'Laporan Maret 2024'].map((report, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all group">
                  <div className="flex items-center">
                    <FileText size={20} className="mr-3 text-accent" />
                    <span className="font-medium">{report}</span>
                  </div>
                  <Download size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-8 border-b dark:border-slate-700">
            <h3 className="text-xl font-bold">Rincian Pengeluaran Terakhir</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700 text-slate-500 uppercase text-xs font-bold tracking-wider">
                  <th className="px-8 py-4">Tanggal</th>
                  <th className="px-8 py-4">Kategori</th>
                  <th className="px-8 py-4">Keterangan</th>
                  <th className="px-8 py-4">Jumlah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {[
                  { date: '12 Mei 2024', cat: 'Keamanan', desc: 'Gaji Satpam Malam', amount: 1500000 },
                  { date: '10 Mei 2024', cat: 'Kebersihan', desc: 'Bensin Motor Sampah', amount: 200000 },
                  { date: '05 Mei 2024', cat: 'Listrik', desc: 'Penerangan Jalan Umum', amount: 850000 },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    <td className="px-8 py-5 text-sm">{item.date}</td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-600 rounded-full text-xs font-semibold">{item.cat}</span>
                    </td>
                    <td className="px-8 py-5 text-sm font-medium">{item.desc}</td>
                    <td className="px-8 py-5 text-sm font-bold text-rose-600">-{formatCurrency(item.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
