const deepfaceToKey = {
  happy: "happy",
  angry: "angry",
  fear: "fear",
  fearful: "fear",
  sad: "sad",
  surprise: "surprise",
  surprised: "surprise"
};

const emotionToVideos = {
  happy: ["bloemen.mp4", "water.mp4", "wolken.mp4"],
  angry: ["waves.mp4", "vuur.mp4", "lava.mp4"],
  fear: ["kwal.mp4", "storm.mp4", "thunder.mp4"],
  sad: ["mist.mp4", "regen.mp4", "regen 2.mp4"],
  surprise: ["zwart_gat.mp4", "stars.mp4", "kwallen.mp4"]
};

const audioMap = {
  'bloemen.mp4': '/static/Audio/bloemen.wav',
  'waves.mp4': '/static/Audio/golven.wav',
  'lava.mp4': '/static/Audio/lava.wav',
  'mist.mp4': '/static/Audio/mist.wav',
  'regen.mp4': '/static/Audio/regen.wav',
  'regen 2.mp4': '/static/Audio/regenBW.wav',
  'vuur.mp4': '/static/Audio/vuur.wav',
  'water.mp4': '/static/Audio/Water.wav',
  'wolken.mp4': '/static/Audio/wolken.wav',
  // Voeg hier eventueel meer mappings toe
};

const videoA = document.getElementById('videoA');
const videoB = document.getElementById('videoB');
let showingA = true;
let lastEmotion = null;
let lastFilename = null;
let currentAudio = null;
const socket = io();

// Init: videoA zichtbaar, videoB onzichtbaar
videoA.classList.add('show');
videoB.classList.add('hide');

socket.on('emotion', function(data) {
  const rawEmotion = data.emotion;
  const emotion = deepfaceToKey[rawEmotion];
  const videoList = emotionToVideos[emotion];
  if (!videoList) return;
  // Kies random video uit de lijst, voorkom herhaling van dezelfde video
  let options = videoList.filter(v => v !== lastFilename);
  if (options.length === 0) options = videoList;
  const filename = options[Math.floor(Math.random() * options.length)];
  if (!filename) return;
  // Audio afspelen als bloemen.mp4 wordt afgespeeld
  if (audioMap[filename]) {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(audioMap[filename]);
    currentAudio.currentTime = 0;
    currentAudio.volume = 1.0;
    currentAudio.play().catch(e => { console.warn('Audio play error:', e); });
  } else if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  const nextVideo = showingA ? videoB : videoA;
  const prevVideo = showingA ? videoA : videoB;
  nextVideo.src = `/static/videos/${filename}?t=${Date.now()}`;
  nextVideo.load();
  nextVideo.oncanplay = () => {
    // Beide zichtbaar maken voor crossfade
    nextVideo.classList.add('show');
    nextVideo.classList.remove('hide');
    prevVideo.classList.add('show');
    prevVideo.classList.remove('hide');
    // Forceer reflow zodat de transition werkt
    void nextVideo.offsetWidth;
    // Fade in/out
    nextVideo.style.opacity = 1;
    prevVideo.style.opacity = 0;
    nextVideo.play();
    nextVideo.playbackRate = 0.1;
    prevVideo.playbackRate = 0.1;
    // Na de transition de oude video verbergen
    setTimeout(() => {
      prevVideo.classList.remove('show');
      prevVideo.classList.add('hide');
      prevVideo.style.opacity = '';
      nextVideo.style.opacity = '';
    }, 4000); // pas evt. aan als je crossfade tijd wijzigt
    showingA = !showingA;
    lastFilename = filename;
  };
});
