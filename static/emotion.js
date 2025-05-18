// ademhalingsoefening //
var socket = io();
let breathingActive = false;  // global flag om overlappende ademhalingsoefeningen te voorkomen

socket.on('breathing_exercise', function(data) {
    if (data.start) {
        // Als een ademhalingsoefening al wordt uitgevoerd, negeer dan de nieuwe trigger
        if (breathingActive) return;
        breathingActive = true;
        
        const msgElem = document.getElementById('exerciseMessage');
        // Wis alle eerdere inhoud
        msgElem.innerHTML = "";
        
        // Initiële bericht met een span met achtergrondschaduw
        let msgText = document.createElement("span");
        msgText.textContent = "You are too stressed, time for a breathing exercise!";
        msgText.style.color = "white";
        msgText.style.padding = "10px";
        msgText.style.borderRadius = "4px";
        msgText.style.textShadow = "0 0 10px rgba(0,0,0,0.8)";
        msgElem.appendChild(msgText);
        
        // Verwijder na 2 seconden de berichttekst en voeg de cirkel toe (zonder de schaduw)
        setTimeout(function() {
            msgElem.removeChild(msgText);
            
            // Cirkel div met achtergrondafbeelding
            let circle = document.createElement("div");
            circle.id = "breathingCircle";
            circle.style.width = "50px";
            circle.style.height = "50px";
            circle.style.borderRadius = "50%";

            circle.style.backgroundImage = "url('/static/img/circle.png')";
            circle.style.backgroundSize = "cover";
            circle.style.display = "flex";
            circle.style.justifyContent = "center";
            circle.style.alignItems = "center";
            circle.style.fontSize = "16px";
            circle.style.color = "white";
            
            msgElem.appendChild(circle);

            // Functie om één cyclus van de animatie uit te voeren
            // Elke cyclus: 7s inhale, 5s hold, 5s hold, 7s exhale = 24s totaal.
            function runCycle(count) {
                // Cirkel resetten naar de begintoestand voor de cyclus
                circle.style.transition = "";
                circle.style.width = "50px";
                circle.style.height = "50px";
                circle.style.fontSize = "16px";
                circle.textContent = "inhale";
                
                // Na een kleine vertraging, animeer de expansie (inhale) gedurende 7 seconden
                setTimeout(function() {
                    circle.style.transition = "width 7s, height 7s, font-size 7s";
                    circle.style.width = "300px";
                    circle.style.height = "300px";
                    circle.style.fontSize = "32px";
                }, 50);
                
                // Verander na 7 seconden de tekst naar "hold" (eerste hold)
                setTimeout(function() {
                    circle.textContent = "hold";
                }, 7000);
                
                // Na nog eens 5 seconden (totaal 12s), "hold" aanhouden (tweede hold)
                // Wordt nog aangepast, 12 sec hold is vrij lang lol
                setTimeout(function() {
                    circle.textContent = "hold";
                }, 7000 + 5000);
                
                // Na nog eens 5 seconden (totaal 17s), trigger exhale
                setTimeout(function() {
                    circle.textContent = "exhale";
                    circle.style.transition = "width 7s, height 7s, font-size 7s";
                    circle.style.width = "50px";
                    circle.style.height = "50px";
                    circle.style.fontSize = "16px";
                }, 7000 + 5000 + 5000);
                
                // Na de volledige cyclus (24s), voer de volgende cyclus uit
                // of verwijder de cirkel als het aantal cyclusen 3 is
                setTimeout(function() {
                    if(count < 3) {
                        runCycle(count + 1);
                    } else {
                        msgElem.removeChild(circle);
                        breathingActive = false;  // Flag resetten wanneer de animatie klaar is
                    }
                }, 7000 + 5000 + 5000 + 7000);
            }
            
            // Start de eerste cyclus
            runCycle(1);
            
        }, 4000);
    }
});
// Einde ademhalingsoefening


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
    nextVideo.playbackRate = 1.0; // Zet op normale snelheid
    prevVideo.playbackRate = 1.0; // Zet op normale snelheid
    // Na de transition de oude video verbergen
    setTimeout(() => {
      prevVideo.classList.remove('show');
      prevVideo.classList.add('hide');
      prevVideo.style.opacity = '';
      nextVideo.style.opacity = '';
    }, 5000); // pas evt. aan als je crossfade tijd wijzigt
    showingA = !showingA;
    lastFilename = filename;
  };
});

// --- WELCOME overlay ---
function showWelcomeOverlay() {
  let overlay = document.getElementById('welcomeOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'welcomeOverlay';
    overlay.style.flexDirection = 'column'; // Zorgt dat tekst onder elkaar staat
    let text = document.createElement('span');
    text.textContent = 'WELCOME';
    text.className = 'welcome-title';
    overlay.appendChild(text);
    // Extra regel onder welcome
    let subtext = document.createElement('span');
    subtext.textContent = 'Stand on the colored dot';
    subtext.className = 'welcome-subtext';
    overlay.appendChild(subtext);
    document.body.appendChild(overlay);
    // Na 7.5 seconden tekst verandert met fade-out/fade-in effect
    setTimeout(() => {
      text.style.transition = 'opacity 0.7s';
      subtext.style.transition = 'opacity 0.7s';
      text.style.opacity = '0';
      subtext.style.opacity = '0';
      setTimeout(() => {
        text.textContent = 'Change your facial expression and explore';
        text.className = 'welcome-subtext';
        text.style.textAlign = 'center';
        subtext.textContent = '';
        text.style.opacity = '1';
        subtext.style.opacity = '1';
      }, 700);
    }, 7500);
  } else {
    overlay.style.display = 'flex';
    overlay.style.opacity = '1';
  }
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 1000);
  }, 15000); // 15 seconden
}

// Toon direct bij het laden
showWelcomeOverlay();
// Herhaal elke 15 minuten
setInterval(showWelcomeOverlay, 15 * 60 * 1000);
