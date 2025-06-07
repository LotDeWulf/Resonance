# RESONANCE
This project implements real-time facial emotion detection using the `deepface` library and OpenCV. It captures video from the webcam, detects faces, predicts the emotions associated with each face and selects a video and musical piece reflecting the most dominant emotion every few seconds. 
To make this project come to life we used the ["Facial-Emotion-Recognition-using-OpenCV-and-Deepface"](https://github.com/manish-9245/Facial-Emotion-Recognition-using-OpenCV-and-Deepface/) repository as a base, made by [Manish Tiwari](https://github.com/manish-9245).
- Give this repository a ⭐ if you liked it, we would appreciate it!
- The Resonance team <3

# Instructables

## Supplies
- beamers (we used 3 beamers)
- camera
- speaker
- music (we used music by conservatoire students)
- Visual Studio code or any other coding program working with HTML/CSS/JS/Python
-	Python Version 3.12
-	PowerShell, terminal or any other CLI app
-	Video files of your choice
-	Audio files of your choice
-	Touchdesigner
![image](https://github.com/user-attachments/assets/cdaea181-8d2c-405c-ac6b-c7cb116e2cf0)


## Step 1: sketch
- The first thing to do is sketch. Make lots of rough sketches until you find something you want to move forward with.
  
![FNZBQOHMAJNZU90](https://github.com/user-attachments/assets/19f98ee8-58d7-4e4d-a4c3-e36dc248bf5b)
![FUC439LMAJNZU94](https://github.com/user-attachments/assets/a957d423-33cf-4f75-8d84-9639a9227438)
![FLMENNNMAJNZU98](https://github.com/user-attachments/assets/bfe98118-6446-43d9-9d02-701a15623760)
![F02NYOZMAJNZU9D](https://github.com/user-attachments/assets/6c91fc47-a9c3-4918-83e4-01b1004459bf)

## Step 2: flowchart
- The next thing to do is to make a flow chart. That's a kind of diagram where you outline the flow of the installation. This way, you get an overview of which parts you are going to add in your userflow. You already get an insight into what the installation is going to look like, without designing screens.

![F5NZ5PTMAJNZUI6](https://github.com/user-attachments/assets/b97b559d-8669-4199-bc87-c2502c9e2bbe)

## Step 3: visuals
### Visuals anger
- Now we look for short video's to go with the emotions we want to portray, starting with anger. We searched for 3 video's per emotion. Be sure to use copyright free video's. 

<img width="200" alt="FWYKADDMAJNZUMS" src="https://github.com/user-attachments/assets/fd24957b-6e09-4ddd-b0bc-e2c74b3fef7b" />
<img width="200" alt="FMRO91KMAJNZUN2" src="https://github.com/user-attachments/assets/02501123-9591-4679-8e88-74605eeae706" />
<img width="200" alt="FE57SQMMAJNZUND" src="https://github.com/user-attachments/assets/1ee348f5-4e18-47e0-ad15-140ed63dd853" />

### Visuals sadness

<img width="200" alt="FCUAN42MAJNZUOF" src="https://github.com/user-attachments/assets/704d770d-c5b7-478a-95e8-72c059a9a80d" />
<img width="200" alt="FW38AOOMAJNZUOU" src="https://github.com/user-attachments/assets/6677f795-65d0-4caf-b6f7-69a19bda6d1e" />
<img width="200" alt="FMLTA7PMAJNZUPA" src="https://github.com/user-attachments/assets/8b25eeff-1cd8-49b3-bd88-be3205a27217" />

### Visuals amazement

<img width="200" alt="FMRBRMCMAJNZURP" src="https://github.com/user-attachments/assets/16f40447-d9dc-420c-afc4-3466f0b3d851" />
<img width="200" alt="F5LVAHBMAJNZUS9" src="https://github.com/user-attachments/assets/25f2f4a6-7aa8-4583-b20f-e78ad98e0b16" />
<img width="200" alt="F90N2IWMAJNZUSX" src="https://github.com/user-attachments/assets/94d4f420-7822-4750-a823-25e17516e08f" />

### Visuals happiness

<img width="200" alt="FFOCTWHMAJNZUVN" src="https://github.com/user-attachments/assets/1ade5cc5-f4ae-4ae9-a41f-8b9a75305481" />
<img width="200" alt="FNT50UPMAJNZUWG" src="https://github.com/user-attachments/assets/7c20dc5b-7f74-49c1-8e15-6feb8395202a" />
<img width="200" alt="FMUTRU8MAJNZUX6" src="https://github.com/user-attachments/assets/5384ce86-c4bc-4b13-8c25-d9aa189b6db8" />

### Visuals fear

<img width="200" alt="F9GW1MRMAJNZUZL" src="https://github.com/user-attachments/assets/bb84b27d-97ae-4a12-b6b2-c481bc8db1ab" />
<img width="200" alt="F31EZA0MAJNZV0F" src="https://github.com/user-attachments/assets/1a2e1711-66c6-47d6-88be-82898a7ee68c" />
<img width="200" alt="FLMNB1GMAJNZV1A" src="https://github.com/user-attachments/assets/878a642a-cb2a-4705-9598-c0b164fe09e7" />

## Step 4: music
- We forwarded the different images to the conservatoire students so that they could make different compositions for the different images. You can also just find music pieces online that you can put under the video's.

  ![FB67GE7MAJNZV6A](https://github.com/user-attachments/assets/ba1814ff-9229-49f6-8763-b76401dd937b)

## Step 5: coding
### 1. Set up your project folder

Create a new folder (for example, "resonance") and create the following structure inside it:

<img width="400" alt="Scherm­afbeelding 2025-06-07 om 14 28 40" src="https://github.com/user-attachments/assets/16bc7c9f-d39c-4414-91fc-6fa7d9837c63" />



### 2. Create a virtual environment and install dependencies

#### 2.1 Open a terminal in your project folder and create a virtual environment. On Windows you can run:

python -m venv venv 
venv\Scripts\activate

#### 2.2 Then create a requirements.txt file with at least the following content:

Flask 
flask-socketio 
opencv-python 
deepface 
eventlet # (or gevent, for SocketIO async support)

#### 2.3 Install them with: 
pip install -r requirements.txt

### 3. Write the HTML template
Inside the templates folder, create index.html with basic HTML. Like this:

<img width="434" alt="Scherm­afbeelding 2025-06-07 om 15 46 23" src="https://github.com/user-attachments/assets/44a4faa8-089a-4fc4-b8e3-ad10cb068e66" />

### 4. Write the server code (emotion.py)
In the root folder, create the file emotion.py and include the following Python code:

#### First, Importing Modules and initializing the App

from flask import Flask, render_template
from flask_socketio import SocketIO
import threading, time, cv2
from deepface import DeepFace

app = Flask(__name__, static_folder='static')
socketio = SocketIO(app)

#### Now, add the Global Variables and Emotion Mapping

current_emotion = None

EMOTION_MAPPING = {
    "happy": "happy",
    "angry": "angry",
    "fear": "fear",
    "fearful": "fear",
    "sad": "sad",
    "surprise": "surprise",
    "surprised": "surprise"
}

#### Define the Route

@app.route('/')
def index():
    return render_template('index.html')

#### Add the Emotion Detection function

def detect_emotion(): 
global current_emotion 
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW) 
consecutive_trigger = 0 # Counter for consecutive trigger emotions (e.g., angry and fear) 

while True: 
ret, frame = cap.read() 
if not ret: 
continue 

try: 
result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False) 
detected = result[0]['dominant_emotion'] 
mapped = EMOTION_MAPPING.get(detected) 

if not mapped: 
continue 

print(f"Nieuwe emotie: {mapped}") 
current_emotion = mapped 
socketio.emit('emotion', {'emotion': mapped})

#### Add the counter of consecutively triggered emotions anger and/or fear for the breathing exercise

            # Count if the emotion is "angry" or "fear"
            if mapped in ["angry", "fear"]:
                consecutive_trigger += 1
                print(f"Consecutive trigger count: {consecutive_trigger}", flush=True)
                if consecutive_trigger == 4:
                    print("Four consecutive trigger emotions detected. Starting breathing exercise.")
                    socketio.emit('breathing_exercise', {'start': True})
                    consecutive_trigger = 0  # Reset counter after triggering
            else:
                consecutive_trigger = 0

#### Put a delay on the counter and handle errors

        except Exception as e:
            print("Fout:", e)

        time.sleep(5)

#### Run the Emotion Detection in a Background Thread

threading.Thread(target=detect_emotion, daemon=True).start()

#### Make sure the code launches on the start of the application

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)

### 5. Write the client-side Code (emotion.js)
Structure Your Code by Sections, It’s helpful to add clear section comments so you know where each piece of functionality lives.
Section one: Breathing Exercise Code:

#### // --- BREATHING EXERCISE SECTION --- //

var socket = io();
let breathingActive = false;  // global flag to prevent overlapping exercises

socket.on('breathing_exercise', function(data) {
    if (data.start) {
        if (breathingActive) return;
        breathingActive = true;

#### Create an overlay that dims the background (50% black) with fade-in:

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

#### Set up the message container (centered) for the exercise messages:

        const msgElem = document.getElementById('exerciseMessage');
        msgElem.style.zIndex = "101";
        msgElem.style.position = "fixed";
        msgElem.style.top = "50%";
        msgElem.style.left = "50%";
        msgElem.style.transform = "translate(-50%, -50%)";
        msgElem.style.textAlign = "center";
        msgElem.innerHTML = "";

#### Add a child span for text within the circle and define the helper:

        let circleText = document.createElement("span");
        circleText.style.transition = "opacity 0.5s ease";
        circleText.style.opacity = "1";
        circleText.style.fontFamily = "Narnia";
        circleText.textContent = "INHALE";
        circle.appendChild(circleText);
               
        function updateCircleText(newText, delay) {
            setTimeout(() => {
                circleText.style.opacity = "0";
                setTimeout(() => {
                    circleText.textContent = newText;
                    circleText.style.opacity = "1";
                }, 500);
            }, delay);
        }

#### Define the breathing cycle function (12-second cycle):

function runCycle(count) {
        // Reset the circle for the cycle
        circle.style.transition = "";
        circle.style.width = "10vw";
        circle.style.height = "10vw";
        circle.style.fontSize = "3vw";
        circleText.textContent = "INHALE";
        circleText.style.opacity = "1";
       
#### Animate the expansion (inhale) over 3 seconds:

        setTimeout(function() {
            circle.style.transition = "width 3s, height 3s, font-size 3s";
            circle.style.width = "40vw";
            circle.style.height = "40vw";
            circle.style.fontSize = "8vw";
        }, 50);
       
        updateCircleText("HOLD", 3000);    // After 3 sec: update to "HOLD"
        updateCircleText("EXHALE", 6000);  // After 6 sec: update to "EXHALE"

#### Animate the contraction (exhale) over 3 seconds:

        setTimeout(function() {
            circle.style.transition = "width 3s, height 3s, font-size 3s";
            circle.style.width = "10vw";
            circle.style.height = "10vw";
            circle.style.fontSize = "3vw";
        }, 6000);
        updateCircleText("HOLD", 9000);    // After 9 sec: update to "HOLD"

#### After 12 sec: either start a new cycle or end the exercise:

        setTimeout(function() {
            if(count < 2) { // Adjust this count for more cycles if desired
                runCycle(count + 1);
            } else {

#### In the “else”, fade out the circle and then show a final message:

                circle.style.opacity = "0";
                setTimeout(function() {
                    msgElem.removeChild(circle);
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
                   
#### Fade out the final message after 4 seconds:

                    setTimeout(function() {
                        finalMsg.style.opacity = "0";
                        setTimeout(function() {
                            msgElem.removeChild(finalMsg);
                            breathingActive = false;

                            // Remove the overlay so only videos remain
                            let overlayElem = document.getElementById("exerciseOverlay");
                            if (overlayElem) {
                                document.body.removeChild(overlayElem);
                            }
                        }, 1000);
                    }, 4000);
                }, 1000); // Wait 1 sec for circle fade-out
            }
        }, 12000);
    }

#### Start the first breathing cycle:

    runCycle(1);
   
}, 1000); // Wait 1 sec for complete fade-out of the initial message
}, 4000); // Display initial message for 4 sec
}
});

### // --- END OF BREATHING EXERCISE SECTION --- //

Section two: Video Transition Logic:

### // --- START VIDEO TRANSITION LOGIC SECTION --- //

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

  happy: [ Insert your “happy” videos like: "happy1.wav", "happy2.wav”],
  angry: [Insert your “angry” videos here],
  fear: [Insert your “fear” videos here],
  sad: [Insert your “sad” videos here],
  surprise: [Insert your “surprise” videos here]

};

const videoA = document.getElementById('videoA');

const videoB = document.getElementById('videoB');

let showingA = true;

let lastEmotion = null;

let lastFilename = null;

let lastVideoSwitch = 0;

let currentSwitchToken = 0; // To ensure sync


videoA.classList.add('show');

videoB.classList.add('hide');


function crossfadeVideo(nextFilename, switchToken) {

  const nextVideo = showingA ? videoB : videoA;
  const prevVideo = showingA ? videoA : videoB;
  nextVideo.src = `/static/videos/${nextFilename}?t=${Date.now()}`;
  nextVideo.style.transition = 'none';
  nextVideo.style.opacity = 0;
  nextVideo.classList.add('show');
  nextVideo.classList.remove('hide');
  prevVideo.classList.add('show');
  prevVideo.classList.remove('hide');
  nextVideo.load();
  
  
  nextVideo.oncanplay = () => {
    // Check if this is still the latest switch
    if (switchToken !== currentSwitchToken) return;
void nextVideo.offsetWidth; // Force reflow for CSS transition

#### Create a fade in/out using a timing and easing curve:

nextVideo.style.transition = 'opacity 2.5s cubic-bezier(0.77, 0, 0.175, 1)';
prevVideo.style.transition = 'opacity 2.5s cubic-bezier(0.77, 0, 0.175, 1)';
nextVideo.style.opacity = 1;
prevVideo.style.opacity = 0.7; // initial softer overlap
setTimeout(() => {

prevVideo.style.opacity = 0;
    }, 1200); // further fade out after 1.2 sec
    nextVideo.play();
    nextVideo.playbackRate = 1.0;
    prevVideo.playbackRate = 1.0;
    setTimeout(() => {
      prevVideo.classList.remove('show');
      prevVideo.classList.add('hide');
      prevVideo.style.opacity = '';
      nextVideo.style.opacity = '';
    }, 2500); // by the end of the transition
    showingA = !showingA;
    lastFilename = nextFilename;
  };
}

#### // --- END OF VIDEO TRANSITION LOGIC SECTION --- //

Section three: Audio Transition Logic:

#### // --- START AUDIO TRANSITION LOGIC SECTION --- //

const audioMap = {

  'flowers.mp4': '/static/Audio/flowers-audio.wav',
  'water.mp4': '/static/Audio/water-audio.wav',
  'clouds.mp4': '/static/Audio/clouds-audio.wav',
  'waves.mp4': '/static/Audio/waves-audio.wav',
  'fire.mp4': '/static/Audio/fire-audio.wav',
  'lava.mp4': '/static/Audio/lava-audio.wav',
  'jellyfish.mp4': '/static/Audio/jellyfish-audio.wav',
  'storm.mp4': '/static/Audio/storm-audio.wav',
  'thunder.mp4': '/static/Audio/thunder-audio.wav',
  'fog.mp4': '/static/Audio/fog-audio.wav',
  'rain.mp4': '/static/Audio/rain-audio.wav',
  'rain2.mp4': '/static/Audio/rain2-audio.wav',
  'blackhole.mp4': '/static/Audio/blackhole-audio.wav',
  'stars.mp4': '/static/Audio/stars.wav',
  'jellyfish2.mp4': '/static/Audio/jellyfish2-audio.wav',
  
};

let currentAudio = null;
let fadeInterval = null;
let fadeStep = 0.01;        // Smaller step for smooth fading
let fadeIntervalTime = 30;  // Faster interval in ms for smoothness

function getAudioForVideo(filename) {

  // Normalize the name: remove spaces and lower case
  const key = Object.keys(audioMap).find(k =>
    k.replace(/\s+/g, '').toLowerCase() === filename.replace(/\s+/g, '').toLowerCase()
  );
  return key ? audioMap[key] : null;
  
}

function crossfadeAudio(newSrc, switchToken) {
  
  if (!newSrc) {
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

#### // --- END OF AUDIO TRANSITION LOGIC SECTION --- //

Section four: Emotion Event Handling:

#### // --- START EMOTION EVENT HANDLING --- //

socket.on('emotion', function(data) {
  const now = Date.now();
  if (now - lastVideoSwitch < 10000) return;
  lastVideoSwitch = now;
  currentSwitchToken++;
  const switchToken = currentSwitchToken;
  const rawEmotion = data.emotion;
  const emotion = deepfaceToKey[rawEmotion];
  const videoList = emotionToVideos[emotion];
  if (!videoList) return;

#### Make sure a random video from the list gets selected, avoiding repetition:

  let options = videoList.filter(v => v !== lastFilename);
  if (options.length === 0) options = videoList;
  const filename = options[Math.floor(Math.random() * options.length)];
  if (!filename) return;

#### Perform the video and audio crossfade:

  crossfadeVideo(filename, switchToken);
  const audioSrc = getAudioForVideo(filename);
  if (audioSrc) {
    crossfadeAudio(audioSrc, switchToken);
  } else {
    crossfadeAudio(null, switchToken);
  }
});

#### // --- END OF EMOTION EVENT HANDLING --- //

Section five: Welcome Overlay:

#### // --- START welcome overlay --- //

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
    overlay.style.overflow = 'hidden';

#### Add the video element acting as the background:

    let videoBg = document.createElement('video');
    videoBg.src = '/static/videos/welcome.mp4'; // Replace with your video file
    videoBg.autoplay = true;
    videoBg.loop = true;
    videoBg.muted = true;
    videoBg.playsInline = true; // For mobile browsers
    videoBg.style.position = 'absolute';
    videoBg.style.top = '50%';
    videoBg.style.left = '50%';
    videoBg.style.transform = 'translate(-50%, -50%)';
    videoBg.style.minWidth = '100%';
    videoBg.style.minHeight = '100%';
    videoBg.style.width = 'auto';
    videoBg.style.height = 'auto';
    videoBg.style.zIndex = '-1';  // Video sits behind the text
    overlay.appendChild(videoBg);

#### Add a text container in the middle third of the screen:

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
    subtext.textContent = 'Sit on the colored dot';
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
  }, 15000); // 15 seconds
}
#### Add this to show the welcome overlay on load and every 15 minutes:

showWelcomeOverlay();
setInterval(showWelcomeOverlay, 15 * 60 * 1000);

#### // --- END OF WELCOME OVERLAY --- //

### 6. Place other assets

-	Place any video files (e.g., your welcome video and videos per emotion) in videos.
-	Place audio files in Audio.
-	Add fonts or CSS in static/css/ if needed.

#### If you want to upload this project to GitHub, you will need to make the static folder invisible in a .gitignore folder like this:

static/Audio/

static/videos/

### 7. Run the application
And lastly, with your virtual environment activated, run the server:

python emotion.py

## Step 6: Live performance (touchdesigner)

### 1. Input music

<img width="452" alt="image" src="https://github.com/user-attachments/assets/8bbcda71-786a-4a6f-988a-d46268a7ed3b" />

#### audiodevin1 [AudioDeviceIn CHOP]
For the input of the music you use the Audio Device In CHOP. In the parameters you set the device you want to use as microphone.

#### AudioAnalyses [AudioAnalysis component] 
To measure all kinds of properties of the music, you connect the input to the AudioAnalysis. The AudioAnalyses is a pre-made component of TouchDesigner to analyze the music and then easily converts it into data such as volume and beat detection.


<img width="324" alt="image" src="https://github.com/user-attachments/assets/f04205e8-4ebf-4050-a0af-fd366a933488" />

It is best to play around with these parameters yourself, based on your instrument or music, to get a feel for which parameters are most useful. In this example, only the 'Low' and 'Mid' are used.

#### null [null CHOP]
<img width="330" alt="image" src="https://github.com/user-attachments/assets/2066f351-0bc4-4305-bb8c-fc00fbf00895" />

The AudioAnaelyses is then connected to a null CHOP. Which converts the data to usable data for subsequent CHOPS in this project


### 2. Measuring the loudness

<img width="452" alt="image" src="https://github.com/user-attachments/assets/a7560d58-7469-48e9-b180-cc49e8056718" />

This is the layout for creating an analysis for the loudness of the music, and is thus related to the null CHOP from earlier.


#### express_loud, express_mid, express_low [express CHOP]
=>These are used to filter the data from the null. Here you can enter some python code, to determine when the music is considered loud, medium or soft.

<img width="193" alt="image" src="https://github.com/user-attachments/assets/4c43d6db-1357-4a98-870a-fa080664fce8" />

#### loud:
1 if op('null')['mid'] > 0.5 else 0

The express becomes 1 if the 'mid' value in the null is above 0.5, otherwise 0.

#### mid:
1 if op('null')['low'] > 0.03 else 0

The express becomes 1 if the 'mid' value in the null is above 0.03, otherwise 0.

#### soft:
1 if 0.01 < op('null')['low'] < 0.03 else 0

The express becomes 1 if the 'mid' value in the null is above 0.01 and below 0.03, otherwise 0.

! Test it yourself with your instrument of choice, and adjust the value as needed. This may vary.

#### logic_loud, logic_mid, logic_low [logic CHOP]
=> helps to make the value binary (0 or 1). This is necessary so that the count recognizes it

#### count_ loud, count_ mid, count_ low [count CHOP]
=>counts the amount when the value becomes 1. There is a trigger set for this. so when the value is above 0.5 it is added.


<img width="331" alt="image" src="https://github.com/user-attachments/assets/c54df31b-f10e-4608-bc56-09ee7fe20998" />

#### timer loudness [timer CHOP]
=> resets the CHOPs count to 0 every 6 seconds. So this provides a reset.

<img width="214" alt="image" src="https://github.com/user-attachments/assets/9735cece-1065-4609-983d-c6dbb43fbc4e" />

length set to 6 sec
cycle turned on (timer repeats infinitely)
on done set to restart: when the 6 seconds are done, it starts over again on start.

With the CHOP timer you also add a little bit of code to reset the counts:

<img width="452" alt="image" src="https://github.com/user-attachments/assets/347d4832-c33d-42dc-abe9-88e14e7398f6" />

#### script_loudness [script DAT]
=>This is a python code that determines the loudness of the music and puts an output in the text.

First he retrieves the count data and based on how many times the beats are counted per volume, he determines the result.

<img width="249" alt="image" src="https://github.com/user-attachments/assets/83c3401f-9c65-42d5-aa68-79f5ba158959" />

The result is shown here.

<img width="274" alt="image" src="https://github.com/user-attachments/assets/06ce63bf-91ee-4d17-9dd6-675ee8287aa2" />

This is the layout for creating an analysis for the loudness of the music, and is also connected to the null CHOP of the AudioAnalyses.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/1bd7eb79-c1c4-4492-8011-f714eea98aa2" />

#### express_peaks [express CHOP]
express (connected to the null of audioAnalyses)
=> This contains python code that detects all beats.

1 if 0.01 < op('null')['low'] < 0.03 else 0
value is 1 if the value in the null is above 0.03
is very low as every stroke counts.

<img width="289" alt="image" src="https://github.com/user-attachments/assets/f043ee65-4cc6-4030-8b66-7ebcbfd8a193" />

#### logic_peaks [logic CHOP]
=> convert value to binary value.

#### count_peaks [count CHOP]
=> counts all strokes, so number when the value becomes 1.

#### timer_peaks [timer CHOP]
=> resets the count to 0 every 4 seconds. So this provides a reset.

length set to 4 seconds.
cycle turned on (timer repeats infinitely)
on done set to restart: when the 4 seconds are done, it starts over again on start.

<img width="136" alt="image" src="https://github.com/user-attachments/assets/4824f4f9-4fb2-4384-acba-b5186049028c" />

When the timer reaches onDone (i.e. when the 4 seconds end) the count (count_peaks) is reset.

#### script_speed [script DAT]
=> this is a python code that determines the speed of the music and puts an output in the text (speed_result).

First he retrieves the data from the count and based on how often the strokes are counted he determines the speed.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/73c75c25-2a51-439a-a311-a10ea7662df3" />

<img width="452" alt="image" src="https://github.com/user-attachments/assets/666ed86f-6887-4501-b6a7-8219d0175226" />

### 3. Define rhythm

<img width="452" alt="image" src="https://github.com/user-attachments/assets/96b288c1-0a6d-4684-9cba-a96bacff4d98" />

#### This is the layout for creating an analysis to determine the rhythm type of the music, and is thus related to the null CHOP from earlier.

express_rhytmh [express CHOP]
express (connected to the null of audioAnalyses)

=>This contains Python code that detects all hits

<img width="215" alt="image" src="https://github.com/user-attachments/assets/2ca886e1-dce3-41e8-9f74-9281c764be6a" />

1 if 0.01 < op('null')['low'] < 0.03 else 0
value is 1 if the value in the null is above 0.03
It is very low since every stroke counts.


logic_ritme [logic CHOP]
=> convert value to binary value.

count_rhytmh [count CHOP]
=> counts all strokes, so number when the value becomes 1.

timer_rhytmh [timer CHOP]
=> resets the count to 0 every 4 seconds. So this provides a reset

<img width="229" alt="image" src="https://github.com/user-attachments/assets/011953e8-d77e-49db-8fa6-d5c8b552e7f5" />

length set to 3 sec
cycle turned on (timer repeats infinitely)
on done set to restart: when the 3 seconds are done, it starts over again on start.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/4607f3df-34c4-49af-bf45-f59f479dc276" />

##### Also a code is added to this timer CHOP to reset the count (count_rhythm).

script_rhytmh [script DAT]
=> this is a python code that determines the rhythm of the music and puts an output in the text (text_rhythm).

First he retrieves the data from the count and based on this he determines whether the rhythm is more chaotic or more flowing.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/1b0895ad-be3e-4152-91de-2e5890559281" />

<img width="452" alt="image" src="https://github.com/user-attachments/assets/fb79cfca-f7af-47f7-8212-3554a10757e1" />

<img width="452" alt="image" src="https://github.com/user-attachments/assets/069d5492-c3ad-4987-8907-841e9692fbd2" />

### 4. Output

Now that you can measure 3 different elements, this data has to show a certain image.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/71deafb7-63e2-44c2-a792-c04903ea2871" />

Here you see the size layout for showing the correct images.

#### loudness_result, speed_result, rythmh_ [text TOPS]
#### constant_loudness, constant_speed, constant_rhytmh [constant CHOPS]

=>These are the results that the python codes have given with each analysis and that you use to determine and show the images. The constants give the data in the form of numbers that determine the intensity. The constants are actually the most important data since we are going to use the data from that.

<img width="318" alt="image" src="https://github.com/user-attachments/assets/b093e80d-4aad-4664-b876-6a204ac0c694" />

#### script_result [script DAT]
#### combined_constant [constant CHOP]

<img width="274" alt="image" src="https://github.com/user-attachments/assets/0a8dea13-aae1-4f1b-a387-718cb60deae0" />

=> this is a python code that determines the image based on the different data and puts an output in the constant (combined_constant). The output is a number that is important for the switch later.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/75365660-9e6c-49e9-adca-e11bc2b472a6" />

#### switch [switch TOP]
#### multible moviefilein [moviefilein TOP]

<img width="452" alt="image" src="https://github.com/user-attachments/assets/f666db17-03eb-4a80-860b-0c01089030af" />

=> you add your chosen images in different moviefilein TOPs.
These are all connected to the switch. If you drag the slider in the parameters of the switch, you will see the value as well as the image change. So every image has a value. Here you can determine which image you want per combination of data and adjust this in the results in the script DAT from earlier.


The idea is that this value should match the combined_constant from earlier. That's why a little code needs to be added. ‘op('combined_constant')['chan1']’.

<img width="338" alt="image" src="https://github.com/user-attachments/assets/9646ab0c-691a-43b8-bc18-7f93928dcb04" />

#### cashe [cashe TOP]
#### casheselect [casheselect TOP]

<img width="452" alt="image" src="https://github.com/user-attachments/assets/db9ce514-7ac5-4a25-9e96-676ce288d4f0" />

=> To create a fade effect we use the cashe, to store the previous image. The cashe is connected to the switch and reads the current image. The casheselect then gives the image of the number of frames ago that you set.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/116ab913-3b18-4730-ad77-b444065bef70" />

#### timer_result [timer CHOP]
#### fade_control [cross TOP]

<img width="236" alt="image" src="https://github.com/user-attachments/assets/9b8edeec-128b-46ec-b272-02b21a25446c" />

=> the fade_control is a cross that can make a fade between 2 images. We let that fade happen automatically using the timer.

<img width="196" alt="image" src="https://github.com/user-attachments/assets/ea5c6b00-d391-42e8-9c1e-f0455e5190ba" />

length set to 6 sec
cycle turned on (timer repeats infinitely)
on done set to restart: when the 6 seconds are done, it starts over again on start.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/cf456e62-03fb-4553-9f39-6296a2e6d9c8" />

In the parameters here the cross is set based on the timer. The value goes from 0 to 1 and back in a time of 6 seconds. The value determines the fade between the 2 images.

#### output [null TOP]
#### window [window COMP]

<img width="189" alt="image" src="https://github.com/user-attachments/assets/79e63ce0-56c2-42bf-b06f-c26371f82906" />

=>The result in the fade_control will eventually become the end result. For this we connect it to a null (output). And use that null in a window COMP to show it as output.

#### Normally you can now open the perform window using f4.

! We personally have experienced problems with this that the window opens but the image does not change. To solve this problem open an extra screen with the perform window in the parameters of the window.

<img width="452" alt="image" src="https://github.com/user-attachments/assets/641f2323-8373-4f6a-9bd7-4d025754281c" />































































































## 8. Dependencies

- [deepface](https://github.com/serengil/deepface): A deep learning facial analysis library that provides pre-trained models for facial emotion detection. It relies on TensorFlow for the underlying deep learning operations.
- [OpenCV](https://opencv.org/): An open-source computer vision library used for image and video processing.

## Usage
### Initial steps:
- Git clone this repository Run: `git clone https://github.com/LotDeWulf/resonance.git`
- Run: `cd resonance`
1. Install the required dependencies:
   - You can use `pip install -r requirements.txt`
   - Or you can install dependencies individually:
      - `pip install deepface`
      - `pip install tf_keras`
      - `pip install opencv-python`
      - `pip install flask-socketio`

2. Download the Haar cascade XML file for face detection:
   - Visit the [OpenCV GitHub repository](https://github.com/opencv/opencv/tree/master/data/haarcascades) and download the `haarcascade_frontalface_default.xml` file.

3. Run the code:
   - Execute the Python script.
   - The webcam will turn on, and real-time facial emotion detection will start.
   - Videos will be played based on the emotions that are being detected.

## Approach

1. Import the necessary libraries: `cv2` for video capture and image processing, and `deepface` for the emotion detection model.

2. Load the Haar cascade classifier XML file for face detection using `cv2.CascadeClassifier()`.

3. Start capturing video from the default webcam using `cv2.VideoCapture()`.

4. Enter a continuous loop to process each frame of the captured video.

5. Convert each frame to grayscale using `cv2.cvtColor()`.

6. Detect faces in the grayscale frame using `face_cascade.detectMultiScale()`.

7. For each detected face, extract the face ROI (Region of Interest).

8. Preprocess the face image for emotion detection using the `deepface` library's built-in preprocessing function.

9. Make predictions for the emotions using the pre-trained emotion detection model provided by the `deepface` library.

10. Retrieve the index of the predicted emotion and map it to the corresponding emotion label.

11. Draw a rectangle around the detected face and label it with the predicted emotion using `cv2.rectangle()` and `cv2.putText()`.

12. Display the resulting frame with the labeled emotion using `cv2.imshow()`.

13. If the 'q' key is pressed, exit the loop.

14. Release the video capture and close all windows using `cap.release()` and `cv2.destroyAllWindows()`.




