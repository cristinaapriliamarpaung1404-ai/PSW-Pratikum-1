Nama : Cristina Aprilia Marpaung
NIM : 41426045
Prodi : DIV-TRPL

Perubahan yang terjadi yang saya lakukan adalah menambahkan foto profil, tombol Tampilkan salam, dan formulir pendaftaran kegiatan. Formulir ini berisi nama, email, nomor telepon, jumlah tiket (memiliki batasan), program studi, mode kehadiran, minat topik, dan catatan(opsional). Beberapa kolom dibuat wajib diisi menggunakan required. Jumlah tiket dibatasi dari 1 sampai 5, sedangkan email akan diperiksa berdasarkan formatnya. Radio button digunakan untuk memilih satu mode kehadiran, sedangkan checkbox dapat digunakan untuk memilih beberapa minat topik.

Penjelasan Kesalahan dan Perbaikannya :

1.Kesalahan pada <figcaption>
Kesalahan pertama terdapat pada bagian <figcaption>. Elemen ini diletakkan di luar <figure>, padahal <figcaption> harus berada di dalam <figure>. Untuk memperbaikinya, pindahkan <figcaption> ke dalam <figure> setelah gambar. Dengan begitu, keterangan gambar akan berada pada tempat yang benar dan error akan hilang.

2.Peringatan pada <h1>
Kesalahan kedua terdapat pada penggunaan <h1> dengan tulisan "pendaftaran"judul utama halaman. Seharusnya digunakan h2 dikarenakan itu bukan judul utama.

Stylesheet atau CSS digunakan untuk mengatur tampilan website agar lebih rapi dan menarik. CSS bisa mengatur warna, ukuran tulisan, jarak, posisi gambar, tombol, dan bentuk formulir. Jadi, HTML membuat isi dan struktur website, sedangkan CSS mengatur tampilannya.
Border-box digunakan agar ukuran kotak tetap sesuai dengan ukuran yang ditentukan, termasuk padding dan border. Dengan begitu, ukuran elemen lebih mudah diatur dan tidak membuat tampilan menjadi berantakan.
Konflik Specificity berfungsi untuk menentukan CSS mana yang digunakan jika ada beberapa aturan yang berbeda untuk elemen yang sama. CSS akan memilih aturan yang lebih kuat. Jadi, specificity membantu agar tampilan elemen sesuai dengan aturan CSS yang diprioritaskan.