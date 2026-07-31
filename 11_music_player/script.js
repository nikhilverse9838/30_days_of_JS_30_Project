      const songs = [
        {
          name: "Darkhaast",
          artist: "Arijit Singh",
          image: "image/image.png",
          music:
            "music/Arijit Singh - Darkhaast (Lyrics) Ft. Sunidhi Chauhan  Shivaay.mp3",
        },

        {
          name: "Dhun Song",
          artist: "Arijit singh",
          image: "image/image2.png",
          music:
            "music/Dhun Song  Saiyaara  Ahaan Panday, Aneet Padda  Mithoon  Arijit Singh  In Cinemas 18 July.mp3", // <-- apna exact filename likhna
        },

        {
          name: "Ehsaas",
          artist: "Narendra Modi",
          image: "image/image3.png",
          music:
            "music/Ehsaas (Lyric Video) Faheem Abdullah  Duha Shah  Vaibhav Pani  Hyder Dar.mp3", // <-- exact filename
        },
        {
          name: "Tumhe kitna pyaar krte ",
          artist: "Arijit singh",
          image: "image/image1.png",
          music:
            "music/Ehsaas (Lyric Video) Faheem Abdullah  Duha Shah  Vaibhav Pani  Hyder Dar.mp3", // <-- exact filename
        },
      ];
      let progress = document.getElementById("progress");
      let song = document.getElementById("song");
      let ctrlIcon = document.getElementById("ctrlIcon");
      let songImage = document.getElementById("songImage");
      let songName = document.getElementById("songName");
      let artistName = document.getElementById("artistName");
      let currentTime = document.getElementById("currentTime");
      let duration = document.getElementById("duration");
      let currentSong = 1;
      song.onloadedmetadata = function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
        duration.innerHTML = formatTime(song.duration);
      };
      function formatTime(time) {
        let minutes = Math.floor(time / 60);

        let seconds = Math.floor(time % 60);

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        return minutes + ":" + seconds;
      }
      function playpause() {
        if (ctrlIcon.classList.contains("fa-pause")) {
          song.pause();
          ctrlIcon.classList.remove("fa-pause");
          ctrlIcon.classList.add("fa-play");

          songImage.classList.remove("playing");
        } else {
          song.play();
          ctrlIcon.classList.add("fa-pause");
          ctrlIcon.classList.remove("fa-play");

          songImage.classList.add("playing");
        }
      }
      setInterval(() => {
        if (!song.paused) {
          progress.value = song.currentTime;
          currentTime.innerHTML = formatTime(song.currentTime);
        }
      }, 500);
      progress.onchange = function () {
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
      };
      function loadSong(index) {
        songImage.src = songs[index].image;

        songName.innerHTML = songs[index].name;

        artistName.innerHTML = songs[index].artist;

        song.src = songs[index].music;

        song.load();
      }
      function createPlaylist() {
        let playlist = document.getElementById("playlist");

        playlist.innerHTML = "";

        songs.forEach((item, index) => {
          playlist.innerHTML += `
            <div class="playlist-item"
                 onclick="playSelectedSong(${index})">

                 🎵 ${item.name}

            </div>
        `;
        });
      }
      function playSelectedSong(index) {
        currentSong = index;

        loadSong(currentSong);
        updateActiveSong();
        song.play();

        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
      }
      function updateActiveSong() {
        let items = document.querySelectorAll(".playlist-item");

        items.forEach((item) => {
          item.classList.remove("active");
        });

        items[currentSong].classList.add("active");
      }
      function nextSong() {
        currentSong++;

        if (currentSong >= songs.length) {
          currentSong = 0;
        }

        loadSong(currentSong);

        updateActiveSong();

        song.play();

        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        songImage.classList.add("playing");
      }
      function previousSong() {
        currentSong--;

        if (currentSong < 0) {
          currentSong = songs.length - 1;
        }

        loadSong(currentSong);

        updateActiveSong();

        song.play();

        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        songImage.classList.add("playing");
      }
      loadSong(currentSong);
      createPlaylist();
      updateActiveSong();
      loadSong(currentSong);
      song.addEventListener("ended", function () {
        nextSong();
      });
      function togglePlaylist(){

    playlistContainer.classList.toggle("show");

}