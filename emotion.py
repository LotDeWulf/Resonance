from flask import Flask, render_template
from flask_socketio import SocketIO
import threading, time, cv2
from deepface import DeepFace

app = Flask(__name__, static_folder='static')
socketio = SocketIO(app)

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

@app.route('/')
def index():
    return render_template('index.html')

def detect_emotion():
    global current_emotion
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
    last_emotion = None

    while True:
        ret, frame = cap.read()
        if not ret:
            continue

        try:
            result = DeepFace.analyze(frame, actions=['emotion'], enforce_detection=False)
            detected = result[0]['dominant_emotion']
            mapped = EMOTION_MAPPING.get(detected)

            if not mapped or mapped == last_emotion:
                continue

            print(f"Nieuwe emotie: {mapped}")
            current_emotion = mapped
            last_emotion = mapped
            socketio.emit('emotion', {'emotion': mapped})

        except Exception as e:
            print("Fout:", e)

        time.sleep(5)

threading.Thread(target=detect_emotion, daemon=True).start()

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
