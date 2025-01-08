export const chatMessages = [
  {
    message:
      'Halo! Selamat datang di layanan bantuan kami. Ada yang bisa saya bantu hari ini?',
    isUser: false,
    // avatar: require('./../../assets/chat-bot-3.png'),
    timestamp: '14:30',
  },
  {
    message:
      'Halo, saya ingin mendapatkan informasi tentang produk asuransi kesehatan.',
    isUser: true,
    timestamp: '14:31',
  },
  {
    message:
      'Tentu! Kami memiliki beberapa paket asuransi kesehatan yang bisa disesuaikan dengan kebutuhan Anda. Bisa tolong beritahu saya usia dan kondisi kesehatan Anda saat ini?',
    isUser: false,
    timestamp: '14:32',
    // avatar: require('./../../assets/chat-bot-3.png'),
  },
  {
    message: 'Saya berusia 35 tahun dan secara umum dalam kondisi sehat.',
    isUser: true,
    timestamp: '14:33',
  },
  {
    message:
      'Baik, untuk usia Anda, kami merekomendasikan paket Asuransi Kesehatan Komprehensif dengan manfaat rawat inap, rawat jalan, dan beberapa tindakan medis tambahan.',
    isUser: false,
    timestamp: '14:34',
    // avatar: require('./../../assets/chat-bot-3.png'),
  },
  {
    message: 'Berapa premi bulanannya?',
    isUser: true,
    timestamp: '14:35',
  },
  {
    message:
      'Untuk paket ini, premi bulanan berkisar antara Rp 300.000 - Rp 500.000 tergantung detail coverage yang Anda pilih. Apakah Anda ingin melihat rincian lebih detail?',
    isUser: false,
    timestamp: '14:36',
    // avatar: require('./../../assets/chat-bot-3.png'),
  },
  {
    message: 'Ya, saya tertarik. Bisa kirimkan detail lengkapnya?',
    isUser: true,
    timestamp: '14:37',
  },
  {
    message:
      'Tentu! Saya akan mengirimkan dokumen lengkap paket asuransi ke email Anda. Apakah Anda sudah mendaftar di sistem kami?',
    isUser: false,
    timestamp: '14:38',
    // avatar: require('./../../assets/chat-bot-3.png'),
  },
];

export const dummyResponses = [
  {
    keywords: ['halo', 'hai', 'hello'],
    responses: [
      'Hai! Ada yang bisa saya bantu?',
      'Selamat datang! Ada pertanyaan apa hari ini?',
      'Halo! Silakan ajukan pertanyaan Anda.',
    ],
  },
  {
    keywords: ['cuaca', 'suhu', 'iklim'],
    responses: [
      'Hari ini cuaca sedang cerah.',
      'Menurut prakiraan, suhu hari ini sekitar 28°C.',
      'Cuaca hari ini cukup nyaman untuk beraktivitas di luar.',
    ],
  },
  {
    keywords: ['jam', 'waktu', 'pukul'],
    responses: [
      'Saat ini pukul {currentTime}.',
      'Waktu sekarang adalah {currentTime}.',
      'Jam menunjukkan {currentTime}.',
    ],
  },
  {
    keywords: ['siapa kamu', 'nama kamu', 'tentang kamu'],
    responses: [
      'Saya adalah asisten AI yang siap membantu Anda.',
      'Nama saya adalah ChatBot, asisten virtual Anda.',
      'Saya adalah program AI yang dirancang untuk membantu menjawab pertanyaan Anda.',
    ],
  },
  {
    keywords: ['terima kasih', 'thanks', 'makasih'],
    responses: [
      'Sama-sama! Senang bisa membantu.',
      'Dengan senang hati!',
      'Tidak masalah, itulah tugas saya.',
    ],
  },
  {
    keywords: ['cuaca buruk', 'hujan', 'badai'],
    responses: [
      'Sepertinya akan turun hujan. Sebaiknya siapkan payung.',
      'Prakiraan cuaca menunjukkan kemungkinan hujan.',
      'Waspada dengan cuaca buruk hari ini.',
    ],
  },
  {
    keywords: ['makanan', 'makan siang', 'sarapan'],
    responses: [
      'Apa makanan favorit Anda?',
      'Sudah makan hari ini?',
      'Saya bisa memberikan rekomendasi makanan enak!',
    ],
  },
  {
    keywords: ['hobi', 'kegiatan', 'waktu luang'],
    responses: [
      'Apa hobi favorit Anda?',
      'Saya senang membantu orang menemukan informasi!',
      'Di waktu luang, saya belajar dari interaksi dengan Anda!',
    ],
  },
  {
    keywords: ['berita', 'informasi terbaru', 'update'],
    responses: [
      'Berita terbaru bisa Anda cek di portal berita favorit Anda.',
      'Saya bisa membantu mencari informasi terkini.',
      'Ada banyak berita menarik hari ini!',
    ],
  },
  {
    keywords: ['film', 'bioskop', 'nonton'],
    responses: [
      'Film apa yang terakhir Anda tonton?',
      'Ada banyak film bagus yang sedang tayang di bioskop!',
      'Saya bisa merekomendasikan film yang menarik untuk ditonton!',
    ],
  },
  {
    keywords: ['musik', 'lagu', 'artis'],
    responses: [
      'Genre musik apa yang Anda suka?',
      'Saya bisa membantu mencari lagu favorit Anda.',
      'Musik bisa membuat hari lebih menyenangkan!',
    ],
  },
  {
    keywords: ['game', 'permainan', 'video game'],
    responses: [
      'Apakah Anda suka bermain game?',
      'Game apa yang sedang populer saat ini?',
      'Saya bisa merekomendasikan game seru untuk dimainkan!',
    ],
  },
  {
    keywords: ['olahraga', 'sepak bola', 'basket'],
    responses: [
      'Olahraga apa yang Anda sukai?',
      'Menjaga kebugaran sangat penting!',
      'Saya bisa memberikan informasi tentang olahraga favorit Anda!',
    ],
  },
  {
    keywords: ['wisata', 'liburan', 'travel'],
    responses: [
      'Apakah Anda punya rencana liburan?',
      'Ada banyak tempat wisata menarik untuk dikunjungi!',
      'Saya bisa membantu mencari destinasi liburan terbaik untuk Anda!',
    ],
  },
  {
    keywords: ['motivasi', 'semangat', 'inspirasi'],
    responses: [
      'Jangan pernah menyerah, teruslah berjuang!',
      'Setiap hari adalah kesempatan baru untuk sukses!',
      'Kesuksesan dimulai dari langkah kecil yang konsisten.',
    ],
  },
  {
    keywords: ['teknologi', 'gadget', 'smartphone'],
    responses: [
      'Teknologi berkembang sangat cepat!',
      'Ada banyak inovasi menarik di dunia teknologi.',
      'Saya bisa memberikan informasi tentang gadget terbaru!',
    ],
  },
  {
    keywords: ['mobil', 'motor', 'kendaraan'],
    responses: [
      'Apakah Anda suka otomotif?',
      'Mobil atau motor, mana yang lebih Anda sukai?',
      'Saya bisa memberikan informasi tentang kendaraan terbaru!',
    ],
  },
  {
    keywords: ['sejarah', 'masa lalu', 'peristiwa'],
    responses: [
      'Sejarah selalu menarik untuk dipelajari!',
      'Ada banyak peristiwa bersejarah yang menarik untuk diketahui.',
      'Saya bisa membantu Anda menemukan informasi sejarah!',
    ],
  },
  {
    keywords: ['sains', 'penelitian', 'ilmu pengetahuan'],
    responses: [
      'Sains membantu kita memahami dunia lebih baik!',
      'Ada banyak penemuan menarik di bidang sains!',
      'Saya bisa memberikan informasi ilmiah yang menarik!',
    ],
  },
  {
    keywords: ['astronomi', 'bintang', 'planet'],
    responses: [
      'Apakah Anda tertarik dengan luar angkasa?',
      'Bintang dan planet sangat menarik untuk dipelajari!',
      'Saya bisa membantu Anda mencari informasi tentang astronomi!',
    ],
  },
  {
    keywords: ['coding', 'pemrograman', 'developer'],
    responses: [
      'Bahasa pemrograman apa yang Anda gunakan?',
      'Coding adalah seni dan logika yang menyatu!',
      'Saya bisa membantu memberikan tips pemrograman!',
    ],
  },
  {
    keywords: ['keuangan', 'investasi', 'ekonomi'],
    responses: [
      'Mengelola keuangan dengan baik sangat penting!',
      'Investasi bisa membantu meningkatkan aset Anda!',
      'Saya bisa membantu mencari informasi keuangan yang berguna!',
    ],
  },
  {
    keywords: ['meditasi', 'relaksasi', 'kesehatan mental'],
    responses: [
      'Meditasi bisa membantu menenangkan pikiran.',
      'Kesehatan mental sama pentingnya dengan kesehatan fisik.',
      'Luangkan waktu sejenak untuk relaksasi.',
    ],
  },
  {
    keywords: ['kesehatan', 'dokter', 'medis'],
    responses: [
      'Menjaga kesehatan adalah hal utama!',
      'Apakah Anda memiliki pertanyaan tentang kesehatan?',
      'Saya bisa memberikan informasi kesehatan yang bermanfaat!',
    ],
  },
  {
    keywords: ['kuliner', 'makanan enak', 'restoran'],
    responses: [
      'Ada banyak makanan enak untuk dicoba!',
      'Restoran favorit Anda apa?',
      'Saya bisa merekomendasikan tempat makan terbaik!',
    ],
  },
  {
    keywords: ['psikologi', 'kepribadian', 'emosi'],
    responses: [
      'Psikologi membantu kita memahami diri sendiri dan orang lain.',
      'Kepribadian setiap orang unik!',
      'Saya bisa memberikan wawasan tentang psikologi manusia!',
    ],
  },
  {
    keywords: ['bahasa', 'terjemahan', 'linguistik'],
    responses: [
      'Bahasa adalah jendela dunia!',
      'Saya bisa membantu menerjemahkan kata atau frasa tertentu!',
      'Linguistik adalah studi tentang bahasa yang menarik!',
    ],
  },
];
