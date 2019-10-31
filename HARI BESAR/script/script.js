$(function() {
    var monthFormat = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    date = new Date(),
    monthFormats = monthFormat,
    years = " " + date.getFullYear(),
    currentDate = date.getDate() + " " + monthFormats[date.getMonth()];

    $(".celebrate").each(function() {
        var specifiedDate = currentDate;
        // Januari
        if (specifiedDate == '3 Januari') {
            $('.celetext').append('Memperingati Hari Departemen Agama Republik Indonesia');
            $('.celedate').append('3 Januari' + years);
            $(this).show();

        } else if (specifiedDate == '5 Januari') {
            $('.celetext').append('Memperingati Hari Korps Wanita Angkatan Laut');
            $('.celedate').append('5 Januari' + years);
            $(this).show();
            
        } else if (specifiedDate == '10 Januari') {
            $('.celetext').append('Memperingati Hari Gerakan Satu Juta Pohon, Hari Tritura, dan Hari Lingkungan Hidup Indonesia');
            $('.celedate').append('10 Januari' + years);
            $(this).show();
            
        } else if (specifiedDate == '15 Januari') {
            $('.celetext').append('Memperingati Hari Peristiwa Laut dan Samudera atau Hari Dharma Samudera');
            $('.celedate').append('15 Januari' + years);
            $(this).show();
            
        } else if (specifiedDate == '25 Januari') {
            $('.celetext').append('Memperingati Hari Gizi Nasional dan Hari Kusta Internasional');
            $('.celedate').append('25 Januari' + years);
            $(this).show();
            
        } else if (specifiedDate == '26 Januari') {
            $('.celetext').append('Memperingati Hari Kepabeanan Internasional');
            $('.celedate').append('26 Januari' + years);
            $(this).show();
            
        } 
        // Februari
        else if (specifiedDate == '5 Februari') {
            $('.celetext').append('Memperingati Hari Peristiwa Kapal Tujuh, Hari Lahir Himpunan Mahasiswa Islam (HMI)');
            $('.celedate').append('5 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '9 Februari') {
            $('.celetext').append('Memperingati Hari Kavaleri dan Hari Pers Nasional');
            $('.celedate').append('9 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '14 Februari') {
            $('.celetext').append('Memperingati Hari Peringatan Pembela Tanah Air (PETA) dan Hari Kasih Sayang Sedunia');
            $('.celedate').append('14 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '20 Februari') {
            $('.celetext').append('Memperingati Hari Pekerja Indonesia');
            $('.celedate').append('20 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '21 Februari') {
            $('.celetext').append('Memperingati Hari Bahasa Ibu');
            $('.celedate').append('21 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '25 Februari') {
            $('.celetext').append('Memperingati Hari Istiqlal');
            $('.celedate').append('25 Februari' + years);
            $(this).show();
            
        } else if (specifiedDate == '24 Februari') {
            $('.celetext').append('Memperingati Hari lahir Ikatan Pelajar Nahdlatul Ulama');
            $('.celedate').append('24 Februari' + years);
            $(this).show();
            
        } 
        // Maret
        else if (specifiedDate == '1 Maret') {
            $('.celetext').append('Memperingati Hari Kehakiman Nasional dan Hari Serangan Umum di Yogyakarta');
            $('.celedate').append('1 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '06 Maret') {
            $('.celetext').append('Memperingati Hari Komando Strategis Angkatan Darat (Kostrad)');
            $('.celedate').append('06 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '8 Maret') {
            $('.celetext').append('Memperingati Hari Wanita/Perempuan Internasional');
            $('.celedate').append('8 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '9 Maret') {
            $('.celetext').append('Memperingati Hari Musik Nasional');
            $('.celedate').append('9 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '10 Maret') {
            $('.celetext').append('Memperingati Hari Persatuan Artis Film Indonesia (Parfi)');
            $('.celedate').append('10 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '11 Maret') {
            $('.celetext').append('Memperingati Hari Surat Perintah Sebelas Maret (Supersemar)');
            $('.celedate').append('11 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '21 Maret') {
            $('.celetext').append('Memperingati Hari Sindrom Down, Hari Teater Boneka, dan Hari Penghapusan Diskriminasi Rasial Sedunia');
            $('.celedate').append('21 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '22 Maret') {
            $('.celetext').append('Memperingati Hari Air Sedunia');
            $('.celedate').append('22 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '23 Maret') {
            $('.celetext').append('Memperingati Hari Meteorologi Sedunia');
            $('.celedate').append('23 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '24 Maret') {
            $('.celetext').append('Memperingati Hari Peringatan Bandung Lautan Api');
            $('.celedate').append('24 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '27 Maret') {
            $('.celetext').append('Memperingati Hari Teater Sedunia dan Hari Klub Wanita Internasional');
            $('.celedate').append('27 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '29 Maret') {
            $('.celetext').append('Memperingati Hari Filateli Indonesia');
            $('.celedate').append('29 Maret' + years);
            $(this).show();
            
        } else if (specifiedDate == '30 Maret') {
            $('.celetext').append('Memperingati Hari Film Nasional');
            $('.celedate').append('30 Maret' + years);
            $(this).show();
            
        } 
        // April
        else if (specifiedDate == '1 April') {
            $('.celetext').append('Memperingati Hari Bank Dunia, Hari Marketing Indonesia (Hamari), dan Hari Penyiaran Nasional');
            $('.celedate').append('1 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '06 April') {
            $('.celetext').append('Memperingati Hari Nelayan Nasional');
            $('.celedate').append('06 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '07 April') {
            $('.celetext').append('Memperingati Hari Kesehatan Internasional');
            $('.celedate').append('07 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '9 April') {
            $('.celetext').append('Memperingati Hari Penerbangan Nasional dan Hari TNI Angkatan Udara');
            $('.celedate').append('9 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '12 April') {
            $('.celetext').append('Memperingati Hari Bawa Bekal Nasional');
            $('.celedate').append('12 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '16 April') {
            $('.celetext').append('Memperingati Hari Komando Pasukan Khusus (Kopassus)');
            $('.celedate').append('16 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '17 April') {
            $('.celetext').append('Memperingati Hari Pergerakan Mahasiswa Islam Indonesia PMII');
            $('.celedate').append('17 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '18 April') {
            $('.celetext').append('Memperingati Hari Peringatan Konferensi Asia Afrika');
            $('.celedate').append('18 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '19 April') {
            $('.celetext').append('Memperingati Hari Pertahanan Sipil (Hansip)');
            $('.celedate').append('19 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '20 April') {
            $('.celetext').append('Memperingati Hari Konsumen Nasional');
            $('.celedate').append('20 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '21 April') {
            $('.celetext').append('Memperingati Hari Kartini');
            $('.celedate').append('21 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '22 April') {
            $('.celetext').append('Memperingati Hari Bumi');
            $('.celedate').append('22 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '23 April') {
            $('.celetext').append('Memperingati Hari Buku');
            $('.celedate').append('23 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '24 April') {
            $('.celetext').append('Memperingati Hari Angkutan Nasional dan Hari Solidaritas Asia-Afrika');
            $('.celedate').append('24 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '26 April') {
            $('.celetext').append('Memperingati Hari Kesiapsiagaan Bencana Nasional');
            $('.celedate').append('26 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '27 April') {
            $('.celetext').append('Memperingati Hari Permasyarakatan Indonesia');
            $('.celedate').append('27 April' + years);
            $(this).show();
            
        } else if (specifiedDate == '28 April') {
            $('.celetext').append('Memperingati Hari Puisi Nasional');
            $('.celedate').append('28 April' + years);
            $(this).show();
            
        } 
        // Mei
        else if (specifiedDate == '1 Mei') {
            $('.celetext').append('Memperingati Hari Peringatan Pembebasan Irian Barat dan Hari Buruh Sedunia');
            $('.celedate').append('1 Mei' + years);
            $(this).show();
            
        } else if (specifiedDate == '2 Mei') {
            $('.celetext').append('Memperingati Hari Pendidikan Nasional (Hardiknas)');
            $('.celedate').append('2 Mei' + years);
            $(this).show();
            
        } else if (specifiedDate == '5 Mei') {
            $('.celetext').append('Memperingati Hari Lembaga Sosial Desa (LSD)');
            $('.celedate').append('5 Mei' + years);
            $(this).show();
            
        } else if (specifiedDate == '10 Mei') {
            $('.celetext').append('Memperingati Hari Lupus Sedunia');
            $('.celedate').append('10 Mei' + years);
            $(this).show();
            
        } else if (specifiedDate == '11 Mei') {
            $('.celetext').append('Memperingati Hari POM - TNI');
            $('.celedate').append('11 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '15 Mei') {
            $('.celetext').append('Memperingati Hari Korps Resimen Mahadjaya / Jayakarta (Menwa Jayakarta)');
            $('.celedate').append('15 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '16 Mei') {
            $('.celetext').append('Memperingati Hari Wanadri');
            $('.celedate').append('16 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '17 Mei') {
            $('.celetext').append('Memperingati Hari Buku Nasional');
            $('.celedate').append('17 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '19 Mei') {
            $('.celetext').append('Memperingati Hari Korps Cacat Veteran Indonesia');
            $('.celedate').append('19 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '20 Mei') {
            $('.celetext').append('Memperingati Hari Kebangkitan Nasional dan Hari Bakti Dokter Indonesia');
            $('.celedate').append('20 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '21 Mei') {
            $('.celetext').append('Memperingati Hari Peringatan Reformasi');
            $('.celedate').append('21 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '23 Mei') {
            $('.celetext').append('Memperingati Hari Penyu Sedunia');
            $('.celedate').append('23 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '29 Mei') {
            $('.celetext').append('Memperingati Hari Keluarga');
            $('.celedate').append('29 Mei' + years);
            $(this).show();
        } else if (specifiedDate == '31 Mei') {
            $('.celetext').append('Memperingati Hari Tanpa Tembakau Sedunia');
            $('.celedate').append('31 Mei' + years);
            $(this).show();
        }
        // Juni
        else if (specifiedDate == '1 Juni') {
            $('.celetext').append('Memperingati Hari Lahir Pancasila, Hari Perlindungan Anak-anak Sedunia, dan Hari Susu Nusantara');
            $('.celedate').append('1 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '3 Juni') {
            $('.celetext').append('Memperingati Hari Pasar Modal Indonesia');
            $('.celedate').append('3 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '5 Juni') {
            $('.celetext').append('Memperingati Hari Lingkungan Hidup Sedunia');
            $('.celedate').append('5 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '8 Juni') {
            $('.celetext').append('Memperingati Hari Laut Sedunia');
            $('.celedate').append('8 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '10 Juni') {
            $('.celetext').append('Memperingati Hari Media Sosial');
            $('.celedate').append('10 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '15 Juni') {
            $('.celetext').append('Memperingati Hari Demam Berdarah Dengue ASEAN');
            $('.celedate').append('15 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '17 Juni') {
            $('.celetext').append('Memperingati Hari Dermaga');
            $('.celedate').append('17 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '21 Juni') {
            $('.celetext').append('Memperingati Hari Krida Pertanian');
            $('.celedate').append('21 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '22 Juni') {
            $('.celetext').append('Memperingati Hari Ulang Tahun Kota Jakarta (sejak tahun 1527)');
            $('.celedate').append('22 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '24 Juni') {
            $('.celetext').append('Memperingati Hari Bidan Nasional');
            $('.celedate').append('24 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '26 Juni') {
            $('.celetext').append('Memperingati Hari Anti Narkoba');
            $('.celedate').append('26 Juni' + years);
            $(this).show();
        } else if (specifiedDate == '29 Juni') {
            $('.celetext').append('Memperingati Hari Keluarga Berencana');
            $('.celedate').append('29 Juni' + years);
            $(this).show();
        }
        // Juli
        else if (specifiedDate == '1 Juli') {
            $('.celetext').append('Memperingati Hari Bhayangkara dan Hari Buah');
            $('.celedate').append('1 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '2 Juli') {
            $('.celetext').append('Memperingati Hari Kelautan Nasional');
            $('.celedate').append('2 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '5 Juli') {
            $('.celetext').append('Memperingati Hari Bank Indonesia');
            $('.celedate').append('5 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '9 Juli') {
            $('.celetext').append('Memperingati Hari Satelit Palapa');
            $('.celedate').append('9 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '12 Juli') {
            $('.celetext').append('Memperingati Hari Koperasi');
            $('.celedate').append('12 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '14 Juli') {
            $('.celetext').append('Memperingati Hari Pajak');
            $('.celedate').append('14 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '22 Juli') {
            $('.celetext').append('Memperingati Hari Kejaksaan');
            $('.celedate').append('22 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '23 Juli') {
            $('.celetext').append('Memperingati Hari Anak Nasional dan Hari Komite Nasional Pemuda Indonesia (KNPI)');
            $('.celedate').append('23 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '29 Juli') {
            $('.celetext').append('Memperingati Hari Bhakti TNI Angkatan Udara');
            $('.celedate').append('29 Juli' + years);
            $(this).show();
        } else if (specifiedDate == '31 Juli') {
            $('.celetext').append('Memperingati Hari Lahir Korps Pelajar Islam Indonesia (PII) Wati');
            $('.celedate').append('31 Juli' + years);
            $(this).show();
        }
        // Agustus
        else if (specifiedDate == '5 Agustus') {
            $('.celetext').append('Memperingati Hari Dharma Wanita Nasional');
            $('.celedate').append('5 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '8 Agustus') {
            $('.celetext').append('Memperingati Hari Ulang Tahun ASEAN');
            $('.celedate').append('8 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '10 Agustus') {
            $('.celetext').append('Memperingati Hari Veteran Nasional dan Hari Kebangkitan Teknologi Nasional');
            $('.celedate').append('10 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '12 Agustus') {
            $('.celetext').append('Memperingati Hari Wanita TNI Angkatan Udara (Wara)');
            $('.celedate').append('12 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '13 Agustus') {
            $('.celetext').append('Memperingati Hari Peringatan Pangkalan Brandan Lautan Api');
            $('.celedate').append('13 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '14 Agustus') {
            $('.celetext').append('Memperingati Hari Pramuka');
            $('.celedate').append('14 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '17 Agustus') {
            $('.celetext').append('Memperingati Hari Proklamasi Kemerdekaan Republik Indonesia (sejak tahun 1945)');
            $('.celedate').append('17 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '18 Agustus') {
            $('.celetext').append('Memperingati Hari Konstitusi Republik Indonesia (sejak tahun 1945)');
            $('.celedate').append('18 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '19 Agustus') {
            $('.celetext').append('Memperingati Hari Departemen Luar Negeri Indonesia');
            $('.celedate').append('19 Agustus' + years);
            $(this).show();
        } else if (specifiedDate == '21 Agustus') {
            $('.celetext').append('Memperingati Hari Maritim Nasional');
            $('.celedate').append('21 Agustus' + years);
            $(this).show();
        }
        // September
        else if (specifiedDate == '1 September') {
            $('.celetext').append('Memperingati Hari Buruh dan Hari Polisi Wanita (Polwan)');
            $('.celedate').append('1 September' + years);
            $(this).show();
        } else if (specifiedDate == '8 September') {
            $('.celetext').append('Memperingati Hari Aksara dan Hari Pamong Praja');
            $('.celedate').append('8 September' + years);
            $(this).show();
        } else if (specifiedDate == '9 September') {
            $('.celetext').append('Memperingati Hari Olahraga Nasional');
            $('.celedate').append('9 September' + years);
            $(this).show();
        } else if (specifiedDate == '11 September') {
            $('.celetext').append('Memperingati Hari Radio Republik Indonesia (RRI) dan Hari Peringatan Serangan 11 September 2001');
            $('.celedate').append('11 September' + years);
            $(this).show();
        } else if (specifiedDate == '17 September') {
            $('.celetext').append('Memperingati Hari Palang Merah Indonesia dan Hari Perhubungan Nasional');
            $('.celedate').append('17 September' + years);
            $(this).show();
        } else if (specifiedDate == '21 September') {
            $('.celetext').append('Memperingati Hari Perdamaian Dunia');
            $('.celedate').append('21 September' + years);
            $(this).show();
        } else if (specifiedDate == '23 September') {
            $('.celetext').append('Memperingati Hari Bahasa Isyarat Internasional');
            $('.celedate').append('23 September' + years);
            $(this).show();
        } else if (specifiedDate == '24 September') {
            $('.celetext').append('Memperingati Hari Bahasa Isyarat Internasional');
            $('.celedate').append('24 September' + years);
            $(this).show();
        } else if (specifiedDate == '26 September') {
            $('.celetext').append('Memperingati Hari Statistik');
            $('.celedate').append('26 September' + years);
            $(this).show();
        } else if (specifiedDate == '27 September') {
            $('.celetext').append('Memperingati Hari Pos Telekomunikasi Telegraf (PTT)');
            $('.celedate').append('27 September' + years);
            $(this).show();
        } else if (specifiedDate == '28 September') {
            $('.celetext').append('Memperingati Hari Kereta Api, Hari Komunitas Nasional,  Hari Rabies Sedunia, dan Hari Tunarungu Internasional');
            $('.celedate').append('28 September' + years);
            $(this).show();
        } else if (specifiedDate == '29 September') {
            $('.celetext').append('Memperingati Hari Sarjana Nasional dan Hari Jantung Sedunia');
            $('.celedate').append('29 September' + years);
            $(this).show();
        } else if (specifiedDate == '30 September') {
            $('.celetext').append('Memperingati Hari Peringatan Gerakan 30 September 1965');
            $('.celedate').append('30 September' + years);
            $(this).show();
        }
        // Oktober
        else if (specifiedDate == '1 Oktober') {
            $('.celetext').append('Memperingati Hari Kesaktian Pancasila dan Hari Bea dan Cukai');
            $('.celedate').append('1 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '2 Oktober') {
            $('.celetext').append('Memperingati Hari Batik Nasional');
            $('.celedate').append('2 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '4 Oktober') {
            $('.celetext').append('Memperingati Hari Hewan Sedunia');
            $('.celedate').append('4 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '5 Oktober') {
            $('.celetext').append('Memperingati Hari Tentara Nasional Indonesia (TNI)');
            $('.celedate').append('5 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '10 Oktober') {
            $('.celetext').append('Memperingati Hari Kesehatan Jiwa');
            $('.celedate').append('10 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '12 Oktober') {
            $('.celetext').append('Memperingati Hari Museum Nasional dan Hari Radang Sendi (Artritis) Sedunia');
            $('.celedate').append('12 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '15 Oktober') {
            $('.celetext').append('Memperingati Hari Hak Asasi Binatang');
            $('.celedate').append('15 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '16 Oktober') {
            $('.celetext').append('Memperingati Hari Parlemen Indonesia dan Hari Pangan Sedunia');
            $('.celedate').append('16 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '22 Oktober') {
            $('.celetext').append('Memperingati Hari Santri Nasional');
            $('.celedate').append('22 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '24 Oktober') {
            $('.celetext').append('Memperingati Hari Dokter Nasional, Hari Perserikatan Bangsa-Bangsa (PBB), dan Hari Polio Sedunia');
            $('.celedate').append('24 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '27 Oktober') {
            $('.celetext').append('Memperingati Hari Listrik Nasional, Hari Penerbangan Nasional, dan Hari Narablog Nasional');
            $('.celedate').append('27 Oktober' + years);
            $(this).show();
        } else if (specifiedDate == '28 Oktober') {
            $('.celetext').append('Memperingati Hari Sumpah Pemuda');
            $('.celedate').append('28 Oktober' + years);
            $(this).show();
        } else if (currentDate == '29 Oktober') {
            $('.celetext').append('Memperingati Hari Stroke Sedunia');
            $('.celedate').append('29 Oktober' + years);
            $(this).show();

        } else if (currentDate == '30 Oktober') {
            $('.celetext').append('Memperingati Hari Keuangan Indonesia');
            $('.celedate').append('30 Oktober' + years);
            $(this).show();

        } 
        // November
        else if (currentDate == '1 November') {
            $('.celetext').append('Memperingati Hari Inovasi Indonesia');
            $('.celedate').append('1 November' + years);
            $(this).show();

        } else if (currentDate == '3 November') {
            $('.celetext').append('Memperingati Hari Ulang Tahun EL Creative Organization yang ke-6');
            $('.celedate').append('3 November' + years);
            $(this).show();

        } else if (currentDate == '5 November') {
            $('.celetext').append('Memperingati Hari Cinta Puspa dan Satwa Nasional');
            $('.celedate').append('5 November' + years);
            $(this).show();

        } else if (currentDate == '10 November') {
            $('.celetext').append('Memperingati Hari Pahlawan Indonesia dan Hari Ganefo');
            $('.celedate').append('10 November' + years);
            $(this).show();

        } else if (currentDate == '11 November') {
            $('.celetext').append('Memperingati Hari Bangunan Indonesia');
            $('.celedate').append('11 November' + years);
            $(this).show();

        } else if (currentDate == '12 November') {
            $('.celetext').append('Memperingati Hari Ayah Nasional dan Hari Kesehatan Nasional');
            $('.celedate').append('12 November' + years);
            $(this).show();

        } else if (currentDate == '14 November') {
            $('.celetext').append('Memperingati Hari Brigade Mobil (BRIMOB) dan Hari Diabetes internasional');
            $('.celedate').append('14 November' + years);
            $(this).show();

        } else if (currentDate == '16 November') {
            $('.celetext').append('Memperingati Hari Toleransi Internasional');
            $('.celedate').append('16 November' + years);
            $(this).show();

        } else if (currentDate == '20 November') {
            $('.celetext').append('Memperingati Hari Anak-anak Sedunia');
            $('.celedate').append('20 November' + years);
            $(this).show();

        } else if (currentDate == '21 November') {
            $('.celetext').append('Memperingati Hari Pohon');
            $('.celedate').append('21 November' + years);
            $(this).show();

        } else if (currentDate == '22 November') {
            $('.celetext').append('Memperingati Hari Perhubungan Darat');
            $('.celedate').append('22 November' + years);

        } else if (currentDate == '25 November') {
            $('.celetext').append('Memperingati Hari Guru');
            $('.celedate').append('25 November' + years);
            $(this).show();

        } else if (currentDate == '28 November') {
            $('.celetext').append('Memperingati Hari Menanam Pohon Indonesia dan Hari Dongeng Nasional');
            $('.celedate').append('28 November' + years);
            $(this).show();

        } else if (currentDate == '29 November') {
            $('.celetext').append('Memperingati Hari Korps Pegawai Republik Indonesia (KORPRI)');
            $('.celedate').append('29 November' + years);
            $(this).show();

        }
        // Desember
        else if (currentDate == '1 Desember') {
            $('.celetext').append('Memperingati Hari AIDS Sedunia');
            $('.celedate').append('1 Desember' + years);
            $(this).show();

        } else if (currentDate == '3 Desember') {
            $('.celetext').append('Memperingati Hari Penyandang Cacat Internasional');
            $('.celedate').append('3 Desember' + years);
            $(this).show();

        } else if (currentDate == '4 Desember') {
            $('.celetext').append('Memperingati Hari Artileri');
            $('.celedate').append('4 Desember' + years);
            $(this).show();

        } else if (currentDate == '5 Desember') {
            $('.celetext').append('Memperingati Hari Armada');
            $('.celedate').append('5 Desember' + years);
            $(this).show();

        } else if (currentDate == '9 Desember') {
            $('.celetext').append('Memperingati Hari Anti Korupsi');
            $('.celedate').append('9 Desember' + years);
            $(this).show();

        } else if (currentDate == '10 Desember') {
            $('.celetext').append('Memperingati Hari Hak Asasi Manusia');
            $('.celedate').append('10 Desember' + years);
            $(this).show();

        } else if (currentDate == '12 Desember') {
            $('.celetext').append('Memperingati Hari Transmigrasi dan Hari Belanja Online Nasional (Harbolnas)');
            $('.celedate').append('12 Desember' + years);
            $(this).show();

        } else if (currentDate == '13 Desember') {
            $('.celetext').append('Memperingati Hari Nusantara');
            $('.celedate').append('13 Desember' + years);
            $(this).show();

        } else if (currentDate == '15 Desember') {
            $('.celetext').append('Memperingati Hari Infanteri');
            $('.celedate').append('15 Desember' + years);
            $(this).show();

        } else if (currentDate == '19 Desember') {
            $('.celetext').append('Memperingati Hari Bela Negara');
            $('.celedate').append('19 Desember' + years);
            $(this).show();

        } else if (currentDate == '20 Desember') {
            $('.celetext').append('Memperingati Hari Kesetiakawanan Sosial Nasional');
            $('.celedate').append('20 Desember' + years);
            $(this).show();

        } else if (currentDate == '22 Desember') {
            $('.celetext').append('Memperingati Hari Ibu Nasional, Hari Sosial, dan Hari Korps Wanita Angkatan Darat (KOWAD)');
            $('.celedate').append('22 Desember' + years);
            $(this).show();

        } else if (currentDate == '22 Desember') {
            $('.celetext').append('Memperingati Hari Ibu Nasional, Hari Sosial, dan Hari Korps Wanita Angkatan Darat (KOWAD)');
            $('.celedate').append('22 Desember' + years);
            $(this).show();

        }

        // Others
        else {
            $(this).hide();
        }
    });
});
