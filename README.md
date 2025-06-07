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

## Step 1: sketch
- The first thing to do is sketch. Make lots of rough sketches until you find something you want to move forward with.
![FNZBQOHMAJNZU90](https://github.com/user-attachments/assets/19f98ee8-58d7-4e4d-a4c3-e36dc248bf5b)
![FUC439LMAJNZU94](https://github.com/user-attachments/assets/a957d423-33cf-4f75-8d84-9639a9227438)
![FLMENNNMAJNZU98](https://github.com/user-attachments/assets/bfe98118-6446-43d9-9d02-701a15623760)
![F02NYOZMAJNZU9D](https://github.com/user-attachments/assets/6c91fc47-a9c3-4918-83e4-01b1004459bf)


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




