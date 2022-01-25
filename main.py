import pickle
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

##creating a flask app and naming it "app"
app = Flask('app')
CORS(app)

@app.route('/test', methods=['GET'])
def test():
    response = jsonify({'Response': 'Pinging Model Application!!'})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/deploy', methods=['GET'])
def deployTest():
    return 'Test connection git and herokut!!'

@app.route('/predict', methods=['POST'])
def predict():
    vehicle = request.get_json()
    print(vehicle)
    with open('model.bin', 'rb') as f_in:
        model = pickle.load(f_in)
        f_in.close()
        
    train = pd.DataFrame([vehicle])
    predictions = model.predict(train)

    result = {
        'mpg_prediction': list(predictions)
    }
    
    response = jsonify(result)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

#Run local the app
#if __name__ == '__main__':
   #app.run(debug=True, host='0.0.0.0', port=9696)