// --- ADEMHALINGSOEFENING ---
var socket = io();
let breathingActive = false;  // global flag om overlappende ademhalingsoefeningen te voorkomen

socket.on('breathing_exercise', function(data) {
    if (data.start) {
        if (breathingActive) return;
        breathingActive = true;
        
        // Maak een overlay (50% zwart) die de achtergrond dimt met fade-in
        let overlay = document.createElement("div");
        overlay.id = "exerciseOverlay";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = "100";
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 1s ease";    
        document.body.appendChild(overlay);
        requestAnimationFrame(() => {
            overlay.style.opacity = "1";
        });
        
        const msgElem = document.getElementById('exerciseMessage');
        // Zorg dat msgElem boven de overlay komt
        msgElem.style.zIndex = "101";
        // Center de container in de viewport
        msgElem.style.position = "fixed";
        msgElem.style.top = "50%";
        msgElem.style.left = "50%";
        msgElem.style.transform = "translate(-50%, -50%)";
        msgElem.style.textAlign = "center";
        // Wis alle eerdere inhoud
        msgElem.innerHTML = "";
        
        // Initiële bericht met smooth fade in/out
        let msgText = document.createElement("span");
        msgText.textContent = "You are too stressed, time for a breathing exercise!";
        msgText.style.fontFamily = "Narnia";
        msgText.style.fontSize = "3vw";
        msgText.style.textAlign = "center";
        msgText.style.color = "white";
        msgText.style.padding = "10px";
        msgText.style.borderRadius = "4px";
        msgText.style.textShadow = "0 0 10px rgba(0,0,0,0.8)";
        msgText.style.opacity = "0";
        msgText.style.transition = "opacity 1s ease";
        msgElem.appendChild(msgText);
        requestAnimationFrame(() => {
            msgText.style.opacity = "1";
        });
        
        // Na 4 sec, start smooth fade out van het bericht
        setTimeout(function() {
            msgText.style.opacity = "0";
            setTimeout(function() {
                msgElem.removeChild(msgText);
                
                // Maak de ademhalingscirkel met fade-in
                let circle = document.createElement("div");
                circle.id = "breathingCircle";
                circle.style.width = "10vw";
                circle.style.height = "10vw";
                circle.style.borderRadius = "50%";
                circle.style.backgroundImage = "url('/static/img/circle.png')";
                circle.style.backgroundSize = "cover";
                circle.style.display = "flex";
                circle.style.justifyContent = "center";
                circle.style.alignItems = "center";
                circle.style.fontFamily = "Narnia";
                circle.style.textAlign = "center";
                circle.style.fontSize = "3vw";
                circle.style.color = "white";
                // Set initial opacity to 0 for fade-in and add a transition
                circle.style.opacity = "0";
                circle.style.transition = "opacity 1s ease";
                msgElem.appendChild(circle);
                requestAnimationFrame(() => {
                    circle.style.opacity = "1";
                });
                
                // Voeg een child span toe voor smooth text fading in de cirkel
                let circleText = document.createElement("span");
                circleText.style.transition = "opacity 0.5s ease";
                circleText.style.opacity = "1";
                circleText.style.fontFamily = "Narnia";
                circleText.textContent = "INHALE";
                circle.appendChild(circleText);
                
                // Helper functie voor smooth text update in de cirkel
                function updateCircleText(newText, delay) {
                    setTimeout(() => {
                        circleText.style.opacity = "0";
                        setTimeout(() => {
                            circleText.textContent = newText;
                            circleText.style.opacity = "1";
                        }, 500);
                    }, delay);
                }
                
                // Functie om één ademhalingscyclus uit te voeren
                // Cyclus: 3s inhale, 3s hold, 3s exhale, 3s hold (12s totaal)
                function runCycle(count) {
                    // Reset de cirkel voor de cyclus
                    circle.style.transition = "";
                    circle.style.width = "10vw";
                    circle.style.height = "10vw";
                    circle.style.fontSize = "3vw";
                    circleText.textContent = "INHALE";
                    circleText.style.opacity = "1";
                    
                    // Animeer de expansie (inhale) over 3 seconden
                    setTimeout(function() {
                        circle.style.transition = "width 3s, height 3s, font-size 3s";
                        circle.style.width = "40vw";
                        circle.style.height = "40vw";
                        circle.style.fontSize = "8vw";
                    }, 50);
                    
                    updateCircleText("HOLD", 3000);    // Na 3 sec: "hold"
                    updateCircleText("EXHALE", 6000);   // Na 6 sec: "exhale"
                    // Animeer de contractie (exhale) over 3 sec
                    setTimeout(function() {
                        circle.style.transition = "width 3s, height 3s, font-size 3s";
                        circle.style.width = "10vw";
                        circle.style.height = "10vw";
                        circle.style.fontSize = "3vw";
                    }, 6000);
                    updateCircleText("HOLD", 9000);    // Na 9 sec: "hold"
                    
                    // Na 12 sec: start volgende cyclus of eindig oefening
                    setTimeout(function() {
                        if(count < 2) { // Pas het aantal cyclussen aan indien nodig
                            runCycle(count + 1);
                        } else {
                            // Fade out de cirkel eerst
                            circle.style.opacity = "0";
                            setTimeout(function() {
                                msgElem.removeChild(circle);
                                // Toon final bericht met smooth fade in
                                let finalMsg = document.createElement("span");
                                finalMsg.textContent = "did you see the change?";
                                finalMsg.style.fontFamily = "Narnia";
                                finalMsg.style.fontSize = "3vw";
                                finalMsg.style.color = "white";
                                finalMsg.style.padding = "10px";
                                finalMsg.style.borderRadius = "4px";
                                finalMsg.style.textShadow = "0 0 10px rgba(0,0,0,0.8)";
                                finalMsg.style.opacity = "0";
                                finalMsg.style.transition = "opacity 1s ease";
                                msgElem.appendChild(finalMsg);
                                requestAnimationFrame(() => {
                                    finalMsg.style.opacity = "1";
                                });
                                
                                // Na 4 seconden, fade final bericht uit
                                setTimeout(function() {
                                    finalMsg.style.opacity = "0";
                                    setTimeout(function() {
                                        msgElem.removeChild(finalMsg);
                                        breathingActive = false;
                                        // Verwijder overlay, zodat alleen de video's zichtbaar zijn
                                        let overlayElem = document.getElementById("exerciseOverlay");
                                        if (overlayElem) {
                                            document.body.removeChild(overlayElem);
                                        }
                                    }, 1000);
                                }, 4000);
                            }, 1000); // Wacht op fade-out van de cirkel
                        }
                    }, 12000);
                }
                
                // Start de eerste ademhalingscyclus
                runCycle(1);
                
            }, 1000); // Wacht 1 sec voor complete fade-out van het initiële bericht
        }, 4000); // Initiële bericht blijft 4 sec te zien
    }
});
// --- EINDE ADEMHALINGSOEFENING --- //


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
  'bloemen.mp4': '/static/Audio/Bloemenwav.wav',
  'water.mp4': '/static/Audio/Waterwav.wav',
  'wolken.mp4': '/static/Audio/Wolkenwav.wav',
  'waves.mp4': '/static/Audio/golven.wav',
  'vuur.mp4': '/static/Audio/Vuurwav.wav',
  'lava.mp4': '/static/Audio/lava.wav',
  'kwal.mp4': 'static/Audio/Kwalwav.wav',
  'storm.mp4': 'static/Audio/Stormwav.wav',
  'thunder.mp4': 'static/Audio/Donderwav.wav',
  'mist.mp4': '/static/Audio/Mistwav.wav',
  'regen.mp4': '/static/Audio/Regenwav.wav',
  'regen 2.mp4': '/static/Audio/regenBW.wav',
  'zwart_gat.mp4': 'static/Audio/Surprise [Black-Hole - Light-Star-Zoom - Group-Of-Jellyfish].wav',
  'stars.mp4': 'static/Audio/Surprise [Black-Hole - Light-Star-Zoom - Group-Of-Jellyfish].wav',
  'kwallen.mp4': 'static/Audio/Surprise [Black-Hole - Light-Star-Zoom - Group-Of-Jellyfish].wav',

  // Voeg hier eventueel meer mappings toe
};

const videoA = document.getElementById('videoA');
const videoB = document.getElementById('videoB');
let showingA = true;
let lastEmotion = null;
let lastFilename = null;
let lastVideoSwitch = 0; // lastVideoSwitch aanspreken zodat deze zeker actief is voor de eventlistener die oproept
let currentAudio = null;
let fadeInterval = null;
let fadeStep = 0.01; // kleinere stap voor smoothness
let fadeIntervalTime = 30; // snellere interval voor smoothness


// Init: videoA zichtbaar, videoB onzichtbaar
videoA.classList.add('show');
videoB.classList.add('hide');

socket.on('emotion', function(data) {
  const now = Date.now();
  if (now - lastVideoSwitch < 10000) return; // 10 seconden wachten tussen wissels
  lastVideoSwitch = now;
  
  const rawEmotion = data.emotion;
  const emotion = deepfaceToKey[rawEmotion];
  const videoList = emotionToVideos[emotion];
  if (!videoList) return;
  // Kies random video uit de lijst, voorkom herhaling van dezelfde video
  let options = videoList.filter(v => v !== lastFilename);
  if (options.length === 0) options = videoList;
  const filename = options[Math.floor(Math.random() * options.length)];
  if (!filename) return;
  // Audio altijd afspelen (alleen HIER, niet in oncanplay)
  if (audioMap[filename]) {
    crossfadeAudio(audioMap[filename]);
  } else {
    crossfadeAudio(null);
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
    // Audio crossfaden NIET meer hier aanroepen!
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

let nextAudio = null;

function crossfadeAudio(newSrc) {
  if (!newSrc) {
    // Geen nieuwe audio, fade huidige uit
    if (currentAudio) {
      let oldAudio = currentAudio;
      if (fadeInterval) clearInterval(fadeInterval);
      fadeInterval = setInterval(() => {
        if (oldAudio.volume > fadeStep) {
          oldAudio.volume = Math.max(0, oldAudio.volume - fadeStep);
        } else {
          oldAudio.volume = 0;
          oldAudio.pause();
          oldAudio.currentTime = 0;
          clearInterval(fadeInterval);
        }
      }, fadeIntervalTime);
      currentAudio = null;
    }
    return;
  }
  // Vergelijk altijd absolute paden
  const absNewSrc = new URL(newSrc, window.location.origin).href;
  if (currentAudio && currentAudio.src === absNewSrc) {
    if (currentAudio.paused) currentAudio.play();
    return;
  }
  if (fadeInterval) clearInterval(fadeInterval);
  let oldAudio = currentAudio;
  let nextAudio = new Audio(newSrc);
  nextAudio.volume = 0;
  nextAudio.loop = true;
  nextAudio.addEventListener('loadedmetadata', function startRandom() {
    if (nextAudio.duration && isFinite(nextAudio.duration)) {
      nextAudio.currentTime = Math.random() * nextAudio.duration;
    }
    nextAudio.play().then(() => {
      fadeInterval = setInterval(() => {
        if (nextAudio.volume < 0.99) {
          nextAudio.volume = Math.min(1.0, nextAudio.volume + fadeStep);
        }
        if (oldAudio) {
          if (oldAudio.volume > fadeStep) {
            oldAudio.volume = Math.max(0, oldAudio.volume - fadeStep);
          } else {
            oldAudio.volume = 0;
            oldAudio.pause();
            oldAudio.currentTime = 0;
            oldAudio = null;
          }
        }
        if ((!oldAudio || oldAudio.volume === 0) && nextAudio.volume >= 1.0) {
          clearInterval(fadeInterval);
          fadeInterval = null;
        }
      }, fadeIntervalTime);
      currentAudio = nextAudio;
    }).catch(e => {
      console.warn('Audio play error:', e);
      if (fadeInterval) clearInterval(fadeInterval);
      fadeInterval = null;
    });
    nextAudio.removeEventListener('loadedmetadata', startRandom);
  });
}

// --- WELCOME overlay ---
function showWelcomeOverlay() {
  let overlay = document.getElementById('welcomeOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'welcomeOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'opacity 1s';
    overlay.style.opacity = '1';
    overlay.style.overflow = 'hidden'; // Laat de video de container vullen

// Video-element dat als achtergrond dient
    let videoBg = document.createElement('video');
    videoBg.src = '/static/videos/welcome.mp4'; // Replace with your video file
    videoBg.autoplay = true;
    videoBg.loop = true;
    videoBg.muted = true;
    videoBg.playsInline = true; // zodat het automatisch afspeelt
    videoBg.style.position = 'absolute';
    videoBg.style.top = '50%';
    videoBg.style.left = '50%';
    videoBg.style.transform = 'translate(-50%, -50%)';
    videoBg.style.minWidth = '100%';
    videoBg.style.minHeight = '100%';
    videoBg.style.width = 'auto';
    videoBg.style.height = 'auto';
    videoBg.style.zIndex = '-1';  // Video komt zo achter de tekst
    overlay.appendChild(videoBg);

    // Container voor tekst in het middenste derde deel van het scherm
    let textContainer = document.createElement('div');
    textContainer.style.position = 'absolute';
    textContainer.style.left = '33.33vw';
    textContainer.style.top = '0';
    textContainer.style.width = '33.34vw';
    textContainer.style.height = '100vh';
    textContainer.style.display = 'flex';
    textContainer.style.flexDirection = 'column';
    textContainer.style.justifyContent = 'center';
    textContainer.style.alignItems = 'center';
    textContainer.style.wordBreak = 'break-word';
    textContainer.style.textAlign = 'center';
    textContainer.style.maxWidth = '100%';

    let text = document.createElement('span');
    text.textContent = 'WELCOME';
    text.className = 'welcome-title';
    text.style.fontSize = 'clamp(2rem, 6vw, 8vw)';
    textContainer.appendChild(text);

    let subtext = document.createElement('span');
    subtext.textContent = 'Stand on the colored dot';
    subtext.className = 'welcome-subtext';
    subtext.style.fontSize = 'clamp(1.2rem, 3vw, 4vw)';
    textContainer.appendChild(subtext);

    overlay.appendChild(textContainer);
    document.body.appendChild(overlay);

    setTimeout(() => {
      text.style.transition = 'opacity 0.7s';
      subtext.style.transition = 'opacity 0.7s';
      text.style.opacity = '0';
      subtext.style.opacity = '0';
      setTimeout(() => {
        text.textContent = 'Change your facial expression and explore';
        text.className = 'welcome-subtext';
        text.style.textAlign = 'center';
        text.style.fontSize = 'clamp(1.2rem, 3vw, 4vw)';
        text.style.wordBreak = 'break-word';
        text.style.textAlign = 'center';
        text.style.maxWidth = '100%';
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
    if (overlay) overlay.style.opacity = '0';
    setTimeout(() => { if (overlay) overlay.style.display = 'none'; }, 1000);
  }, 15000); // 15 seconden
}

// Toon direct bij het laden
showWelcomeOverlay();
// Herhaal elke 15 minuten
setInterval(showWelcomeOverlay, 15 * 60 * 1000);
