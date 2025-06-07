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
<img width="263" alt="Scherm­afbeelding 2025-06-07 om 14 28 40" src="https://github.com/user-attachments/assets/16bc7c9f-d39c-4414-91fc-6fa7d9837c63" />



### 2. Create a virtual environment and install dependencies

Open a terminal in your project folder and create a virtual environment. On Windows you can run:

python -m venv venv 
venv\Scripts\activate

Then create a requirements.txt file with at least the following content:

Flask 
flask-socketio 
opencv-python 
deepface 
eventlet # (or gevent, for SocketIO async support)

Install them with:

pip install -r requirements.txt
![image](https://github.com/user-attachments/assets/8eb446a9-9699-4381-a1e1-02babad99a67)













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




