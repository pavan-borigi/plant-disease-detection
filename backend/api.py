import os
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import cv2

from flask_cors import CORS
app = Flask(__name__)
CORS(app)
MODEL_PATH = 'plant_disease_cnn.h5'
model = load_model(MODEL_PATH)

CLASS_LABELS = [
    'Pepper__bell___Bacterial_spot', 'Pepper__bell___healthy', 
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 
    'Tomato_Bacterial_spot', 'Tomato_Early_blight', 'Tomato_Late_blight', 
    'Tomato_Leaf_Mold', 'Tomato_Septoria_leaf_spot', 
    'Tomato_Spider_mites_Two_spotted_spider_mite', 'Tomato__Target_Spot', 
    'Tomato__Tomato_YellowLeaf__Curl_Virus', 'Tomato__Tomato_mosaic_virus', 
    'Tomato_healthy'
]
IMG_SIZE = 128

@app.route('/api/detect', methods=['POST'])
def detect():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    file = request.files['image']
    filepath = 'temp_image.jpg'
    file.save(filepath)
    img = image.load_img(filepath, target_size=(IMG_SIZE, IMG_SIZE))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    preds = model.predict(img_array)
    class_idx = np.argmax(preds[0])
    
    # Format the string cleanly: "Pepper__bell___Bacterial_spot" -> "Pepper bell - Bacterial spot"
    raw_name = CLASS_LABELS[class_idx]
    clean_name = raw_name.replace("___", " - ").replace("__", " ").replace("_", " ")
    result = clean_name
    confidence = float(np.max(preds[0]))
    if os.path.exists(filepath):
        os.remove(filepath)
    return jsonify({'result': result, 'confidence': confidence})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
