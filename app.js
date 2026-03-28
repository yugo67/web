const express = require('express');
const app = express();
const path = require('path');
const { features } = require('process');

// Setup EJS sebagai View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk file statis (CSS, Images, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route Landing Page
app.get('/', (req, res) => {
    // Data paket harga (biar gampang diubah-ubah)
    const packages = [
       { 
        name: 'Landing Page Branding', 
        category: 'website',
        price: '499.000', 
        features: [
            'Satu Halaman (Single Page)',
            'Domain .my.id (1 Tahun)',
            'Sertifikat Keamanan SSL (HTTPS)',
            'Desain Responsif (Mobile Friendly)',
            'Integrasi Direct WhatsApp',
            'Optimasi Kecepatan Loding Dasar',
            'Penyerahan Source Code'
        ] 
            },
            {   
                name: 'Profil Bisnis Pro', 
                category: 'website',
                price: '1.499.000', 
                features: [
                    'Hingga 5 Halaman Statis',
                    'Domain Utama .com / .id (1 Tahun)',
                    'SEO On-Page (Meta Tag & Keyword)',
                    'Integrasi Google Maps & Kontak',
                    'Pemasangan Analytics (Google Search Console)',
                    'Hosting SSD Berkecepatan Tinggi',
                    'Maintenance & Backup 1 Bulan'
                ] 
            },
            { 
                name: 'E-Commerce & Custom Web', 
                category: 'website',
                price: '3.500.000', // Harga disesuaikan karena 'Custom' biasanya lebih mahal
                features: [
                    'Halaman Dinamis (Katalog Produk)',
                    'Panel Admin untuk Kelola Konten',
                    'Sistem Manajemen Stok & Pesanan',
                    'Integrasi Hitung Ongkir Otomatis',
                    'Fitur Blog / Artikel Berita',
                    'Keamanan Tingkat Lanjut (Anti-Spam)',
                    'Pelatihan Penggunaan Sistem'
                ] 
            },
            {
                name: 'Sistem Dasar (MVP)',
                category: 'sistem',
                price: '2.500.000', 
                features: [
                    'Arsitektur Sistem Tunggal (Monolith)',
                    'Manajemen Data Inti (CRUD)',
                    'Otentikasi User & Enkripsi Password',
                    'Desain UI/UX Responsif & Modern',
                    'Satu Hak Akses Pengguna (Admin)',
                    'Domain & Hosting (Shared) 1 Tahun',
                    'Bantuan Teknis 1 Bulan'
                ],
                recommended: false 
            },
            {
                name: 'Solusi Bisnis Digital',
                category: 'sistem',
                price: '4.500.000', 
                features: [
                    'Sistem Multi-User (Role-Based Access)',
                    'Dashboard Statistik & Visualisasi Data',
                    'Sistem Pelaporan Otomatis (PDF/Excel)',
                    'Integrasi API Layanan Pihak Ketiga',
                    'Keamanan JWT & Proteksi Middleware',
                    'Optimasi Database & Indexing Query',
                    'Bantuan Teknis 3 Bulan'
                ],
                recommended: true 
            },
            {
                name: 'Arsitektur Kustom Kompleks',
                category: 'sistem',
                price: '8.000.000', 
                features: [
                    'Sistem Performa Tinggi (High-Performance)',
                    'Sinkronisasi Data Real-time (Websocket)',
                    'Dokumentasi API Standar Industri',
                    'Integrasi Pembayaran / Logistik Otomatis',
                    'Audit Keamanan & Shield SQL Injection',
                    'Server Cloud (VPS/Dedicated) 1 Tahun',
                    'Dukungan Prioritas & Maintenance 6 Bulan'
                ],
                recommended: false 
            }
    ];

    res.render('index', { packages });
});

// Jalankan Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server lari kencang di http://localhost:${PORT}`);
});

//const nodemailer = require('nodemailer');
const { error } = require('console');
app.use(express.urlencoded({extended:true}))

app.post('/send-message', (req, res) => {
    res.send("Form jalan tanpa email");
});
//app.post('/send-message', async (req, res) => {
    //const {nama,email,pesan} = req.body;

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'info@codingkita.com',
            pass:'Akulalie321##'
        }
    });
    let mailOptions = {
        from:email,
        to: 'info@codingkita.com',
        subject: `Pesan Baru dari ${nama} (codingkita)`,
        text: `Nama: ${nama}\nemail:${email}\npesan:${pesan}`
    };
    try {
        await transporter.sendMail(mailOptions);
        res.send("<script>alert('Pesan terkirim!'); window.location='/';</script>");
    }catch (error) {
        res.status(500).send("Gagal Mengirim Pesann!!")
    }
});
