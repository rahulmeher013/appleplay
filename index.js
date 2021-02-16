// console.log('tested')
const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [
  {
    name: "rahul1",
    title: "Dusk Till Dawn",
    artist: "Zayn Mallik",
  },
  {
    name: "rahul2",
    title: "Love Me Like You",
    artist: "Ellie Goulding",
  },
  {
    name: "rahul3",
    title: "Fadded",
    artist: "Alan Walker",
  },
];

let isPlaying = false;
const playMusic = () => {
  music.play();
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};

const pauseMusic = () => {
  music.pause();
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};

play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

// change the music data......
const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'music/'+songs.name+'.mp3';
    img.src = 'images/'+songs.name+'.jpg' 
}
songIndex = 0; 

const nextSong = () => {
     songIndex = (songIndex + 1) % songs.length;
     loadSong(songs[songIndex]);
     playMusic();
}

// loadSong(songs[songIndex]);
const prevSong = () => {
    songIndex =  (songIndex - 1 +  songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
