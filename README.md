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






















## Dependencies

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




