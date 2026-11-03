Nama : Cristina Aprilia Marpaung
NIM : 41426045
Prodi : DIV-TRPL

Laporan Praktikum: Gambar Responsif, Font Fleksibel, Container Query, dan Reduced Motion

Gambar Responsif di Dalam Card

Di bagian ini kita membuat card berisi gambar yang menyesuaikan perangkat. Kode srcset menyiapkan dua foto berbeda ukuran (320 piksel dan 640 piksel), sehingga HP tidak perlu memuat foto besar. Kode sizes memberi tahu browser lebar gambar saat tampil: setengah layar (50%) jika layar minimal 48rem, dan hampir penuh (92%) jika layar lebih kecil. Browser lalu memilih foto yang paling cocok.

Font Fleksibel dan Container Query

Kode clamp(1.75rem, 1.2rem + 2vw, 3rem) membuat ukuran judul punya batas kecil dan besar, dan berubah halus mengikuti lebar layar. Kode @container berbeda dari @media: @media melihat ukuran seluruh layar, sedangkan @container melihat lebar wadahnya. Jika lebar. card-wrap minimal 30rem (sekitar 480 piksel), padding card menjadi 1.5rem. Jika lebih sempit, padding tetap tipis.

Reduced Motion

Kode prefers-reduced-motion: reduce mematikan transisi card bagi pengguna yang mengaktifkan pengaturan "kurangi gerakan" di perangkatnya. Tujuannya mengurangi animasi agar nyaman bagi semua orang, bukan membuatnya lebih halus.

Format Laporan
Kondisi Normal. Program web dijalankan dengan kode lengkap. Hasilnya web berjalan baik tanpa error. Bukti ada di folder bukti.

Kondisi Batas. Container dibuat pada pembungkus card. Hasilnya tampilan tetap rapi dan padding berubah saat lebar wadah mencapai 30rem. Bukti ada di folder bukti.

Kondisi Gagal. srcset diisi dengan foto berbeda untuk tiap ukuran. Hasilnya foto 640w yang tampil, karena browser memilih foto yang paling cocok dengan lebar tampilan, bukan foto pertama di daftar. Bukti ada di folder bukti.

Kesimpulan

srcset dan sizes membuat browser memilih gambar yang pas, clamp() membuat judul berubah halus, @container mengatur card sesuai lebar wadahnya, dan prefers-reduced-motion membuat web lebih nyaman bagi pengguna yang ingin animasi dikurangi.

LATIHAN MANDIRI DAN MATRIKS UJI

Kasus	                Yang Diuji	                 Harapan (dari modul)
Gambar	             Path gambar benar	                Aset termuat
Container           Lebar wadah diubah-ubah     Query container sesuai ruang
sempit/lebar           
Zoom            Perbesar tampilan (misal 200%)           Teks tetap terbaca
Reduced motion       Aktifkan pengaturan         Transisi opsional berkurang
                        kurangi gerakan  

Input/Kondisi : Kasus normal
Tindakan : Buka halaman dengan path gambar benar, ubah lebar jendela.
Hasil Aktual : Gambar termuat; di layar lebar foto-640.jpg dipakai.
Status/Bukti : Sesuai. normal.png. Browser memilih file lewat srcset dan sizes.

Input/Kondisi : Kasus batas
Tindakan : Ubah lebar .card-wrap ke 30rem, lalu zoom 200%.
Hasil Aktual : Padding jadi 1.5rem di 30rem, kembali tipis saat zoom. Teks terbaca.
Status/Bukti : Sesuai. batas.png. @container aktif hanya jika wadah cukup lebar.

Input/Kondisi : Kasus gagal
Tindakan : Isi nama file salah (foto-640.jpgg), perbaiki, uji ulang.
Hasil Aktual : Gambar tidak tampil (hanya alt, status 404). Setelah diperbaiki, tampil.
Status/Bukti : Gagal, lalu sesuai. gagal.png, retest.png. File tidak ditemukan di path yang salah.




