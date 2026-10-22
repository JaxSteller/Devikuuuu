// File: js/music.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Konfigurasi Playlist ---
    // Ganti dengan data lagu Anda: path ke audio & gambar cover
    const playlistData = [
        {
            title: "Janji Suci Yuvie & Nino",
            artist: "Uzii Kasep",
            audioSrc: "assets/audio/Janji Suci Yovie & Nuno ( Felix Irwan Cover ).mp3", // Ganti path audio
            imageSrc: "assets/images/akukamu.jpg" // Ganti path gambar
        },
        {
            title: "Favorite Girl",
            artist: "Uzii Kasep",
            audioSrc: "assets/audio/Justin Bieber - Favorite Girl (Lyrics).mp3",
            imageSrc: "assets/images/akukamu.jpg"
        },
        {
            title: "Nemen - Denny CAKCAK",
            artist: "ORANG GANTENG",
            audioSrc: "assets/audio/DENNY CAKNAN FEAT. GILGA SAHID - NEMEN (OFFICIAL LIVE MUSIC) - DC MUSIK.mp3",
            imageSrc: "assets/images/akukamu.jpg"
        },
        {
            title: "SABEN DINO SAURUS DJ",
            artist: "DINOSAURUS LOPYUUU",
            audioSrc: "assets/audio/DJ SABEN DINO RAIMU PETENG DEDET FULL SENYUM SAYANG MOCIL FVNKY VIRAL TIKTOK 2023.mp3",
            imageSrc: "assets/images/akukamu.jpg"
        },
        {
            title: "SABAR - SADEWOK",
            artist: "Teu Bisa Sabar",
            audioSrc: "assets/audio/Sabar - Sadewok (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-2.jpg"
        }, 
        {
            title: "Happy Asmara - Dalan Liyane",
            artist: "Happy Terusssss",
            audioSrc: "assets/audio/Happy Asmara - Dalan Liyane (Official Music Video ANEKA SAFARI) Ciptaan Hendra Kumbara.mp3",
            imageSrc: "assets/images/gallery-photo-2.jpg"
        },
        {
            title: "Rasah Dadi Pelangi",
            artist: "Incesss",
            audioSrc: "assets/audio/NDX A.K.A - Rasah Dadi Pelangi ( Official Music Video ).mp3",
            imageSrc: "assets/images/gallery-photo-2.jpg"
        },
        {
            title: "Apa kabar Mantannnn",
            artist: "NDX A.K.A",
            audioSrc: "assets/audio/NDX A.K.A – Apa Kabar Mantan I JOOX Original (Official Music Video).mp3",
            imageSrc: "assets/images/akukamu7.jpg"
        },
    {
            title: "Ngertono Sitono Ati",
            artist: "NDX A.K.A",
            audioSrc: "assets/audio/NDX AKA - Ngertenono Ati ( NDX Version ).mp3",
            imageSrc: "assets/images/akukamu7.jpg"
        },
    {
            title: "TEMAN RASA PACAR EUNGGGGG",
            artist: "NDX A.K.A",
            audioSrc: "assets/audio/TEMAN RASA PACAR - DJiamputh (DJ VERSION).mp3",
            imageSrc: "assets/images/akukamu7.jpg"
        },
        {
            title: "TEWAS TERTIMBUN MANTAN",
            artist: "YUUUU BISAA YUUU",
            audioSrc: "assets/audio/Tewas Tertimbun Masa Lalu (TTM).mp3",
            imageSrc: "assets/images/akukamu7.jpg"
        },
        {
            title: "Ngelingan Mantannn",
            artist: "INCESSSS",
            audioSrc: "assets/audio/NDX A K A Kelingan Mantan.mp3",
            imageSrc: "assets/images/akukamu3.jpg"
        },
        {
            title: "Liakno Akuuu",
            artist: "YUUUU BISAA YUUU",
            audioSrc: "assets/audio/Lilakno Aku.mp3",
            imageSrc: "assets/images/akukamu3.jpg"
        },
        {
            title: "Kimcil Koplenn",
            artist: "YUUUU BISAA YUUU",
            audioSrc: "assets/audio/Kimcil Kepolen.mp3",
            imageSrc: "assets/images/akukamu3.jpg"
        },
        {
            title: "Treno Tekan Ati New Version",
            artist: "NDX A.K.A",
            audioSrc: "assets/audio/NDX AKA - Tresno Tekan Mati New Version ( Official Lyric Video ).mp3",
            imageSrc: "assets/images/akukamu3.jpg"
        },
        {
            title: "CLBK Asikkkkk",
            artist: "Djiamputh",
            audioSrc: "assets/audio/CLBK - Djiamputh ft. Ardinarass (DJ Version).mp3",
            imageSrc: "assets/images/akukamu3.jpg"
        },
         {
            title: "Nan Ko Paham",
            artist: "Djiamputh",
            audioSrc: "assets/audio/DJiamputh X NOK YEKA - Nan Ko Paham Su Jauh Sa Tanam Hati Tapi Tra Hasil Viral Tiktok Sess Moakk.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Mangan Ra Njaluk Kowe",
            artist: "NOK YEKAA",
            audioSrc: "assets/audio/Mangan Ra Njaluk Kowe - NOK YEKA.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Pikir Keri",
            artist: "NOK YEKA",
            audioSrc: "assets/audio/NOK YEKA - Pikir Keri.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "TAMU UNDANGAN (Reggae)",
            artist: "REGGAE",
            audioSrc: "assets/audio/TAMU UNDANGAN (Reggae).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Lewat Angin Wengi",
            artist: "SAFIRA INEMA",
            audioSrc: "assets/audio/Safira Inema - Lewat Angin Wengi (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Bubrah",
            artist: "NORTHSLE FEAT AGIFF",
            audioSrc: "assets/audio/Northsle feat. Agiff - Bubrah (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Mencintai Dengan Ngeyel",
            artist: "VADESTA",
            audioSrc: "assets/audio/Vadesta - Mencintai Dengan Ngeyel (Original Musik Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Sigar",
            artist: "DENNY CAKCAK",
            audioSrc: "assets/audio/Denny Caknan - Sigar (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "Tresno Liyane",
            artist: "Northsle feat Agiff",
            audioSrc: "assets/audio/Northsle feat. Agiff - Tresno Liyane (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "RASAH BALIII",
            artist: "LAVORA FT ENA FIKA",
            audioSrc: "assets/audio/Rasah Bali - LAVORA Ft Ena Vika (Original Version) Dwilogi Eps 2.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        
        {
            title: "TAMAN JURUGG",
            artist: "NIKEN SALINDRY",
            audioSrc: "assets/audio/Niken Salindry - Cah Cah Cah Cah Cahyaning Bulan - TAMAN JURUG (Official Music Video ANEKA SAFARI).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        
        {
            title: "BANDUNG JUARAA",
            artist: "ASEP BALON FT FANNY SABILA",
            audioSrc: "assets/audio/AOI x ASEP BALON x FANNY SABILA - BANDUNG JUARA (Official Music Video) [PROD. BY AOI].mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "HAYANG ETAA",
            artist: "SWARANTARA",
            audioSrc: "assets/audio/Hayang Éta - Swarantara (Official Lyric Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
    
        {
            title: "STEL KENDO",
            artist: "NOK YEKA",
            audioSrc: "assets/audio/NOK YEKA - Stel Kendo.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "SABAR - NIKEN SALINDRY",
            artist: "NIKEN SALINDRY",
            audioSrc: "assets/audio/Niken Salindry - Sabar - Kembar Campursari ( Official Music Video ) duh sayang ngapuntene saestu.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "LAMUNAN",
            artist: "NIKEN SALINDRY",
            audioSrc: "assets/audio/Niken Salindry - Lamunan - Kembar Campursari (Official Music Video) Pindha samudra pasang.mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "STEL KENDO",
            artist: "DJIAMPUTH",
            audioSrc: "assets/audio/Stel Kendo - Djiamputh (DJ Version).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        },
        {
            title: "RAISO NGAPUSI",
            artist: "TEKOMLAKU",
            audioSrc: "assets/audio/TEKOMLAKU feat. Ervinsof - Raiso Ngapusi (Official Music Video).mp3",
            imageSrc: "assets/images/gallery-photo-1.jpg"
        }
        // Tambahkan lagu lain di sini jika perlu
    ];

    // --- Ambil Elemen DOM ---
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const totalDurationEl = document.getElementById('total-duration');
    const albumArt = document.getElementById('album-art');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const playlistContainer = document.getElementById('playlist');
    const volumeBtn = document.getElementById('volume-btn');

    // --- State Player ---
    let currentSongIndex = 0;
    let isPlaying = false;

    // --- Fungsi Bantuan ---
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // --- Fungsi Inti Player ---
    function loadSong(index) {
        if (index < 0 || index >= playlistData.length) {
            console.error("Index lagu tidak valid:", index);
            return;
        }
        const song = playlistData[index];
        audioPlayer.src = song.audioSrc;
        albumArt.src = song.imageSrc || 'assets/images/default-album-art.png'; // Fallback jika gambar tdk ada
        albumArt.onerror = () => albumArt.src = 'assets/images/default-album-art.png'; // Handle error load gambar
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        currentSongIndex = index;

        // Reset progress bar saat lagu baru dimuat
        progressBar.value = 0;
        currentTimeEl.textContent = "0:00";
        totalDurationEl.textContent = "0:00"; // Akan diupdate saat metadata siap

        // Update highlight playlist
        updatePlaylistHighlight();

         // Coba muat metadata untuk durasi (beberapa browser perlu ini)
         audioPlayer.load();
    }

    function playSong() {
        audioPlayer.play()
            .then(() => {
                isPlaying = true;
                playPauseBtn.innerHTML = '⏸'; // Ikon Pause
            })
            .catch(error => console.error("Error playing audio:", error)); // Tangani error jika play gagal
    }

    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '▶'; // Ikon Play
    }
    window.pauseMusicPlayer = pauseSong;
    
    function prevSong() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = playlistData.length - 1; // Wrap around ke akhir
        }
        loadSong(currentSongIndex);
        playSong();
    }

    function nextSong() {
        currentSongIndex++;
        if (currentSongIndex >= playlistData.length) {
            currentSongIndex = 0; // Wrap around ke awal
        }
        loadSong(currentSongIndex);
        playSong();
    }

    function updateProgressBar(e) {
        const { duration, currentTime } = e.target;
         // Update durasi total jika sudah tersedia
         if (duration && !isNaN(duration)) {
            totalDurationEl.textContent = formatTime(duration);
            progressBar.max = Math.floor(duration); // Set max value progress bar
        } else if (!totalDurationEl.textContent || totalDurationEl.textContent === "0:00") {
             totalDurationEl.textContent = "Loading..."; // Tanda durasi belum siap
        }
        // Update waktu saat ini & posisi progress bar
        if(!isNaN(currentTime)) {
            currentTimeEl.textContent = formatTime(currentTime);
            progressBar.value = Math.floor(currentTime);
        }
    }

     function setProgressBar(e) {
        // Jika sumber event adalah klik user, bukan update otomatis
         if (e.type === 'input' || e.type === 'change') {
             if (!isNaN(audioPlayer.duration)) { // Pastikan durasi valid
                 audioPlayer.currentTime = progressBar.value;
             }
         }
    }

     function toggleMute() {
        audioPlayer.muted = !audioPlayer.muted;
        volumeBtn.style.opacity = audioPlayer.muted ? 0.5 : 1; // Ubah tampilan tombol mute
        volumeBtn.innerHTML = audioPlayer.muted ? '🔇' : '🔊'; // Ubah ikon
    }

    // --- Fungsi Playlist ---
    function populatePlaylist() {
        playlistContainer.innerHTML = ''; // Kosongkan dulu
        playlistData.forEach((song, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.dataset.index = index; // Simpan index di data attribute

             // Tampilkan durasi sementara (akan diupdate saat metadata load jika perlu)
             const tempDuration = "?.??";

             item.innerHTML = `
                <span class="item-title">${index + 1}. ${song.title}</span>
                <span class="item-duration" id="duration-${index}">${tempDuration}</span>
            `;

             // Tambahkan listener untuk memutar lagu saat item diklik
             item.addEventListener('click', () => {
                 loadSong(index);
                 playSong();
             });

            playlistContainer.appendChild(item);

             // Ambil durasi asli (opsional, bisa memakan waktu)
             getAudioDuration(song.audioSrc, index);
        });
    }

    // Fungsi untuk mengambil durasi audio (asinkron)
     function getAudioDuration(src, index) {
         const audio = new Audio();
         audio.addEventListener('loadedmetadata', () => {
             const durationElement = document.getElementById(`duration-${index}`);
             if (durationElement && audio.duration && !isNaN(audio.duration)) {
                 durationElement.textContent = formatTime(audio.duration);
             } else if(durationElement) {
                 durationElement.textContent = "--:--"; // Jika gagal dapat durasi
             }
         });
         audio.addEventListener('error', () => {
             const durationElement = document.getElementById(`duration-${index}`);
              if (durationElement) {
                 durationElement.textContent = "Err"; // Tandai jika file audio error
             }
         });
         audio.src = src;
     }


    function updatePlaylistHighlight() {
        const items = playlistContainer.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });
    }


    // --- Inisialisasi Player ---
    function initMusicPlayer() {
        // console.log("Initializing Music Player");
        populatePlaylist();
        loadSong(currentSongIndex); // Muat lagu pertama
        setupEventListeners();
    }

    function setupEventListeners() {
        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseSong();
            } else {
                playSong();
            }
        });
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        audioPlayer.addEventListener('timeupdate', updateProgressBar);
        audioPlayer.addEventListener('loadedmetadata', updateProgressBar); // Update durasi saat metadata siap
        audioPlayer.addEventListener('ended', nextSong); // Otomatis putar lagu berikutnya
        progressBar.addEventListener('input', setProgressBar); // Update saat user menggeser
        volumeBtn.addEventListener('click', toggleMute);
    }

    // Buat fungsi init global agar bisa dipanggil dari main.js
    window.initMusicPlayer = initMusicPlayer;

}); // Akhir DOMContentLoaded
