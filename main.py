import pickle
import pandas as pd
from flask import Flask, request, jsonify

##creating a flask app and naming it "app"
app = Flask('app')

@app.route('/test', methods=['GET'])
def test():
    return 'Pinging Model Application!!'


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
    
    return jsonify(result)

#Run local the app
#if __name__ == '__main__':
   #app.run(debug=True, host='0.0.0.0', port=9696)